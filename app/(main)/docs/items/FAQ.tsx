/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const questions: QA[] = [
	{
		question: 'Why do you need RCON?',
		answer: 'Some of the panel actions like advanced servers & players query, kicking, banning or muting a player, and executing commands require RCON to be enabled on your servers.',
	},
	{
		question: 'Do i have to use the panel plugin?',
		answer: 'No, the plugin is optional and only required if you want to use the panel actions. You can still use the panel with the SimpleAdmin plugin, not that you must use either one of them.',
	},
	{
		question: 'Why can\t I run the panel on a Web Hosting?',
		answer: (
			<>
				Since the panel is made on top of <Link href='https://nodejs.org/en/'>node.js</Link>, it's not possible
				to run the panel on a web hosting, as web hosting only supports static websites (.html, .css, .js, etc.
				files).
			</>
		),
	},
]

const FAQ = () => {
	return (
		<>
			{questions.map((q) => (
				<div key={q.question}>
					<h2 className='text-2xl font-medium'>{q.question}</h2>
					<p className='text-base mb-10'>{q.answer}</p>
				</div>
			))}
		</>
	)
}

interface QA {
	question: string
	answer?: JSX.Element | string
}

export default FAQ
