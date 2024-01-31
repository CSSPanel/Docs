import type { Metadata } from 'next'
import { fontRoboto } from '@/config/fonts'
import Layout from './UI'
import Providers from './providers'
import clsx from 'clsx'

import './styles/globals.scss'

export const metadata: Metadata = {
	title: 'CSS Panel',
	description: '...',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<head />
			<body className={clsx('min-h-screen antialiased text-foreground bg-background', fontRoboto.className)}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout
