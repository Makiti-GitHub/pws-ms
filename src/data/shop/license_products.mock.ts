import Product from '@/entities/product.entity'

import productImage1 from '@/assets/shop/ Licence/Microsoft-Windows-11-Home.webp'
import productImage2 from '@/assets/shop/ Licence/microsoft-office-365-personnel.jfif'
import productImage3 from '@/assets/shop/ Licence/anti-virus-premium-2024.png'
import productImage4 from '@/assets/shop/ Licence/adobe-creative-cloud-abonnement.png'
import productImage5 from '@/assets/shop/ Licence/vpn-illlimite.png'
import productImage6 from '@/assets/shop/ Licence/licence-logiciel-comptabilite.webp'
import productImage7 from '@/assets/shop/ Licence/jeu-video-cyberverse.jpg'
import productImage8 from '@/assets/shop/ Licence/suite-d_edition-video-professionnelle.webp'
import productImage9 from '@/assets/shop/ Licence/gestionnaire-mot-de-passe.webp'

const licenseProductsMock: Product[] = [
	{
		id: 'License_Product-1',
		name: 'Microsoft Windows 11 Home',
		description:
			"Une licence pour le système d'exploitation Windows 11. Profitez d'une interface moderne et de fonctionnalités de productivité améliorées.",
		rating: 4.5,
		reviews: 147,
		images: [productImage1],
		price: 75000,
		quantity: 1,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 licence'],
	},
	{
		id: 'License_Product-2',
		name: 'Microsoft Office 365 Personnel',
		description:
			'Un abonnement annuel à la suite Office, incluant Word, Excel, PowerPoint et 1 To de stockage cloud.',
		rating: 4.5,
		reviews: 147,
		images: [productImage2],
		price: 45000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 an'],
	},
	{
		id: 'License_Product-3',
		name: 'Antivirus Premium 2024',
		description:
			'Une protection complète contre les menaces en ligne, incluant le phishing, les malwares et les ransomwares.',
		rating: 4.5,
		reviews: 147,
		images: [productImage3],
		price: 15000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 an / 1 appareil'],
	},
	{
		id: 'License_Product-4',
		name: 'Adobe Creative Cloud Abonnement',
		description:
			"Un abonnement mensuel donnant accès à l'ensemble des logiciels Adobe, comme Photoshop, Illustrator et Premiere Pro.",
		rating: 4.5,
		reviews: 147,
		images: [productImage4],
		price: 22000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 mois'],
	},
	{
		id: 'License_Product-5',
		name: 'VPN Illimité 1 An',
		description:
			'Un service de réseau privé virtuel pour naviguer en toute sécurité et anonymat sur internet.',
		rating: 4.5,
		reviews: 147,
		images: [productImage5],
		price: 18000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 an'],
	},
	{
		id: 'License_Product-6',
		name: 'Licence Logiciel Comptabilité',
		description:
			"Un logiciel de gestion comptable simple d'utilisation pour les petites entreprises et les freelances.",
		rating: 4.5,
		reviews: 147,
		images: [productImage6],
		price: 120000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 licence'],
	},
	{
		id: 'License_Product-7',
		name: 'Jeu Vidéo "Cyberverse" - Licence Digitale',
		description:
			"La licence complète pour un jeu d'action-aventure en monde ouvert très populaire.",
		rating: 4.5,
		reviews: 147,
		images: [productImage7],
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 licence'],
	},
	{
		id: 'License_Product-8',
		name: "Suite d'Édition Vidéo Professionnelle",
		description:
			'Un logiciel de montage vidéo pour les créateurs de contenu, avec des outils avancés et des effets spéciaux.',
		rating: 4.5,
		reviews: 147,
		images: [productImage8],
		price: 90000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 licence'],
	},
	{
		id: 'License_Product-9',
		name: 'Gestionnaire de Mots de Passe Premium',
		description:
			'Un outil pour stocker et gérer tous vos mots de passe de manière sécurisée et synchronisée.',
		rating: 4.5,
		reviews: 147,
		images: [productImage9],
		price: 10000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['inStock'],
		specs: ['1 an'],
	},
]

export default licenseProductsMock
