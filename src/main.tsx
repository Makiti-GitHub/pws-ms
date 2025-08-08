import '@rasenganjs/image/css'
import '@/styles/index.css'
import i18n from './i18n/i18n'
import { type AppProps } from 'rasengan'
import AppRouter from '@/app/app.router'
import { I18nextProvider } from 'react-i18next'
import { LanguageProvider } from './providers/LanguageProvider'
import MenuProvider from './providers/MenuProvider'
import { Toaster } from './components/ui/sonner'

export default function App({ Component, children }: AppProps) {
	return (
		<I18nextProvider i18n={i18n}>
			<LanguageProvider>
				<MenuProvider>
					<Component router={AppRouter}>{children}</Component>
					<Toaster />
				</MenuProvider>
			</LanguageProvider>
		</I18nextProvider>
	)
}
