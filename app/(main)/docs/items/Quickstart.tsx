/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Snippet } from '@nextui-org/snippet'

const Quickstart = () => {
	return (
		<>
			<h2 className='text-3xl'>Downloading</h2>
			<p className='text-lg mb-10'>
				First, if you didn't download the SimpleAdmin plugin yet, you can download it{' '}
				<Link href='https://github.com/daffyyyy/CS2-SimpleAdmin/releases'>here</Link> and add it to your
				servers.
				<br />
				in order to download the panel, you can either;
				<br />- download the latest version of the panel from the{' '}
				<Link href='https://github.com/ShiNxz/CSS-Panel/releases'>releases page</Link>
				, and then extract the files to your web server.
				<br />
				- clone the repository using git: <br />
				<Snippet>git clone https://github.com/ShiNxz/CSS-Panel.git</Snippet>
				<br />
			</p>
			<h2 className='text-3xl'>- Option 1: Running the panel on Easypanel (Recommended)</h2>
			<p className='text-lg mb-10'>
				This is the recommended way to run the panel, as it's the easiest and fastest way to get the panel up
				and running,
				<br />
				and it's also the easiest way to keep the panel up to date with the latest changes, and also running the
				panel on Docker is the most secure way to run the panel. <br /> <br />* Make sure you have{' '}
				<Link href='https://easypanel.io'>Easypanel</Link> installed on your server.
				<br />
				<br />
				1. Create a new Project on Easypanel.
				<br />
				2. Create a new App (App service), name it whatever you want.
				<br />
				3. In the General tab, set the following settings:
				<br />
				- Owner: ShiNxz
				<br />
				- Repository: CSS-Panel
				<br />
				- Branch: main
				<br />
				- Build path: /<br />
				(note that you can fork the repository and use your own repository instead, but keep in mind that you
				will have to keep the panel up to date manually.)
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
			</p>
			<h2 className='text-3xl'>- Option 2: Running the panel on Vercel</h2>
			<p className='text-lg mb-10'>
				This is also a recommended way to run the panel, as it's the easiest and fastest way to get the panel up
				as Front and Back end.
				<br />
				Follow the instructions of Option 1, but instead of using Easypanel, use Vercel.
				<br />
				Vercel Docs: <Link href='https://vercel.com/docs'>https://vercel.com/docs</Link>
			</p>
			<h2 className='text-3xl'>- Option 3: Installing the panel (Manual)</h2>
			<p className='text-lg mb-10'>
				* Make sure you have <Link href='https://nodejs.org/en/'>node.js</Link> installed on your server / pc.
				<br />* Make sure you have <Link href='https://pnpm.io/'>pnpm</Link> installed on your server / pc.
				<br />
				<br />
				1. After downloading the panel, navigate to the panel directory and install the dependencies using the
				following command:
				<br />
				<Snippet>pnpm install</Snippet>
				<br />
				<br />
				2. Edit the <code>.env.example</code> file and add your database credentials and{' '}
				<Link href='https://steamcommunity.com/dev/apikey'>Steam API key</Link>, then rename it to{' '}
				<code>.env</code>
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
				The panel should now be running on <Link href='http://localhost:3000'>http://localhost:3000</Link>
				<br />- note that localhost is your pc ip, if you want to run the panel on your server, you should use
				your server ip instead of localhost.
			</p>
			<h2 className='text-3xl'>Notes</h2>
			<p className='text-lg mb-10'>
				* The panel should log into your db and create the necessary tables on the first run, if it didn't, make
				sure your db credentials are correct.
				<br />* The panel should pull all the admin users from your SimpleAdmin db, you can login into the panel
				using steam if you're an admin,
				<br />
				and you can also add more admins from the panel.
			</p>
			<h2 className='text-3xl'>Next Steps</h2>
			<Link href='/docs/configuration'>Configuration</Link>
		</>
	)
}

export default Quickstart
