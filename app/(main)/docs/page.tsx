import { Card, CardBody } from '@nextui-org/card'
import Configuration from './items/Configuration'
import CustomDomain from './items/CustomDomain'
import Quickstart from './items/Quickstart'
import Discord from './items/Discord'
import Update from './items/Update'
import RCON from './items/RCON'
import Link from 'next/link'

export const PAGES: Page[] = [
	{
		title: 'Quickstart',
		description: 'How to download, install and run in any environment.',
		item: <Quickstart />,
	},
	{
		title: 'Custom Domain',
		description: 'Connet your panel to a custom domain using a reverse proxy & configure SSL.',
		item: <CustomDomain />,
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
	{
		title: 'Known Issues & Fixes',
		description: 'Known issues and their fixes.',
		item: <RCON />,
	},
	{
		title: 'FAQ',
		description: 'Frequently asked questions and their answers.',
		item: <RCON />,
	},
]

const DocsPage = () => {
	return (
		<>
			<h1 className='text-6xl font-semibold'>Documentation</h1>
			<div className='grid grid-cols-3 gap-10'>
				{PAGES.map((page) => (
					<Card
						className='w-full min-h-48 no-underline'
						key={page.title}
						href={`/docs/${page.title.toLowerCase().replace(' ', '-')}`}
						as={Link}
						isPressable
					>
						<CardBody className='flex flex-col text-center justify-center items-center gap-2 px-10 py-12'>
							<h2 className='text-xl font-medium text-blue-500'>{page.title}</h2>
							<p>{page.description}</p>
						</CardBody>
					</Card>
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
