import React from 'react'
import { Outlet, LayoutComponent } from 'rasengan'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import MobileNavigation from '@/components/organisms/navigation/MobileNavigation'
import NavBar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'

const AppLayout: LayoutComponent = () => {
	const { isOpened } = useMenuContext()
	return (
		<React.Fragment>
			<main className={`relative ${isOpened ? 'max-h-screen overflow-hidden' : ''}`}>
				{/* === Navigation  === */}

				<MobileNavigation />
				<NavBar />

				<Outlet />

				<Footer />
			</main>
		</React.Fragment>
	)
}

AppLayout.path = '/'

export default AppLayout
