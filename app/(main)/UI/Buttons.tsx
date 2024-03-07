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
				href='https://github.com/CSSPanel/Panel/releases'
				target='_blank'
				className='w-full sm:w-fit text-center items-center no-underline'
			>
				<Button
					variant='bordered'
					color='gradient'
					className='from-blue-500 to-sky-500 shadow-sky-500/20 w-full lg:w-fit justify-center'
					gradientClassName='w-full sm:w-fit justify-center'
				>
					Download
				</Button>
			</Link>

			<Link
				href='/docs'
				className='w-full lg:w-fit text-center items-center no-underline'
			>
				<Button
					variant='bordered'
					className='!font-normal justify-center w-full sm:w-fit '
					gradientClassName='justify-center'
				>
					Docs <IconArrowRight className='ml-6' />
				</Button>
			</Link>
		</motion.div>
	)
}

export default Buttons
