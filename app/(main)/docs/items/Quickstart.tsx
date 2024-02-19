/* eslint-disable react/no-unescaped-entities */
import { Code } from '@nextui-org/code'
import { Snippet } from '@nextui-org/snippet'
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
							<li>- Linux VPS</li>
							<li>- Pterodactyl Panel and Wings installed</li>
						</ul>
					</li>
				</ul>
			</p>
			<h2 className='text-3xl font-medium'>Downloading the plugin</h2>
			<p className='text-base mb-10'>
				First, you need to install and configuring the plugin on your cs2 servers.
				<br />
				You can download the plugin{' '}
				<Link
					href='https://github.com/ShiNxz/CSS-Plugin/releases'
					target='_blank'
				>
					from the following link
				</Link>
				<br />
				Place the plugin in the <Code>game/csgo/addons/counterstrikesharp/plugins</Code> folder <br />
				Navigate to your <Code>addons/counterstrikesharp/configs/plugins/CSS-Panel</Code> directory and edit the{' '}
				<Code>CSS-Panel.json</Code> file{' '}
				<Link href='https://github.com/ShiNxz/CSS-Panel/blob/main/config.json'>
					with the following settings
				</Link>
			</p>
			<h2 className='text-3xl font-medium'>Downloading & Installing the panel</h2>
			<p className='text-base mb-10'>
				Choose the best way to run the panel on your server, you can choose between running the panel on Docker,
				linux machine with node.js, or Vercel (for free).
				<br />
				<b>Why not web hosting?</b> <br />
				Since the panel is made with next.js and uses server-side rendering and also a fully functional back-end
				along with the panel, it's not possible to run the panel on web hosting, as web hosting only supports
				static websites (.html, .css, .js, etc. files)
			</p>
			{/* <p className='text-base mb-10'>
				in order to download the panel, you can either;
				<br />- download the latest version of the panel from the{' '}
				<Link href='https://github.com/ShiNxz/CSS-Panel/releases'>releases page</Link>
				, and then extract the files to your web server.
				<br />
				- clone the repository using git: <br />
				<Snippet>git clone https://github.com/ShiNxz/CSS-Panel.git</Snippet>
				<br />
			</p> */}
			<h2 className='text-2xl'>- Option 1: Running the panel on Easypanel (Recommended)</h2>
			<p className='text-base mb-10'>
				This is the most recommended way to run the panel, as it's the easiest and fastest way to get the panel
				up and running without much effort, and also connect it to a domain or subdomain with ssl easily.
				<br />
				<br />
				<b>Requirements:</b>
				<br />- Linux VPS with{' '}
				<Link
					href='https://easypanel.io'
					target='_blank'
				>
					Easypanel
				</Link>{' '}
				installed.
				<br />
				<br />
				1. Create a new Project on Easypanel.
				<br />
				2. Create a new App (App service), name it whatever you want.
				<br />
				3. In the "Source" tab, set the following settings:
				<br />
				<b>- Owner:</b> ShiNxz
				<br />
				<b>- Repository:</b> CSS-Panel
				<br />
				<b>- Branch:</b> main
				<br />
				<b>- Build path:</b> /<br />
				(note that you should use this configuration in order to keep your panel up to date and follow our
				updates)
				<br />
				<br />
				4. Hit Save. <br />
				5. In the "Build" section, select "Nixpacks" and hit "Save". <br />
				6. Head over to the "Environment" tab and add the{' '}
				<Link href='https://github.com/ShiNxz/CSS-Panel/blob/main/.env.example'>
					following environment variables
				</Link>
				, and edit them accordingly. <br />
				7. Head over to "Domains" and add your domain or subdomain. <br />
				8. Hit "Deploy" and wait for the deployment to finish. <br />
				<br />
				<b>Important Notes:</b>
				<br />
				- On every new release, please click on "Deploy" to update the panel to the latest version.
				<br />
				- You can also add a custom domain or subdomain with SSL easily from the "Domains" tab.
				<br />
			</p>
			<h2 className='text-2xl'>- Option 2: Running the panel on Vercel (Free)</h2>
			<p className='text-base mb-10'>
				This is also a recommended way to run the panel, as it's very easy and also free, and also connect it to
				a domain or subdomain with ssl easily.
				<br />
				<br />
				<b>Requirements:</b>
				<br />- Account on{' '}
				<Link
					href='https://vercel.com'
					target='_blank'
				>
					Vercel
				</Link>
				<br />
				<br />
				1. Head over to the <Link href='https://vercel.com/import'>import page</Link> on Vercel.
				<br />
				2. Click on the "Import Third-Party Git Repository →" option below the repository list.
				<br />
				3. Enter the following repository URL: <Snippet size='sm'>https://github.com/ShiNxz/CSS-Panel</Snippet>
				<br />
				4. Hit "Continue" and choose the name for your project and repository.
				<br />
				5. Wait for the deployment to finish.
				<br />
				6. The deployment will fail and thats ok, head over to the{' '}
				<Link
					href='https://vercel.com/dashboard'
					target='_blank'
				>
					dashboard
				</Link>{' '}
				and click on the project.
				<br />
				7. Click on "Add Domain" and add your domain or subdomain.
				<br />
				8. Head over to the "Environment Variables" tab and add the{' '}
				<Link href='https://github.com/ShiNxz/CSS-Panel/blob/main/.env.example'>
					following environment variables
				</Link>{' '}
				one by one, and edit them accordingly.
				<br />
				8. Head over to the "Project" tab, click on "Build Logs", click on the 3 dots (options) and click on
				"Redeploy".
				<br />
				<br />
				<b>Important Notes:</b>
				<br />
				- Vercel will fork the repository to your account as a new repository, it means that you will have to
				keep the panel up to date manually by pulling the latest changes from the original repository, and
				Vercel will deploy it automatically.
				<br />
			</p>
			<h2 className='text-2xl'>- Option 3: Installing the panel (Manual)</h2>
			<p className='text-base mb-10'>
				* Make sure you have{' '}
				<Link
					href='https://nodejs.org/en/'
					target='_blank'
				>
					node.js
				</Link>{' '}
				installed on your server / pc.
				<br />* Make sure you have{' '}
				<Link
					href='https://pnpm.io/'
					target='_blank'
				>
					pnpm
				</Link>{' '}
				installed on your server / pc.
				<br />
				<br />
				1. After downloading the panel, navigate to the panel directory and install the dependencies using the
				following command:
				<br />
				<Snippet>pnpm install</Snippet>
				<br />
				<br />
				2. Edit the <code>.env.example</code> file and add your database credentials and{' '}
				<Link
					href='https://steamcommunity.com/dev/apikey'
					target='_blank'
				>
					Steam API key
				</Link>
				, then rename it to <code>.env</code>
				<br />
				3. Build the panel using the following command:
				<br />
				<Snippet>pnpm build</Snippet>
				<br />
				<br />
				4. Start the panel using the following command:
				<br />
				<Snippet>pnpm start</Snippet>
				<br />
				<br />
				The panel should now be running on{' '}
				<Link
					href='http://localhost:3000'
					target='_blank'
				>
					http://localhost:3000
				</Link>
				<br />- note that localhost is your pc/linux ip, if you want to run the panel on your server, you should
				use your server ip instead of localhost.
			</p>
			<h2 className='text-2xl'>Notes</h2>
			<p className='text-base mb-10'>
				* The panel should log into your db and create the necessary tables on the first run, if it didn't, make
				sure your db credentials are correct.
				<br />* The panel should pull all the admin users from your SimpleAdmin db, you can login into the panel
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
