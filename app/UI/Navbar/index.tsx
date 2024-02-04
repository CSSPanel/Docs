'use client'

import ThemeSwitch from './Theme'
import { Link } from '@nextui-org/link'
import { useState } from 'react'
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<NextUINavbar
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				wrapper: 'max-w-[100%]',
			}}
			className='border-b border-slate-500/10'
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>CSS Panel</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className='hidden sm:flex gap-4'
				justify='center'
			>
				<NavbarItem>
					<Link
						color='foreground'
						href='/'
					>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color='foreground'
						href='/docs'
					>
						Docs
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color='foreground'
						href='/discord'
					>
						Discord
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color='foreground'
						href='/modules'
					>
						Modules
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link
						className='w-full'
						href='/'
						size='lg'
					>
						Home
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className='w-full'
						href='/docs'
						size='lg'
					>
						Docs
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className='w-full'
						href='/discord'
						size='lg'
					>
						Discord
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className='w-full'
						href='/modules'
						size='lg'
					>
						Modules
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar>
	)
}

export default Navbar
