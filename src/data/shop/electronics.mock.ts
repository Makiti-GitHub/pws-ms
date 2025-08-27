import Product from '@/entities/product.entity'

/* == Shop images == */
// Electronics Images //
import DellPowerEdgeR740XD from '@/assets/shop/Dell PowerEdge R740XD.png'
import proxmoxLicences from '@/assets/shop/PROXMOX Licences.png'
import SanDiskExtremePortable from '@/assets/shop/SanDisk Extreme Portable.png'
import FRITZBox from '@/assets/shop/FRITZ Box 7530 AX WI-FI 6 DSL-Router.png'
import SanDiskExtremePortableUSB from '@/assets/shop/SanDisk Extreme Portable USB.png'
import FolishineCat7 from '@/assets/shop/Folishine Cat7 Ethernet Cable 5m.png'
import product5 from '@/assets/shop/product5.png'
import product6 from '@/assets/shop/product6.png'
import product7 from '@/assets/shop/product7.png'
import product8 from '@/assets/shop/product8.png'
import product9 from '@/assets/shop/product9.png'
import product10 from '@/assets/shop/product10.png'
import product11 from '@/assets/shop/product11.png'
import product12 from '@/assets/shop/product12.png'
import product13 from '@/assets/shop/product13.png'
import product14 from '@/assets/shop/product14.png'
import product15 from '@/assets/shop/product15.png'
import product16 from '@/assets/shop/product16.png'

const electronicProductsMock: Product[] = [
	{
		id: 'Product-1',
		name: 'Dell PowerEdge R740XD',
		description:
			'Un serveur rack puissant et à haute capacité conçu pour les charges de travail intensives en données, offrant un stockage évolutif, des processeurs doubles et des performances de niveau entreprise.',
		rating: 4.7,
		reviews: 162,
		images: [DellPowerEdgeR740XD],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
	},
	{
		id: 'Product-2',
		name: 'PROXMOX Licences',
		description:
			"Prise en charge de VM illimitée, Accès complet au référentiel d'entreprise, Gestion centralisée basée sur le Web, Sauvegarde et restauration avancées, Gestion de cluster transparente ; Abonnement annuel",
		rating: 4.7,
		reviews: 162,
		images: [proxmoxLicences],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['license'],
		tags: ['topRated'],
	},
	{
		id: 'Product-3',
		name: 'SanDisk Extreme Portable',
		description:
			"Un SSD robuste et compact doté de vitesses NVMe rapides, idéal pour les créatifs et les professionnels qui ont besoin d'un stockage fiable et à haute vitesse en déplacement.",
		rating: 4.7,
		reviews: 162,
		images: [SanDiskExtremePortable],
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
	},
	{
		id: 'Product-4',
		name: 'FRITZ Box 7530 AX WI-FI 6 DSL-Router',
		description:
			'Forfait complet pour usage domestique, comprenant un accès Internet à haute vitesse et un équipement utilisateur avancé.',
		rating: 4.7,
		reviews: 162,
		images: [FRITZBox],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['topRated'],
	},
	{
		id: 'Product-5',
		name: 'SanDisk Extreme Portable',
		description:
			"Un SSD robuste et compact doté de vitesses NVMe rapides, idéal pour les créatifs et les professionnels qui ont besoin d'un stockage fiable et à haute vitesse en déplacement.",
		rating: 4.7,
		reviews: 162,
		images: [SanDiskExtremePortableUSB],
		price: 8700,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
	},
	{
		id: 'Product-6',
		name: 'Folishine Cat7 Ethernet Cable 5m',
		description:
			'Câble réseau LAN Gigabit RJ45 haute vitesse, câble Internet 10Gbps 600Mhz pour commutateur, routeur, modem, panneau de raccordement, PC (blanc)',
		rating: 4.7,
		reviews: 162,
		images: [FolishineCat7],
		price: 4500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['new'],
	},
	{
		id: 'Product-7',
		name: 'Cat6 Patch Cable',
		description: 'Câble LAN RJ45 sans bavure non blindé UTP, PVC CM, gris, 7 pieds (2,1 m)',
		rating: 4,
		reviews: 75,
		images: [product5],
		price: 15000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['topRated'],
	},
	{
		id: 'Product-8',
		name: 'Caméra de sécurité 4G à double objectif avec auto-zoom',
		rating: 4.5,
		reviews: 147,
		images: [product6],
		price: 28000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
		specs: ['Vue double', '4G LTE', 'Étanche IP65'],
	},
	{
		id: 'Product-9',
		name: 'Anker SOLIX F2000 Power station',
		rating: 4.9,
		reviews: 200,
		images: [product7],
		price: 85000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['new'],
		specs: ['Technologie de longue durée, InfiniPower™', '2300W | 2048Wh', 'Étanche IP65'],
	},
	{
		id: 'Product-10',
		name: '400 W Solar Panel 12 V/18 V',
		description:
			'Panneau solaire monocristallin de type N, cadre en aluminium hautement efficace, technologie SMBB, module PV 2 x 200 watts pour centrale électrique de balcon, toit de maison, camping-car',
		rating: 4.5,
		reviews: 147,
		images: [product8],
		price: 85000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
	},
	{
		id: 'Product-11',
		name: 'MacBook Air',
		description:
			"Le MacBook Air est ultra-léger avec une épaisseur de 11,5 mm, idéal pour une utilisation en déplacement. Son boîtier robuste est réalisé à partir de plus de 50% d'aluminium recyclé.",
		rating: 4.5,
		reviews: 147,
		images: [product9],
		price: 485000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['topRated'],
	},
	{
		id: 'Product-12',
		name: 'Galaxy Z Fold7',
		description: '1. Smartphone | 2. Câble de données | 3. Outil de fente.',
		rating: 4.5,
		reviews: 147,
		images: [product10],
		price: 365000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
		specs: ["Un adaptateur de charge n'est pas inclus avec le Galaxy Z Fold7."],
	},
	{
		id: 'Product-13',
		name: 'ZV-E1 full-frame vlog camera',
		description: 'Appareil photo plein format La nouvelle génération de création de contenu',
		rating: 4.5,
		reviews: 147,
		images: [product11],
		price: 365000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['new'],
	},
	{
		id: 'Product-14',
		name: 'JBL Flip Essential 2',
		description:
			"Profitez de la musique en déplacement avec le JBL Flip Essential 2. Cet enceinte Bluetooth étanche offre jusqu'à 10 heures de son JBL Original Pro.",
		rating: 4.5,
		reviews: 147,
		images: [product12],
		price: 15500,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['topRated'],
	},
	{
		id: 'Product-15',
		name: 'MX Keys S Combo',
		description:
			"Batterie Li-Po rechargeable (1500mAh). Remarque : FileVault sous macOS peut bloquer la saisie du mot de passe au démarrage lors de l'utilisation du Bluetooth. Utilisez plutôt le récepteur USB Logi Bolt.",
		rating: 4.5,
		reviews: 147,
		images: [product13],
		price: 32750,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
	},
	{
		id: 'Product-16',
		name: 'Jabra Evolve2 65 Wireless PC Headset',
		description:
			'Annulation de bruit, casque stéréo certifié Microsoft Teams avec batterie longue durée, adaptateur Bluetooth USB-C, noir',
		rating: 4.5,
		reviews: 147,
		images: [product14],
		price: 21300,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
	},
	{
		id: 'Product-17',
		name: 'LG OLED65C47LA TV 65 Inch',
		description:
			"(165 cm) Téléviseur OLED evo (processeur α9 Gen7 4K AI, webOS 24, Dolby Vision, jusqu'à 120 Hz) [Modèle année 2024]",
		rating: 4.5,
		reviews: 147,
		images: [product15],
		price: 215300,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['topRated'],
	},
	{
		id: 'Product-18',
		name: 'LG GSXV91MCAF, Class F, 635 L',
		description:
			"Réfrigérateur side-by-side, dimensions (L x H x P) 91,3 x 179 x 73,5 cm, capacité 635 L, classe d'efficacité énergétique F, couleur noir mat, 36 dB(A).",
		rating: 4.5,
		reviews: 147,
		images: [product16],
		price: 215300,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['new'],
	},
]

export default electronicProductsMock
