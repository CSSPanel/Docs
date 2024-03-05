/* eslint-disable react/no-unescaped-entities */
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

const RCON = () => {
	return (
		<>
			<h2 className='text-2xl'>Why do you need RCON?</h2>
			<p className='text-base mb-10'>
				Some of the panel actions like advanced servers & players query, kicking, banning or muting a player,
				and executing commands require RCON to be enabled on your servers.
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
			<b>Important note:</b>
			The plugin will automatically update the servers rcon password on every server start,
			<br />
			editing the server rcon password manually through the panel will cause the plugin to overwrite the password
			on the next server start.
		</>
	)
}

export default RCON
