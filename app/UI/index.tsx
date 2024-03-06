import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Navbar />
			<div className='py-20 container mx-auto px-8'>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
