import Product from '@/entities/product.entity'

import productImage1 from '@/assets/shop/Bébé et Enfants/peluche-musicale-douce.jpg'
import productImage2 from '@/assets/shop/Bébé et Enfants/livre-en-tissus-d_eveil.webp'
import productImage3 from '@/assets/shop/Bébé et Enfants/tapis-d_eveil-pliable.jpg'
import productImage4 from '@/assets/shop/Bébé et Enfants/Biberon-anti-colique.webp'
import productImage5 from '@/assets/shop/Bébé et Enfants/couches-ecologiques.jpg'
import productImage6 from '@/assets/shop/Bébé et Enfants/poussette-compacte-legere.jpg'
import productImage7 from '@/assets/shop/Bébé et Enfants/veilleuse-etoiles-projetees.jpg'
import productImage8 from '@/assets/shop/Bébé et Enfants/lot-de-bavoirs-impermeables.jpg'
import productImage9 from '@/assets/shop/Bébé et Enfants/kit-de-bain-ludique.webp'

const babyAndChildrenProductsMock: Product[] = [
	{
		id: 'BabyAndChildren_Product-1',
		name: 'Peluche Musicale Douce',
		description:
			"Une peluche en tissu ultra-doux qui émet une mélodie apaisante pour aider bébé à s'endormir paisiblement.",
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 11000,
		quantity: 1,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'BabyAndChildren_Product-2',
		name: "Livre en Tissu d'Éveil",
		description:
			"Un livre coloré et interactif, avec différentes textures et sons, pour stimuler l'éveil sensoriel des tout-petits",
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 7000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'BabyAndChildren_Product-3',
		name: "Tapis d'Éveil Pliable",
		description:
			'Un tapis moelleux et facile à transporter, parfait pour les moments de jeu au sol de bébé.',
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 25000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['1,2 x 1,2 m'],
	},
	{
		id: 'BabyAndChildren_Product-4',
		name: 'Biberon Anti-colique',
		description:
			'Un biberon conçu pour réduire les risques de coliques et de reflux chez le nourrisson.',
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 4500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['240 ml'],
	},
	{
		id: 'BabyAndChildren_Product-5',
		name: 'Couches Écologiques Taille 4',
		description:
			"Des couches hypoallergéniques et respectueuses de l'environnement, offrant une protection maximale.",
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 15000,
		quantity: 50,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['50 couches'],
	},
	{
		id: 'BabyAndChildren_Product-6',
		name: 'Poussette Compacte et Légère',
		description:
			'Une poussette pliable, facile à manœuvrer et idéale pour les déplacements en ville.',
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 65000,
		quantity: 1,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'BabyAndChildren_Product-7',
		name: 'Veilleuse Étoiles Projetées',
		description:
			'Une veilleuse qui projette un ciel étoilé au plafond pour créer une ambiance magique et sécurisante dans la chambre.',
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 9500,
		quantity: 1,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'BabyAndChildren_Product-8',
		name: 'Lot de Bavoirs Imperméables',
		description:
			'Des bavoirs colorés avec une poche de récupération, pour garder les vêtements de bébé propres pendant les repas.',
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 3500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['3 bavoirs'],
	},
	{
		id: 'BabyAndChildren_Product-9',
		name: 'Kit de Bains Ludique',
		description:
			"Un ensemble de jouets pour le bain qui flottent et changent de couleur, pour rendre l'heure du bain amusante.",
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 8000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['baby&children'],
		tags: ['inStock'],
		specs: ['5 pièces'],
	},
]

export default babyAndChildrenProductsMock
