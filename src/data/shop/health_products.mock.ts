import Product from '@/entities/product.entity'

import productImage1 from '@/assets/shop/Sante/vitamin-c-zinc-gummies-de-01.jpg'
import productImage2 from '@/assets/shop/Sante/Proteine1kg.webp'
import productImage3 from '@/assets/shop/Sante/ThermometreDigitalSansContact.jpg'
import productImage4 from '@/assets/shop/Sante/gel-antibacterien-pour-les-mains.jpg'
import productImage5 from '@/assets/shop/Sante/KitPremierSecours.avif'
import productImage6 from '@/assets/shop/Sante/naturactive-voxyltabs-mal-de-gorge-voix-enrouee-24-pastilles-a-sucer.v2006.jpg'
import productImage7 from '@/assets/shop/Sante/creme-soliaire-visage-spf50+.jpg'
import productImage8 from '@/assets/shop/Sante/diffiseur-d_huile-essentielles.jpg'
import productImage9 from '@/assets/shop/Sante/brosse-a-dents-electrique.webp'

const healthProductsMock: Product[] = [
	{
		id: 'Health_Product-1',
		name: 'Vitamines C et Zinc',
		description:
			'Un complément alimentaire formulé pour renforcer le système immunitaire et réduire la fatigue.',
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 12000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['60 comprimés'],
	},
	{
		id: 'Health_Product-2',
		name: 'Protéine de Lactosérum Vanille',
		description:
			"Une poudre de protéines de haute qualité, idéale pour la récupération musculaire après l'effort.",
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 25000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['900 g'],
	},
	{
		id: 'Health_Product-3',
		name: 'Thermomètre Digital sans Contact',
		description:
			'Un thermomètre infrarouge pour une mesure de la température corporelle rapide et hygiénique.',
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 18000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'Health_Product-4',
		name: 'Gel Antiseptique Main',
		description:
			'Un gel hydroalcoolique pour désinfecter les mains sans eau ni savon. Format pratique.',
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 2000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['50 ml'],
	},
	{
		id: 'Health_Product-5',
		name: 'Kit de Premiers Secours Essentiel',
		description:
			'Une trousse compacte et complète contenant le nécessaire pour les petites blessures et urgences.',
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 15000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['1 kit'],
	},
	{
		id: 'Health_Product-6',
		name: 'Pastilles Gorge et Voix',
		description:
			'Des pastilles adoucissantes au miel et au citron, pour soulager les irritations de la gorge.',
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 3500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['20 pastilles'],
	},
	{
		id: 'Health_Product-7',
		name: 'Crème Solaire Visage SPF 50+',
		description:
			'Une crème solaire haute protection, non grasse, qui protège la peau des rayons UV.',
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 9500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['50 ml'],
	},
	{
		id: 'Health_Product-8',
		name: "Diffuseur d'Huiles Essentielles",
		description:
			"Un appareil élégant qui diffuse les huiles essentielles pour purifier l'air et créer une ambiance relaxante.",
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 16000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'Health_Product-9',
		name: 'Brosse à Dents Électrique',
		description:
			'Une brosse à dents électrique à oscillation, pour un nettoyage en profondeur et un meilleur soin des gencives.',
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 20000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['health'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
]

export default healthProductsMock
