import { PAGES } from '../page'

const DocsPage = ({ params }: { params: { item: string } }) => {
	const { item } = params
	const page = PAGES.find((p) => p.title.toLowerCase().replace(' ', '-') === item.toLowerCase().replace(' ', '-'))
	if (!page) return <h1>Page not found</h1>

	return (
		<>
			<div className='flex flex-col gap-6 items-center'>
				<h1 className='text-6xl font-semibold'>{page.title}</h1>
				<h2 className='text-lg underline'>{page.description}</h2>
			</div>
			<div className='flex flex-col items-start gap-2'>{page.item}</div>
		</>
	)
}

export default DocsPage
