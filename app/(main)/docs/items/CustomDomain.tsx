'use client'

/* eslint-disable react/no-unescaped-entities */
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal'
import { Snippet } from '@nextui-org/snippet'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Code } from '@nextui-org/code'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'

const CustomDomain = () => {
	const [open, setOpen] = useState(false)
	const [url, setUrl] = useState('')
	const [ip, setIp] = useState('')

	const handleCopy = () => {
		navigator.clipboard.writeText(generateNginxConfig)
		toast.success('Copied to clipboard!')
	}

	const generateNginxConfig = `
	server {
		server_name ${url} www.${url};
		location / {
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_pass http://${ip};
		}
	}
	`

	return (
		<>
			<h2 className='text-2xl'>Custom domain - Reverse Proxy</h2>
			<p className='text-base mb-10'>
				We will install some necessary packages to our linux machine in order to host a reverse proxy domain and
				generate SSL certificates.
				<br />
				Note that these steps are for Ubuntu 20.04, if you are using another distribution, you will need to
				install the packages in a different way.
				<br />
				<br />
				* I will provide a very straightforward guide to install Nginx and Certbot, and how to configure them,
				if you are getting errors or need more information, please refer to their official documentation.
				<br />
				<br />
				<b>
					These packages comes with Pterodactyl as part of its installation, if you are using Pterodactyl you
					can skip until step X
				</b>
				<br />
				<br />
				<br />
				1. Install Nginx
				<br />
				<Snippet>sudo apt update; sudo apt install nginx</Snippet>
				<br />
				<br />
				<Snippet>sudo ufw allow 'Nginx Full'</Snippet>
				<br />
				<br />
				2. Head over to `/etc/nginx/sites-enabled/` and create a new file called `css-panel.conf`
				<br />
				<br />
				3. Generate a configuration file using our template generator:
				<br />
				<Button
					size='sm'
					onClick={() => setOpen(true)}
					color='primary'
				>
					Generate Nginx configuration
				</Button>
				<br />
				<br />
				4. Paste the copied configuration into the file and save it.
				<br />
				5. restart the Nginx service
				<br />
				<Snippet>sudo systemctl restart nginx</Snippet>
				<br />
				<br />
				6. Install Certbot
				<br />
				<Snippet>sudo apt update; sudo apt install certbot python3-certbot-nginx</Snippet>
				<br />
				<br />
				7. Generate SSL certificates{url ? '' : ', change `example.com` and `www.example.com` to your domain'}
				<br />
				<Snippet>
					{`sudo certbot --nginx -d ${url || 'example.com'} -d ${url ? `www.${url}` : 'www.example.com'}`}
				</Snippet>
				<br />
				<br />
				8. Follow the instructions to generate the SSL certificates
				<br />
				9. Set auto renewal for the certificates
				<br />
				<Snippet>sudo certbot renew --dry-run</Snippet>
				<br />
				<br />
				9. Done! You should now be able to access your panel using your domain.
				<br />
				<br />
				<Link
					href={process.env.NEXT_PUBLIC_DISCORD || 'https://discord.gg/r96PSHfNcW'}
					target='_blank'
				>
					Found an error/mistake on this page? let me know!
				</Link>
			</p>

			<Modal
				isOpen={open}
				onOpenChange={setOpen}
				placement='top-center'
				size='4xl'
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Nginx Configuration Generator</ModalHeader>
							<ModalBody>
								<Input
									label='Machine IP & App Port'
									placeholder='Enter your machine IP and app port'
									variant='bordered'
									onValueChange={setIp}
									value={ip}
									autoFocus
								/>
								<Input
									label='Domain'
									placeholder='Enter your desired domain'
									variant='bordered'
									onValueChange={setUrl}
									value={url}
								/>
								<hr />
								<Code>
									<pre>{generateNginxConfig}</pre>
								</Code>
							</ModalBody>
							<ModalFooter>
								<Button
									color='primary'
									variant='flat'
									onPress={handleCopy}
								>
									Copy to clipboard
								</Button>
								<Button
									color='primary'
									onPress={onClose}
								>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default CustomDomain
