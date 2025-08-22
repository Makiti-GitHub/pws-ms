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
			'A powerful, high-capacity rack server designed for data-intensive workloads, offering scalable storage, dual CPUs, and enterprise-grade performance.',
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
			'Unlimited VM support, Full Enterprise Repository Access, Centralized Web-Based Management, Advanced Backup & Restore, Seamless Cluster Management; Annual Subscription',
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
			'A rugged, compact SSD with fast NVMe speeds, ideal for creatives and professionals who need reliable, high-speed storage on the go.',
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
			'Comprehensive package for home use, featuring high-speed internet and advanced user equipment.',
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
			'A rugged, compact SSD with fast NVMe speeds, ideal for creatives and professionals who need reliable, high-speed storage on the go.',
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
			'High-Speed Gigabit RJ45 LAN Network Cable, 10Gbps 600Mhz Internet Patch Cable for Switch Router Modem Patch Panel PC (White)',
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
		description: 'Snagless Unshielded UTP RJ45 LAN Cable, PVC CM, Gray, 7ft (2.1m)',
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
		name: 'Dual-Lens 4G Security Camera with Auto-Zoom',
		rating: 4.5,
		reviews: 147,
		images: [product6],
		price: 28000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
		specs: ['Dual View', '4G LTE', 'IP65 Weatherproof'],
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
		specs: ['Long-Lasting Technology, InfiniPower™', '2300W | 2048Wh', 'IP65 Weatherproof'],
	},
	{
		id: 'Product-10',
		name: '400 W Solar Panel 12 V/18 V',
		description:
			'Monocrystalline Solar Panel N-Type, Highly Efficient Aluminium Frame, SMBB Technology, PV Module 2 x 200 Watt Solar Module for Balcony Power Plant, House Roof, Motorhome',
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
			'The MacBook Air is ultra-light at 11.5 mm, ideal for on-the-go use. Its sturdy case is made from over 50% recycled aluminum.',
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
		description: '1. Smartphone | 2. Data cable | 3. Slot tool.',
		rating: 4.5,
		reviews: 147,
		images: [product10],
		price: 365000,
		quantity: 5,
		creationDate: '2025-02-06',
		categories: ['electronics'],
		tags: ['inStock'],
		specs: ['A charging adapter is not included with the Galaxy Z Fold7.'],
	},
	{
		id: 'Product-13',
		name: 'ZV-E1 full-frame vlog camera',
		description: 'Full-frame cameraNext gen of content creation',
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
			'Enjoy music on the go with the JBL Flip Essential 2. This waterproof Bluetooth speaker offers up to 10 hours of JBL Original Pro Sound.',
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
			'Rechargeable Li-Po battery (1500mAh). Note: FileVault on macOS may block password entry at startup when using Bluetooth. Use the Logi Bolt USB receiver instead.',
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
			'Noise Cancelling, Microsoft Teams-Certified Stereo Headphones with Long-Lasting Battery, USB-C Bluetooth Adapter, Black',
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
			'(165 cm) OLED evo TV (α9 Gen7 4K AI Processor, webOS 24, Dolby Vision, up to 120 Hz) [Model Year 2024]',
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
			'Fridge side-by-side, dimensions (W x H x D) 91.3 x 179 x 73.5 cm, capacity 635 L, energy efficiency class F, colour matte black, 36 dB(A).',
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
