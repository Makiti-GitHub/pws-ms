import React from 'react'
import { Outlet, LayoutComponent } from 'rasengan'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import MobileNavigation from '@/components/organisms/navigation/MobileNavigation'
import NavBar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import { ScrollRestoration } from '@/components/molecules/ScrollRestoration'

const AppLayout: LayoutComponent = () => {
	const { isOpened } = useMenuContext()
	return (
		<React.Fragment>
			<main
				className={`relative ${
					isOpened ? 'max-h-screen overflow-hidden' : ''
				} font-seravek_regular`}
			>
				{/* === Navigation  === */}
				<MobileNavigation />
				<NavBar />
				{/* === Navigation  === */}
				<Outlet />
				<ScrollRestoration />
				<Footer />
			</main>
		</React.Fragment>
	)
}

AppLayout.path = '/'

export default AppLayout
