/* eslint-disable react/no-unescaped-entities */
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

const RCON = () => {
	return (
		<>
			<h2 className='text-2xl'>Why do you need RCON?</h2>
			<p className='text-base mb-10'>
				Some of the panel actions like kicking, banning or muting a player, and executing commands require RCON
				to be enabled on your server and set up on the panel.
				<br />
			</p>
			<h2 className='text-2xl'>Enabling RCON on the servers</h2>
			<p className='text-base mb-10'>
				1. Head over to your server and open the `/game/csgo/cfg/server.cfg` file, and add the following line:
				<br />
				<Snippet>rcon_password "your_rcon_password"</Snippet>
				<br />
				<br />
				2. Restart your server.
			</p>
			<h2 className='text-2xl'>Setup the panel RCON</h2>
			<p className='text-base mb-10'>
				Head over to the Admin Panel {'->'} Panel Settings {'->'} Servers and set the RCON Password there.
				<br />
				The panel will then try to connect to your servers RCON and check if the password is correct.
			</p>
		</>
	)
}

export default RCON
