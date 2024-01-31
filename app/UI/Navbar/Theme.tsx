import { useEffect, useState } from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { Button } from '@nextui-org/button'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Button
			onClick={() => setTheme(theme === `dark` ? `light` : `dark`)}
			size='sm'
			variant='faded'
			color='primary'
			isIconOnly
		>
			{theme === `dark` ? <IconMoon size={20} /> : <IconSun size={20} />}
		</Button>
	)
}

export default ThemeSwitch
