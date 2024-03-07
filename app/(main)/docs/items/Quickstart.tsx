'use client'

/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import Link from 'next/link'

const Quickstart = () => {
	return (
		<>
			<h2 className='text-3xl font-medium'>Prerequisites</h2>
			<p className='text-base mb-10'>
				Before we get started, let’s make sure you meet these following requirements:
				<ul>
					<li>
						<b>Counter-Strike 2 Server:</b>
						<ul>
							<li>
								-{' '}
								<Link
									href='https://docs.cssharp.dev'
									target='_blank'
								>
									CS Sharp
								</Link>{' '}
								installed
							</li>
							<li>
								-{' '}
								<Link
									href='https://www.sourcemm.net/downloads.php'
									target='_blank'
								>
									Metamod
								</Link>{' '}
								installed
							</li>
						</ul>
					</li>
					<li>
						<b>Panel: one of the options below</b>
						<ul>
							<li>/ Linux VPS</li>
							<li>/ Pterodactyl Panel</li>
							<li>/ VPS with Easypanel</li>
							<li>
								/ <Link href='#hosting'>Remote hosting from us</Link>
							</li>
						</ul>
					</li>
				</ul>
			</p>
			<h2 className='text-3xl font-medium'>Downloading the plugin</h2>
			<p className='text-base mb-10'>
				The plugin will handle everything related to admins, bans, and mutes on your servers.
				<br />
				1. Download the latest release{' '}
				<Link
					href={`${process.env.NEXT_PUBLIC_REPO}/Plugin/releases`}
					target='_blank'
				>
					here
				</Link>
				.<br />
				2. Place the plugin inside the <Code>/game/csgo/addons/counterstrikesharp/plugins</Code> folder.
				<br />
				3. Navigate to your <Code>addons/counterstrikesharp/configs/plugins/CSS-Panel</Code> directory and edit
				the <Code>CSS-Panel.json</Code> file{' '}
				<Link href={`${process.env.NEXT_PUBLIC_REPO}/Panel/blob/main/config.json`}>
					with the following settings
				</Link>
				.
				<br />
				<br />
				<b>Do I have to use this plugin?</b>
				<br />
				The plugin is an upgraded version of the{' '}
				<Link
					href='https://github.com/daffyyyy/CS2-SimpleAdmin'
					target='_blank'
				>
					Simple-Admin
				</Link>{' '}
				that built to work and sync with the panel, it's not required to use the panel, but it's highly
				recommended to use it, as it's the only way to get the full functionality of the panel (Admin Groups,
				Full server queries, etc.)
				<br />
				Note that <b>you must</b> use either the{' '}
				<Link
					href='https://github.com/daffyyyy/CS2-SimpleAdmin'
					target='_blank'
				>
					Simple-Admin
				</Link>{' '}
				plugin or this plugin in order to use the panel.
				<br />
			</p>
			<h2 className='text-3xl font-medium'>Downloading & Installing the panel</h2>
			<p className='text-base mb-10'>
				There are many ways to run the panel, choose the most suitable way for you.
				<br />
				Note that you must have one of the above prerequisites in order to run the panel.
				<br />
				<b>Why not Web Hosting?</b> <br />
				Since the panel is made on top of <Link href='https://nodejs.org/en/'>node.js</Link>, it's not possible
				to run the panel on a web hosting, as web hosting only supports static websites (.html, .css, .js, etc.
				files).
			</p>

			<Accordion>
				<AccordionItem
					key='1'
					aria-label='Easypanel'
					subtitle={
						"This is the most recommended way to run the panel, as it's the easiest, fastest way to get the panel up and running without much effort, and also connect it to a domain or subdomain with ssl easily."
					}
					title={
						<h2 className='text-2xl'>
							Option 1: Running the panel on a VPS with{' '}
							<Link
								href='https://easypanel.io'
								target='_blank'
							>
								Easypanel
							</Link>{' '}
							(Recommended)
						</h2>
					}
				>
					<p className='text-base mb-10'>
						<b>Requirements:</b>
						<br />- Linux VPS with{' '}
						<Link
							href='https://easypanel.io'
							target='_blank'
						>
							Easypanel
						</Link>{' '}
						installed, the installation is very easy and takes only a few minutes with a simple command.
						<br />
						<br />
						1. Create a new Project on Easypanel.
						<br />
						2. Create a new App (App service), name it whatever you want.
						<br />
						3. In the "Source" tab, set the following settings:
						<br />
						<b>- Owner:</b> CSSPanel
						<br />
						<b>- Repository:</b> Panel
						<br />
						<b>- Branch:</b> main
						<br />
						<b>- Build path:</b> /<br />
						(note that you should use this configuration in order to keep your panel up to date and follow
						our updates)
						<br />
						<br />
						4. Hit Save. <br />
						5. In the "Build" section, select "Dockerfile", keep the value empty and hit "Save". <br />
						6. Head over to the "Environment" tab and add the{' '}
						<Link
							href={`${process.env.NEXT_PUBLIC_REPO}/Panel/blob/main/.env.example`}
							target='_blank'
						>
							following environment variables
						</Link>
						, and edit them accordingly. (you must do that before the next steps!) <br />
						7. Head over to "Domains" and add your domain or subdomain{' '}
						<b>and connect the domain to port 3000 instead of 80</b>. <br />
						8. Hit "Deploy" and wait for the deployment to finish. <br />
						<br />
						<b>Important Notes:</b>
						<br />
						- On every new release, please click on "Deploy" to update the panel to the latest version.
						<br />
						- You can also add a custom domain or subdomain with SSL easily from the "Domains" tab.
						<br />
					</p>
				</AccordionItem>
				<AccordionItem
					key='2'
					aria-label='Pterodactyl'
					subtitle='This is also a recommended way to run the panel as most of the communities are using Pterodactyl to host their game servers.'
					title={
						<h2 className='text-2xl'>
							Option 2: Running the panel on{' '}
							<Link
								href='https://pterodactyl.io'
								target='_blank'
							>
								Pterodactyl
							</Link>{' '}
							(Recommended)
						</h2>
					}
				>
					<p className='text-base mb-10'>
						Note that the panel will run on the ip:port you will choose, and you can also connect a custom
						domain by defining a reverse proxy (listed below).
						<br />
						<br />
						<b>Requirements:</b>
						<br />- Linux VPS/Machine with{' '}
						<Link
							href='https://pterodactyl.io'
							target='_blank'
						>
							Pterodactyl
						</Link>{' '}
						installed.
						<br />
						<br />
						1. Download the custom egg{' '}
						<Link
							href='https://github.com/CSSPanel/pterodactyl-egg'
							target='_blank'
						>
							here
						</Link>
						. 2. Upload the egg to your Pterodactyl panel (Admin Panel {'>'} Nests {'>'} Import Egg).
						<br />
						3. Create a new server using the egg, do not change the launch options if you don't know what
						you're doing.
						<br />
						4. The panel will be running on the ip:port you chose during the server setup.
						<br />
						5. Head over to the IP:Port and start the panel setup.
						<br />
						6. The panel should create the `.env` file for you during the setup, if it didn't, create it
						manually and add the{' '}
						<Link href={`${process.env.NEXT_PUBLIC_REPO}/Panel/blob/main/.env.example`}>
							following environment variables
						</Link>{' '}
						and edit them accordingly.
						<br />
						7. The panel should be working now, you can connect a custom domain by defining a reverse proxy.
						<br />
						<br />
						<h2 className='text-lg font-medium'>Connect a custom domain:</h2>
						Connect a custom domain to the panel, instead of using the server IP:Port you can define a nginx
						reverse proxy.
						<br />
						<Link
							href='/docs/custom-domain'
							target='_blank'
						>
							Follow this guide to define a reverse proxy & SSL Certificate
						</Link>
					</p>
				</AccordionItem>
				<AccordionItem
					key='3'
					aria-label='Accordion 3'
					subtitle='This is the most advanced way to run the panel, as you will have to install everything manually'
					title={<h2 className='text-2xl'>Option 3: Running on a VPS manually</h2>}
				>
					<p className='text-base mb-10'>
						1. Install node.js and npm on your server by following{' '}
						<Link
							href='https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04'
							target='_blank'
						>
							this guide
						</Link>
						.
						<br />
						2. Install pnpm using the following command:
						<br />
						<Snippet>npm i -g pnpm</Snippet>
						<br />
						<br />
						3. Download the panel using the following command:
						<br />
						<Snippet>{`git clone ${process.env.NEXT_PUBLIC_REPO}/Panel css-panel`}</Snippet>
						<br />
						<br />
						4. Navigate to the panel directory and install the dependencies:
						<br />
						<Snippet>pnpm install</Snippet>
						<br />
						<br />
						5. Download pm2 to keep the panel running in the background:
						<br />
						<Snippet>pnpm i -g pm2</Snippet>
						<br />
						<br />
						6. Start the panel using the following command:
						<br />
						<Snippet>pnpm pm2</Snippet>
						<br />
						<br />
						The panel should now be running on{' '}
						<Link
							href='http://localhost:3000'
							target='_blank'
						>
							http://localhost:3000
						</Link>
						<br />- note that `localhost` is your machine ip, for example `1.1.1.1`
						<br />
						7. Head over to the panel (ip:port) and start the setup.
						<br />
						8. The panel should create the `.env` file for you during the setup, if it didn't, create it
						manually and add the{' '}
						<Link href={`${process.env.NEXT_PUBLIC_REPO}/Panel/blob/main/.env.example`}>
							following environment variables
						</Link>{' '}
						and edit them accordingly.
						<br />
						9. The panel should be working now, you can connect a custom domain by defining a reverse proxy
						(more information below).
						<br />
						10. The panel should be running in the background, you can stop it using the following command:{' '}
						<br />
						<Snippet>pm2 stop CSSPanel</Snippet>
						<br />
						<br />
						11. Optional, you can set the process to start on boot using the following command: <br />
						<Snippet>pm2 startup && pm2 save</Snippet>
						<br />
						<br />
						<h2 className='text-lg font-medium'>Connect a custom domain:</h2>
						Connect a custom domain to the panel, instead of using the server IP:Port you can define a nginx
						reverse proxy.
						<br />
						<Link
							href='/docs/custom-domain'
							target='_blank'
						>
							Follow this guide to define a reverse proxy & SSL Certificate
						</Link>
					</p>
				</AccordionItem>
				<AccordionItem
					key='4'
					aria-label='Remote paid hosting'
					subtitle={
						"If you don't have a VPS or you are getting confused with the above options, you can get a remote hosting from us, we will host the panel for you and keep it up to date."
					}
					title={<h2 className='text-2xl'>Option 4: Remote paid hosting</h2>}
				>
					<p className='text-base mb-10'>
						Note that this is a paid service, and you can{' '}
						<Link
							href={process.env.NEXT_PUBLIC_DISCORD || 'https://discord.gg/r96PSHfNcW'}
							target='_blank'
						>
							contact us
						</Link>{' '}
						for more information.
						<br />
						<br />
						<b>Advantages</b>
						<ul>
							<li>- You will not have to install anything, we will do that for you.</li>
							<li>- We will connect your custom domain & provide SSL Certificate.</li>
							<li>- We will keep the panel running 24/7.</li>
							<li>- We will keep the panel up to date.</li>
						</ul>
					</p>
				</AccordionItem>
			</Accordion>

			<hr className='border border-foreground-200 w-full my-4' />
			<h2 className='text-2xl'>Notes</h2>
			<p className='text-base mb-10'>
				- The panel should log into your db and create the necessary tables on the first run, if it didn't, make
				sure your db credentials are correct.
				<br />- The panel should pull all the admin users from your SimpleAdmin db, you can login into the panel
				using steam if you're an admin,
				<br />
				and you can also add more admins from the panel.
			</p>
			<h2 className='text-2xl'>Next Steps</h2>
			<Link href='/docs/configuration'>Configuration</Link>
		</>
	)
}

export default Quickstart
