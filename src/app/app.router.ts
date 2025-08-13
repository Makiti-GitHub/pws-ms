import { RouterComponent, defineRouter } from 'rasengan'
import Home from '@/app/home.page'
import AppLayout from '@/app/app.layout'
import Shop from './shop/shop.page'
import About from './about/about.page'
import ShoppingCart from './shop/shop_cart.page'
import ContactUs from './contact_us/contact_us.page'
import ServicesRouter from './services/services.router'
import Services from './services/services.page'
import TermsAndConditions from './terms_and_conditions/TermsAndConditions'
import PrivacyPolicy from './privacy_policy/PrivacyPolicy'
import LegalNotice from './legal_notice/LegalNotice'

class AppRouter extends RouterComponent {}

export default defineRouter({
	imports: [ServicesRouter],
	layout: AppLayout,
	pages: [
		Home,
		Shop,
		About,
		ShoppingCart,
		ContactUs,
		Services,
		TermsAndConditions,
		PrivacyPolicy,
		LegalNotice,
	],
})(AppRouter)
