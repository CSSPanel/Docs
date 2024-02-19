/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

const Configuration = () => {
	return (
		<>
			<h2 className='text-2xl'>Configurating the panel</h2>
			<p className='text-base mb-10'>
				1. Login to the panel and head over to the Admin Panel {'->'} Panel Settings, and edit the settings
				accordingly
				<br />
				2. Head over to '/admin/servers' and double check if the plugin added your servers correctly.
				<br />
				3. Head over to '/admin/admins' and add or edit your admins.
				<br />
				4. Head over to '/admin/settings' and change the SEO settings to your needs.
				<br />
			</p>
			<h2 className='text-2xl'>Customize the panel</h2>
			<p className='text-base mb-10'>
				1. Head over to the Admin Panel {'->'} Panel Settings {'->'} Design and change the design to your needs.
				<br />
				2. Head over Header Design and change the header to your needs, note that you can change the HTML and
				the CSS with a dedicated editor and preview the changes live.
				<br />
			</p>
			<h2 className='text-2xl'>Next Steps</h2>
			<Link href='/docs/updating'>Updating the panel</Link>
		</>
	)
}

export default Configuration
