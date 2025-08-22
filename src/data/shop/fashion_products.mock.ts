import Product from '@/entities/product.entity'

import productImage1 from '@/assets/shop/Mode/t-shirt-en-cotton.avif'
import productImage2 from '@/assets/shop/Mode/jean-droit-classique.jpg'
import productImage3 from '@/assets/shop/Mode/echarpe-en-laine-fine.webp'
import productImage4 from '@/assets/shop/Mode/sneaker-en-cuir.jpg'
import productImage5 from '@/assets/shop/Mode/sac-a-main-en-cuir-vegan.jpeg'
import productImage6 from '@/assets/shop/Mode/chemise-en-lin.jpg'
import productImage7 from '@/assets/shop/Mode/monte-bracelet-en-cuir.avif'
import productImage8 from '@/assets/shop/Mode/lunettes-de-soleil-aviateur.jpg'
import productImage9 from '@/assets/shop/Mode/jupe-midi-plissee.avif'

const fashionProductsMock: Product[] = [
	{
		id: 'Fashion_Product-1',
		name: 'T-shirt Basique en Coton',
		description: 'Un t-shirt à col rond, doux et confortable, parfait pour un usage quotidien.',
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 8500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Tailles S-XL'],
	},
	{
		id: 'Fashion_Product-2',
		name: 'Jean Droit Coupe Classique',
		description:
			'Un jean en denim de haute qualité, avec une coupe droite intemporelle pour un style casual ou élégant.',
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 24000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Tailles 38-44'],
	},
	{
		id: 'Fashion_Product-3',
		name: 'Écharpe en Laine Fine',
		description:
			'Une écharpe légère et chaude, idéale pour affronter les soirées fraîches avec élégance.',
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 11000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['180 x 60 cm'],
	},
	{
		id: 'Fashion_Product-4',
		name: 'Sneakers Urbaines en Cuir',
		description:
			'Des baskets montantes au design moderne, combinant confort et style pour la vie en ville.',
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 35000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Pointures 36-45'],
	},
	{
		id: 'Fashion_Product-5',
		name: 'Sac à Main en Cuir Vegan',
		description:
			'Un sac chic et pratique, avec plusieurs compartiments pour organiser vos affaires.',
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 28000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Taille unique'],
	},
	{
		id: 'Fashion_Product-6',
		name: 'Chemise en Lin Blanche',
		description: "Une chemise légère et respirante, parfaite pour les journées d'été.",
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 16000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Tailles S-L'],
	},
	{
		id: 'Fashion_Product-7',
		name: 'Montre Classique Bracelet Cuir',
		description:
			'Une montre élégante avec un cadran minimaliste et un bracelet en cuir véritable.',
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 45000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['1 unité'],
	},
	{
		id: 'Fashion_Product-8',
		name: 'Lunettes de Soleil Aviateur',
		description:
			'Des lunettes de soleil au style emblématique, avec une protection UV optimale.',
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 19000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Taille unique'],
	},
	{
		id: 'Fashion_Product-9',
		name: 'Jupe Midi Plissée',
		description:
			'Une jupe fluide et féminine, parfaite pour les occasions spéciales ou une tenue de bureau.',
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 14000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['fashion'],
		tags: ['inStock'],
		specs: ['Tailles S-M'],
	},
]

export default fashionProductsMock
