/* eslint-disable react/no-unescaped-entities */
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

const Update = () => {
	return (
		<>
			<h2 className='text-2xl'>- Auto Update</h2>
			<p className='text-base mb-10'>
				Starting from version 0.9.5 the panel has an update button at the top of your panel and only visible to
				admins.
				<br />
				Clicking on the button will update the panel to the latest version. <br />
				<br />
				Important Notes:
				<br />- The update button will only appear if a new version is available.
				<br />
				- The update should also restart the panel process, if it doesn't, you will need to restart the process
				manually.
				<br />
			</p>
			<b>If the update button doesnt work you can try the following options:</b>
			<br />
			<h2 className='text-2xl'>- Using Easypanel</h2>
			<p className='text-base mb-10'>
				if you are running the panel in a service like Easypanel, the panel will update automatically on every
				Deploy.
			</p>
			<h2 className='text-2xl'>- Using Pterodactyl</h2>
			<p className='text-base mb-10'>
				if you are running the panel through Pterodactyl using our Egg, the panel will update automatically on
				every restart.
			</p>
			<h2 className='text-2xl'>- VPS Manual hosting</h2>
			<p className='text-base mb-10'>
				if you are running the panel through node.js / pm2, you will need to update the panel manually by
				running the following commands: <br />
				<Snippet>pnpm run update && pnpm pull</Snippet>
				<br />
				<br />
				And restart the process.
			</p>
			<h2 className='text-2xl'>Next Steps</h2>
			<Link href='/docs/discord'>Discord</Link>
		</>
	)
}

export default Update
