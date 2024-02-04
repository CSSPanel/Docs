/* eslint-disable react/no-unescaped-entities */
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

const Update = () => {
	return (
		<>
			<h2 className='text-3xl'>Keep the panel updated</h2>
			<p className='text-lg mb-10'>
				if you are running the panel in a service like Easypanel or Vercel, the panel will update automatically.
				<br />
				You can also update the panel manually by running the following commands:
				<br />
				<Snippet>pnpm pull</Snippet>
				<br />
				<br />
				This will check if there is remote updates and update the panel to the latest version.
			</p>
			<h2 className='text-3xl'>Next Steps</h2>
			<Link href='/docs/discord'>Discord</Link>
		</>
	)
}

export default Update
