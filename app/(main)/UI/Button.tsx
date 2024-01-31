'use client'

import { IconArrowRight } from '@tabler/icons-react'
import { fadeUpSlide } from '@/config/animations'
import { motion } from 'framer-motion'
import Button from '@/app/UI/Components/Button'
import Link from 'next/link'

const Buttons = () => {
	return (
		<motion.div
			className='flex flex-col sm:flex-row gap-5 p-8 items-center justify-center w-full sm:w-fit'
			viewport={{ once: true }}
			variants={fadeUpSlide}
			whileInView='in'
			initial='start'
			custom={2}
		>
			<Link
				href='https://github.com/ShiNxz/CSS-Panel'
				className='w-full sm:w-fit text-center items-center'
			>
				<Button
					variant='bordered'
					color='gradient'
					className='from-blue-500 to-sky-500 shadow-sky-500/20 w-full sm:w-fit justify-center'
					gradientClassName='w-full sm:w-fit justify-center'
				>
					Download
				</Button>
			</Link>

			<Button
				variant='bordered'
				className='!font-normal w-full sm:w-fit justify-center'
				gradientClassName='w-full sm:w-fit justify-center'
			>
				Docs <IconArrowRight className='ml-6' />
			</Button>
		</motion.div>
	)
}

export default Buttons
