'use client'

import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'

export interface ProvidersProps {
	children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
	const router = useRouter()

	return (
		<NextUIProvider navigate={router.push}>
			<ThemeProvider>
				<Toaster />
				{children}
			</ThemeProvider>
		</NextUIProvider>
	)
}

export default Providers
