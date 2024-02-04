/* eslint-disable react/no-unescaped-entities */
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

const Discord = () => {
	return (
		<>
			<h2 className='text-3xl'>Connect your Discord server</h2>
			<p className='text-lg mb-10'>
				You can connect your panel to your discord server and get notified for every action that happens on your
				panel.
				<br />
				1. Head over to your discord server and create a new channel, name it whatever you want.
				<br />
				2. Right click on the channel and click on "Edit", then head over to the "Integrations" tab and click on
				"Create Webhook".
				<br />
				3. Click on the webhook and click on "Copy Webhook URL"
				<br />
				4. Head over to the panel and head over to the Admin Panel {'->'} Panel Settings {'->'} Advanced and
				paste the webhook URL in the "Discord Webhook URL" field.
				<br />
				5. Hit "Save".
				<br />
				6. Now you will get notified for every action that happens on your panel.
			</p>
			<h2 className='text-3xl'>Next Steps</h2>
			<Link href='/docs/rcon'>Set up RCON</Link>
		</>
	)
}

export default Discord
