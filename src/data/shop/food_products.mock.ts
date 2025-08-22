import Product from '@/entities/product.entity'

// Images
import productImage1 from '@/assets/shop/Alimentation/ChipsCrevettes.webp'
import productImage2 from '@/assets/shop/Alimentation/Stick-KOM-cafe.jpeg'
import productImage3 from '@/assets/shop/Alimentation/HuileDolive.webp'
import productImage4 from '@/assets/shop/Alimentation/miel-fleurs-sauvages.jpg'
import productImage5 from '@/assets/shop/Alimentation/TheVertJasmin.avif'
import productImage6 from '@/assets/shop/Alimentation/spaghetti-500g.jpg'
import productImage7 from '@/assets/shop/Alimentation/mangue-passion-320g-recettes-au-chaudron.jpg'
import productImage8 from '@/assets/shop/Alimentation/cameroun-chocolat-noir-66-80g.jpg'
import productImage9 from '@/assets/shop/Alimentation/BiscuitsOreo.webp'

const foodProductsMock: Product[] = [
	{
		id: 'Food_Product-1',
		name: 'Vitasia Chips de crevetes Classic',
		description:
			'De délicieuses chips de crevettes (Krabbenchips) au style classique chinois. Un en-cas croustillant et léger, idéal pour accompagner vos repas asiatiques.',
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 1500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['100 g'],
	},
	{
		id: 'Food_Product-2',
		name: 'Café en Grains Pure Origine',
		description:
			'Un café aux arômes riches et intenses, cultivé dans le respect des traditions. Idéal pour un expresso ou un café filtre',
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 4500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['500 g'],
	},
	{
		id: 'Food_Product-3',
		name: "Huile d'Olive Vierge Extra",
		description:
			"Une huile d'olive de qualité supérieure, pressée à froid, aux notes fruitées et équilibrées, parfaite pour assaisonner vos salades.",
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 6000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['750 ml'],
	},
	{
		id: 'Food_Product-4',
		name: 'Miel de Fleurs Sauvages',
		description:
			'Un miel artisanal aux saveurs douces et délicates, récolté dans un environnement préservé.',
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 2800,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['250 g'],
	},
	{
		id: 'Food_Product-5',
		name: 'Thé Vert Jasmins',
		description:
			'Un thé vert délicatement parfumé aux fleurs de jasmin, offrant une boisson apaisante et rafraîchissante.',
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 2200,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['50 sachets'],
	},
	{
		id: 'Food_Product-6',
		name: 'Pâtes Artisanales Spaghetti',
		description:
			'Des pâtes de blé dur, élaborées selon une méthode traditionnelle pour une texture ferme et savoureuse.',
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 1800,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['500 g'],
	},
	{
		id: 'Food_Product-7',
		name: 'Confiture de Mangue Passion',
		description:
			'Une confiture onctueuse préparée avec des fruits frais, sans conservateurs ni colorants.',
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 2500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['350 g'],
	},
	{
		id: 'Food_Product-8',
		name: 'Chocolat Noir 70% Cacao',
		description:
			'Une tablette de chocolat intense et élégante, conçue à partir de fèves de cacao sélectionnées.',
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 2000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['100 g'],
	},
	{
		id: 'Food_Product-9',
		name: 'Biscuits au Beurre',
		description:
			'De petits biscuits sablés fondants, parfaits pour accompagner un thé ou un café.',
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 1700,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['food'],
		tags: ['inStock'],
		specs: ['200 g'],
	},
]

export default foodProductsMock
