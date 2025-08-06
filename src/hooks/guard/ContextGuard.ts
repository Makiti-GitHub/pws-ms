import { LanguageContext } from '@/contexts/LanguageContext'
import MenuContext from '@/contexts/MenuContext'
import { useContext } from 'react'

export const useIntlContext = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useiContext must be used within a AuthProvider')
	}
	return context
}

export const useMenuContext = () => {
	const menuContext = useContext(MenuContext)

	if (!menuContext) {
		throw new Error('useMenuContext must be used within a MenuProvider')
	}

	return menuContext
}
