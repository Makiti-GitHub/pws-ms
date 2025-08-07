import MenuContext from '@/contexts/MenuContext'
import React from 'react'

const navlinks: {
	label: string
	href: string
}[] = [
	{
		label: 'home',
		href: '/',
	},
	{
		label: 'services',
		href: '/#talent',
	},
	{
		label: 'shop',
		href: '/shop',
	},
	{
		label: 'about',
		href: '/about',
	},
	{
		label: 'contacts',
		href: '/contact-us',
	},
]

export default function MenuProvider({ children }: { children: React.ReactNode }) {
	const [isOpened, setIsOpened] = React.useState(false)

	return (
		<MenuContext.Provider value={{ isOpened, setIsOpened, navlinks }}>
			{children}
		</MenuContext.Provider>
	)
}
