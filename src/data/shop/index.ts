import Product from '@/entities/product.entity'
import licenseProductsMock from './license_products.mock'
import homeProductsMock from './home_products.mock'
import healthProductsMock from './health_products.mock'
import foodProductsMock from './food_products.mock'
import fashionProductsMock from './fashion_products.mock'
import beautyProductsMock from './beauty_products.mock'
import babyAndChildrenProductsMock from './baby&children_products.mock'
import electronicProductsMock from './electronics.mock'

const productsMock: Product[] = [
	...electronicProductsMock,
	...licenseProductsMock,
	...homeProductsMock,
	...healthProductsMock,
	...foodProductsMock,
	...fashionProductsMock,
	...beautyProductsMock,
	...babyAndChildrenProductsMock,
]

export default productsMock
