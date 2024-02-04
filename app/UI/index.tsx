import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<div className='min-h-[44vw] py-44 container mx-auto'>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
