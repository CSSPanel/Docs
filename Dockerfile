# syntax=docker/dockerfile:1
#
# The CSS Panel docs site: Next.js, installed with pnpm (pnpm-lock.yaml), served
# from Next's standalone output by Node.
#
# Easypanel (docs): source GitHub, Build Path `/`, build type Dockerfile, file
# `Dockerfile`, no build or start command. Locally: docker build .
#
# NEXT_PUBLIC_REPO and NEXT_PUBLIC_DISCORD are baked into the bundle at build
# time. The committed .env holds their defaults; a value set on the Easypanel
# service reaches the build as a build arg and wins over it, so changing one takes
# a redeploy. Everything else (database, Steam) is read at runtime.

FROM node:26.12.1-trixie-slim AS deps
# Node 25+ no longer ships corepack. pnpm 8 is the one that writes this
# lockfile's format (v6.0).
RUN npm install -g pnpm@8.15.9
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN --mount=type=cache,target=/root/.local/share/pnpm/store,sharing=locked pnpm install --frozen-lockfile

# ---------------------------------------------------------------------------
FROM deps AS build
ENV NEXT_TELEMETRY_DISABLED=1 \
	NEXT_OUTPUT=standalone
COPY . .
ARG NEXT_PUBLIC_REPO=
ARG NEXT_PUBLIC_DISCORD=
# An empty build arg is unset first, so the .env default applies instead of "".
RUN for v in NEXT_PUBLIC_REPO NEXT_PUBLIC_DISCORD; do \
		eval "[ -n \"\${$v}\" ] || unset $v"; \
	done \
	&& pnpm run build

# ---------------------------------------------------------------------------
# server.js next to a traced node_modules; static/ and public/ are not part of
# the trace and are copied in.
FROM node:26.12.1-trixie-slim AS runtime
WORKDIR /app
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
# HOSTNAME: Docker sets it to the container id, and Next's standalone server binds to it.
ENV NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1 \
	PORT=3000 \
	HOSTNAME=0.0.0.0
USER node
EXPOSE 3000
STOPSIGNAL SIGTERM
CMD ["node", "server.js"]
