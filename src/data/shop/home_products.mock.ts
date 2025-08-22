import Product from '@/entities/product.entity'

import productImage1 from '@/assets/shop/Maison/parrure-de-lit-en-coton-bio.webp'
import productImage2 from '@/assets/shop/Maison/robot-aspirateur-intelligent.jpg'
import productImage3 from '@/assets/shop/Maison/Food-Blender-Multifunction.avif'
import productImage4 from '@/assets/shop/Maison/diffiseur-d_ambiance-batonnets.avif'
import productImage5 from '@/assets/shop/Maison/service-de-table-complet-6-personnes.jpg'
import productImage6 from '@/assets/shop/Maison/planche-a-decouper-en-bambou.jpg'
import productImage7 from '@/assets/shop/Maison/machine-a-cafe-expresso.webp'
import productImage8 from '@/assets/shop/Maison/lot-de-2-coussins-decoratifs.jpg'
import productImage9 from '@/assets/shop/Maison/casseroles-adhesives.jpg'

const homeProductsMock: Product[] = [
	{
		id: 'Home_Product-1',
		name: 'Parure de Lit en Coton Bio',
		description:
			"Un ensemble de housse de couette et de taies d'oreillers en coton biologique doux et respirant.",
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['Lit double'],
	},
	{
		id: 'Home_Product-2',
		name: 'Robot Aspirateur Intelligent',
		description:
			'Un aspirateur robot qui navigue de manière autonome, nettoyant les sols et les tapis pour vous.',
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 110000,
		quantity: 1,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'Home_Product-3',
		name: 'Blender de Cuisine Multifonction',
		description:
			'Un blender puissant pour réaliser des smoothies, des soupes et des purées en un instant.',
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 38000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['1,5 L'],
	},
	{
		id: 'Home_Product-4',
		name: "Diffuseur d'Ambiance Bâtonnets",
		description:
			"Un diffuseur élégant avec des bâtonnets en bois qui imprègnent votre intérieur d'un parfum délicat.",
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 9000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['100 ml'],
	},
	{
		id: 'Home_Product-5',
		name: 'Service de Table 6 Personnes',
		description:
			'Un ensemble de vaisselle complet et moderne, idéal pour recevoir des invités.',
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 55000,
		quantity: 18,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['18 pièces'],
	},
	{
		id: 'Home_Product-6',
		name: 'Planche à Découper en Bambou',
		description:
			'Une planche à découper durable et hygiénique, idéale pour préparer fruits, légumes et viandes.',
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 6500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['35 x 25 cm'],
	},
	{
		id: 'Home_Product-7',
		name: 'Machine à Café Expresso',
		description:
			"Une machine compacte et facile à utiliser pour préparer des expressos et des cappuccinos dignes d'un barista.",
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 75000,
		quantity: 1,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'Home_Product-8',
		name: 'Lot de 2 Coussins Décoratifs',
		description:
			'Des coussins moelleux et colorés pour apporter une touche de confort et de style à votre canapé.',
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 12000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['45 x 45 cm'],
	},
	{
		id: 'Home_Product-9',
		name: 'Ensemble de Casseroles Antiadhésives',
		description:
			'Un set de casseroles et poêles durables, avec un revêtement antiadhésif pour une cuisine saine et facile.',
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 42000,
		quantity: 3,
		creationDate: '2025-02-06',
		categories: ['home'],
		tags: ['inStock'],
		specs: ['3 pièces'],
	},
]

export default homeProductsMock
