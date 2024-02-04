import { Card, CardBody } from '@nextui-org/card'
import Link from 'next/link'
import Quickstart from './items/Quickstart'
import Configuration from './items/Configuration'
import Update from './items/Update'
import Discord from './items/Discord'
import RCON from './items/RCON'

export const PAGES: Page[] = [
	{
		title: 'Quickstart',
		description: 'How to download, install and run in any environment.',
		item: <Quickstart />,
	},
	{
		title: 'Configuration',
		description: 'How to configure the panel to your needs.',
		item: <Configuration />,
	},
	{
		title: 'Updating',
		description: 'How to update the panel to the latest version.',
		item: <Update />,
	},
	{
		title: 'Discord',
		description: 'Connect your panel to your discord server and get notified for every action.',
		item: <Discord />,
	},
	{
		title: 'RCON',
		description: 'Connect your panel to your servers RCON and execute commands.',
		item: <RCON />,
	},
]

const DocsPage = () => {
	return (
		<>
			<h1 className='text-6xl font-semibold'>Documentation</h1>
			<div className='grid grid-cols-3 gap-10'>
				{PAGES.map((page) => (
					<Link
						key={page.title}
						href={`/docs/${page.title.toLowerCase()}`}
						className='no-underline'
						passHref
					>
						<Card
							className='w-full min-h-48'
							isPressable
						>
							<CardBody className='flex flex-col text-center justify-center items-center gap-2 px-10 py-12'>
								<h2 className='text-xl font-medium text-blue-500'>{page.title}</h2>
								<p>{page.description}</p>
							</CardBody>
						</Card>
					</Link>
				))}
			</div>
		</>
	)
}

interface Page {
	title: string
	description: string
	item: JSX.Element
}

export default DocsPage
