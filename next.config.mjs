/** @type {import('next').NextConfig} */
const nextConfig = {
	// The Docker image (Dockerfile) sets NEXT_OUTPUT=standalone and runs the standalone
	// server.js; locally `next start` serves the plain build.
	...(process.env.NEXT_OUTPUT === 'standalone' ? { output: 'standalone' } : {}),
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.steamstatic.com',
			},
		],
	},
}

export default nextConfig
