import Product from '@/entities/product.entity'

import productImage1 from '@/assets/shop/Beauté/creme-hydratante-acide-hyaluronique.jpeg'
import productImage2 from '@/assets/shop/Beauté/shampooing-solide-fortifiant.webp'
import productImage3 from '@/assets/shop/Beauté/serum-vitamin-c.png'
import productImage4 from '@/assets/shop/Beauté/parfum-floral-eclat-d_iris.jpg'
import productImage5 from '@/assets/shop/Beauté/masque-capillaire-reparateur.png'
import productImage6 from '@/assets/shop/Beauté/rouges-a-levres-mat.jpg'
import productImage7 from '@/assets/shop/Beauté/nettoyant-visage-purifiant.avif'
import productImage8 from '@/assets/shop/Beauté/lot-de-pinceaux-maquillage.avif'
import productImage9 from '@/assets/shop/Beauté/masque-argile-detox.webp'

const beautyProductsMock: Product[] = [
	{
		id: 'Beauty_Product-1',
		name: 'Crème Hydratante Visage Acide Hyaluronique',
		description:
			"Une crème légère qui hydrate intensément la peau et réduit l'apparence des ridules.",
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 18000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['50 ml'],
	},
	{
		id: 'Beauty_Product-2',
		name: 'Shampoing Solide Fortifiant',
		description:
			'Un shampoing écologique et économique, formulé pour renforcer les cheveux fragiles.',
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 7500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['80 g'],
	},
	{
		id: 'Beauty_Product-3',
		name: 'Sérum Visage Vitamine C',
		description:
			'Un sérum antioxydant qui illumine le teint et protège la peau des agressions extérieures.',
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 22000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['30 ml'],
	},
	{
		id: 'Beauty_Product-4',
		name: 'Parfum Floral "Éclat d\'Iris"',
		description:
			'Une eau de parfum aux notes florales et boisées, pour une fragrance fraîche et élégante.',
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 35000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['75 ml'],
	},
	{
		id: 'Beauty_Product-5',
		name: 'Masque Capillaire Réparateur',
		description:
			'Un masque riche en nutriments qui nourrit et répare les cheveux secs et abîmés.',
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 11000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['200 ml'],
	},
	{
		id: 'Beauty_Product-6',
		name: 'Rouge à Lèvres Mat Longue Tenue',
		description:
			'Un rouge à lèvres à la texture crémeuse et au fini mat, pour une couleur intense qui dure toute la journée.',
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 9000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['3,5 g'],
	},
	{
		id: 'Beauty_Product-7',
		name: 'Nettoyant Visage Purifiant',
		description:
			"Un gel nettoyant qui élimine les impuretés et l'excès de sébum, laissant la peau fraîche et propre.",
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 8500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['150 ml'],
	},
	{
		id: 'Beauty_Product-8',
		name: 'Lot de Pinceaux Maquillage',
		description:
			'Un set de pinceaux essentiels pour appliquer fond de teint, poudre et fards avec précision.',
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 14000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['5 pièces'],
	},
	{
		id: 'Beauty_Product-9',
		name: 'Masque Argile Détoxifiant',
		description:
			"Un masque à l'argile verte qui purifie les pores et matifie les peaux mixtes à grasses.",
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 10000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['beauty'],
		tags: ['inStock'],
		specs: ['100 g'],
	},
]

export default beautyProductsMock
