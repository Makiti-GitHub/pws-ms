import { RouterComponent, defineRouter } from 'rasengan'
import Home from '@/app/home.page'
import AppLayout from '@/app/app.layout'
import Shop from './shop/shop.page'
import About from './about/about.page'
import ShoppingCart from './shop/shop_cart.page'

class AppRouter extends RouterComponent {}

export default defineRouter({
	imports: [],
	layout: AppLayout,
	pages: [Home, Shop, About, ShoppingCart],
})(AppRouter)
