'use client'

import Link from 'next/link'
import Particle from '../UI/Particle'
import Buttons from './UI/Buttons'
import { motion } from 'framer-motion'
import { fadeUpSlide } from '@/config/animations'

const Home = () => {
	return (
		<div className='flex flex-col items-center text-center justify-between gap-10 relative overflow-hidden'>
			<Particle
				style='from-blue-500 to-sky-500'
				variant='TL'
			/>
			<Particle
				style='from-orange-500 to-red-500'
				variant='BR'
			/>

			<motion.h1
				className='text-4xl lg:text-4xl xl:text-8xl font-black'
				viewport={{ once: true }}
				variants={fadeUpSlide}
				whileInView='in'
				initial='start'
				custom={0}
			>
				CSSharp Panel - Admin Web Panel
			</motion.h1>
			<motion.p
				className='text-xl xl:text-2xl lg:w-2/3 mx-auto'
				viewport={{ once: true }}
				variants={fadeUpSlide}
				whileInView='in'
				initial='start'
				custom={1}
			>
				CSSharp Panel is a web panel for{' '}
				<Link
					href='https://docs.cssharp.dev'
					className='underline decoration-2 decoration-sky-500'
				>
					CounterStrikeSharp
				</Link>{' '}
				that includes many features such as servers management, admins management, ban & comms management, rcon
				functions and much more, with a modern UI and a lot of customization options.
			</motion.p>

			<Buttons />
		</div>
	)
}

export default Home
