export type ProductTagType = 'new' | 'topRated' | 'inStock'

export type ProductCategoryType =
	| 'electronics'
	| 'license'
	| 'fashion'
	| 'beauty'
	| 'home'
	| 'baby&children'
	| 'health'
	| 'food'
	| 'all'

interface IProduct {
	images: string[]
	name: string
	description?: string
	rating: number
	reviews: number
	id: string
	tags?: ProductTagType[]
	price: number
	quantity: number
	creationDate: string
	categories?: ProductCategoryType[]
	specs?: string[]
}

export default class Product implements IProduct {
	readonly images: string[]
	readonly name: string
	readonly description?: string
	readonly rating: number
	readonly reviews: number
	readonly id: string
	readonly tags?: ProductTagType[]
	readonly price: number
	readonly quantity: number
	readonly creationDate: string
	readonly categories?: ProductCategoryType[]
	readonly specs?: string[]

	constructor(product: IProduct) {
		this.images = product.images
		this.name = product.name
		this.description = product.description
		this.rating = product.rating
		this.reviews = product.reviews
		this.id = product.id
		this.tags = product.tags
		this.price = product.price
		this.quantity = product.quantity
		this.creationDate = product.creationDate
		this.categories = product.categories
		this.specs = product.specs
	}
}
