/* -- Hero videos -- */
import heroVideo1 from '@/assets/hero/videos/hero-video1.mp4'
import heroVideo2 from '@/assets/hero/videos/hero-video2.mp4'
import heroVideo3 from '@/assets/hero/videos/hero-video3.mp4'

/* == Socials icons == */
import instagramLogo from '@/assets/logo/instagram_logo.svg'
import XLogo from '@/assets/logo/x_logo.svg'
import linkedinLogo from '@/assets/logo/linkedin_logo.svg'

/* == Shop images == */
import DellPowerEdgeR740XD from '@/assets/shop/Dell PowerEdge R740XD.png'
import proxmoxLicences from '@/assets/shop/PROXMOX Licences.png'
import SanDiskExtremePortable from '@/assets/shop/SanDisk Extreme Portable.png'
import FRITZBox from '@/assets/shop/FRITZ Box 7530 AX WI-FI 6 DSL-Router.png'
import SanDiskExtremePortableUSB from '@/assets/shop/SanDisk Extreme Portable USB.png'
import FolishineCat7 from '@/assets/shop/Folishine Cat7 Ethernet Cable 5m.png'

// /* == Partners section == */
import appleTvLogo from '@/assets/partners/appleTv.svg'
import appleMusicLogo from '@/assets/partners/apple_music-update_hero_08242021.jpg.news_app_ed.svg'
import beinSportsLogo from '@/assets/partners/bein_sports.svg'
import ciscoLogo from '@/assets/partners/cisco.svg'
import cloudflareLogo from '@/assets/partners/cloudflare-logo-vector-11573946103zsbxw5kpaj 1.svg'
import dellLogo from '@/assets/partners/dell.svg'
import disneyPlusLogo from '@/assets/partners/disney.svg'
import ftVmwareWorkstationLogo from '@/assets/partners/ft_vmware_workstation.svg'
import canalPlusLogo from '@/assets/partners/canal_plus.svg'
import netflixLogo from '@/assets/partners/netflix.svg'
import paramountLogo from '@/assets/partners/paramount.svg'
import primeVideoLogo from '@/assets/partners/primeVideo.svg'
import proxmoxLogo from '@/assets/partners/proxmox.svg'
import setOfAmazonAwsLogo from '@/assets/partners/set-of-amazon-aws-logo-with-cloud-701751695133943bu7i9n6yvh.svg'
import starlinkLogo from '@/assets/partners/starlink.svg'
import ubuntuLogo from '@/assets/partners/ubuntu2x.png@.svg'
import windowsServerLogo from '@/assets/partners/windows-server-blue-a517bed8722d2e781.svg'

/* == Our Services == */
import service1Number from '@/assets/ourServices/Frame 1618873693.svg'
import service2Number from '@/assets/ourServices/Frame 1618873694.svg'
import service3Number from '@/assets/ourServices/Frame 1618873695.svg'
import serverSecurityImg from '@/assets/ourServices/server_security.png'
import starlinkKitImg from '@/assets/ourServices/starlink_kit.png'
import streamingServicesImg from '@/assets/ourServices/streaming_services.png'

/* == Services - Server Security ==  */
// icons
import serverSecurtyIcon1 from '@/assets/ourServices/serverSecurity/icon1.svg'
import serverSecurtyIcon2 from '@/assets/ourServices/serverSecurity/icon2.svg'
import serverSecurtyIcon3 from '@/assets/ourServices/serverSecurity/icon3.svg'
import serverSecurtyIcon4 from '@/assets/ourServices/serverSecurity/icon4.svg'
import serverSecurtyIcon5 from '@/assets/ourServices/serverSecurity/icon5.svg'
import serverSecurtyIcon6 from '@/assets/ourServices/serverSecurity/icon6.svg'
//Images
import serverSecurtyImage1 from '@/assets/ourServices/serverSecurity/image1.png'
import serverSecurtyImage2 from '@/assets/ourServices/serverSecurity/image2.png'
import serverSecurtyImage3 from '@/assets/ourServices/serverSecurity/image3.png'
import serverSecurtyImage4 from '@/assets/ourServices/serverSecurity/image4.png'
import serverSecurtyImage5 from '@/assets/ourServices/serverSecurity/image5.png'
import serverSecurtyImage6 from '@/assets/ourServices/serverSecurity/image6.png'

/* == Services - Streaming services ==  */
// icons
import streamingServicesIcon1 from '@/assets/ourServices/streamingServices/icon1.svg'
import streamingServicesIcon2 from '@/assets/ourServices/streamingServices/icon2.svg'
import streamingServicesIcon3 from '@/assets/ourServices/streamingServices/icon3.svg'
import streamingServicesIcon4 from '@/assets/ourServices/streamingServices/icon4.svg'
import streamingServicesIcon5 from '@/assets/ourServices/streamingServices/icon5.svg'
import streamingServicesIcon6 from '@/assets/ourServices/streamingServices/icon6.svg'
//Images
import streamingServicesImage1 from '@/assets/ourServices/streamingServices/image1.png'
import streamingServicesImage2 from '@/assets/ourServices/streamingServices/image2.png'
import streamingServicesImage3 from '@/assets/ourServices/streamingServices/image3.png'
import streamingServicesImage4 from '@/assets/ourServices/streamingServices/image4.png'
import streamingServicesImage5 from '@/assets/ourServices/streamingServices/image5.png'
import streamingServicesImage6 from '@/assets/ourServices/streamingServices/image6.png'

/* == Services - InternetKitConfig ==  */
// icons
import iKCIcon1 from '@/assets/ourServices/internetKitConfiguration/installationProcess/wpf_survey.svg'
import iKCIcon2 from '@/assets/ourServices/internetKitConfiguration/installationProcess/solar_settings-linear.svg'
import iKCIcon3 from '@/assets/ourServices/internetKitConfiguration/installationProcess/mdi_network-favorite.svg'
import iKCIcon4 from '@/assets/ourServices/internetKitConfiguration/installationProcess/streamline-cyber_window-speedtest.svg'
import Product from '@/entities/product.entity'

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

export const InstallationProcessMock: {
	title: string
	desc: string
	icon?: string
	color: string
}[] = [
	{
		title: 'Site Survey',
		desc: 'We assess your location for optimal satellite signal reception',
		icon: '',
		color: '#DEEAFD',
	},
	{
		title: 'Equipment Setup',
		desc: 'Professional installation of dish and router with optimal positioning',
		icon: '',
		color: '#E2FBE8',
	},
	{
		title: 'Network Configuration',
		desc: 'Complete network setup including Wi-Fi and device connections',
		icon: '',
		color: '#FDEDD7',
	},
	{
		title: 'Testing & Training',
		desc: 'Speed testing and user training on system operation',
		icon: '',
		color: '#F1E9FD',
	},
]

export const frequentlyAskedQuestionsMock: { question: string; answer: string }[] = [
	{
		question: 'How fast is Starlink internet?',
		answer: 'Starlink provides download speeds between 25-220 Mbps and upload speeds of 5-25 Mbps. Speeds vary based on location, time of day, and network congestion. Most users experience speeds sufficient for streaming, gaming, and video calls.',
	},
	{
		question: 'How long does installation take?',
		answer: 'Self-installation typically takes 15-30 minutes. Our professional installation service includes a site survey and takes 2-4 hours for complete setup and testing. We also provide training on system operation.',
	},

	{
		question: 'Is Starlink affected by weather?',
		answer: 'Starlink is designed to work in various weather conditions. Heavy snow or ice may temporarily affect signal, but the system is built to handle most weather scenarios. The dish includes heating elements to melt snow and ice.',
	},

	{
		question: 'What is the monthly cost after installation?',
		answer: 'Monthly service fees vary by plan and location. Residential plans typically start at $120/month, while business plans range from $250-500/month. Contact us for current pricing in your area.',
	},

	{
		question: 'Can I move my Starlink to a different location?',
		answer: 'Yes! Starlink offers portability options. The Mini and Roam kits are designed for easy relocation. Standard kits can be moved but may require service address updates and potential plan changes.',
	},
	{
		question: 'How long does it take to start a project and deliver results?',
		answer: "Project kickoff typically takes 2-3 weeks, covering team setup and requirement analysis. Delivery timelines depend on project scope: simple websites (4-8 weeks), complex apps (3-12 months), enterprise solutions (6-18 months). You'll get a detailed roadmap upfront, with consistent progress updates at every stage.",
	},

	{
		question: 'What technologies and skills do your teams specialize in?',
		answer: 'Our teams are experts in modern tech stacks: Fronted (React, Vue.js, Angular), Backend (Node.js, Python, Java), Mobile (React Native, Flutter), Cloud (AWS, Azure, GCP), DevOps (Docker, Kubernetes), AI/ML (Tenserflow, PyTorch), and databases (ProgreSQL, MongoDB). We stay sharp by constantly evolving with the latest tools and best practices.',
	},
]

export const journeyListMock: {
	date: string
	title: string
	desc: string
}[] = [
	{
		date: '2021',
		title: 'Company Founded',
		desc: 'The adventure of Makiti SARL began with a visionary idea by our founder, Honorable Abdel. Operating a shop in Emana, Yaoundé, offering mobile phone recharges and Canal+ subscriptions, he perceived the untapped potential and contacted MJ in Germany. The "first suitcase" containing phones and German treats like Haribos was a bold test that sold out within weeks, proving the quality of German products had won people over.',
	},
	{
		date: '2022',
		title: 'Building Trust & Clientele',
		desc: '2022 saw the emergence of a loyal and demanding clientele. Our customers trusted us, placing specific orders for Zara or Chanel perfumes, demonstrating valuable confidence in our service. This success led to the decision to officially found a company.',
	},
	{
		date: '2023',
		title: 'Official Establishment',
		desc: 'Makiti SARL was officially established with a clear vocation for E-commerce. We recruited our first employees: a young graphic designer whom we supported by funding training, and an IT student whose role as a "data analyst" was crucial for collecting data and making forecasts. Thanks to our data analyst\'s training, we landed our first major client and worked on a Big Data project for a year.',
	},
	{
		date: '2024',
		title: 'Strategic Partnership',
		desc: '2024 marked a key year with a strategic partnership: Makiti SARL became a partner of Makiti Group. This alliance allowed us to broaden our horizons, adding a new branch dedicated to IT software development to our E-commerce offerings.',
	},
	{
		date: '2025',
		title: 'Continued Innovation',
		desc: 'Today, we continue to thrive in E-commerce, enriching our catalog with IT products such as servers, USB sticks, micro SD cards, laptops, and more, while strengthening our expertise in IT services. The journey of Makiti SARL is one of constant growth, built on customer focus, human investment, quality, and a bold vision for digital innovation.',
	},
]

export const locationMock = {
	name: 'Yaoundé - Cameroon',
	id: 'Yaoundé',
	coordinates: [51.5074, -0.1278],
	enterprise: 'MAKITI SARL',
	place: 'B.P. 1011 Yaoundé',
	phone: '+237 6 80 09 54 53',
	whatsapp: '+237 6 80 09 54 53',
	address: 'Santa Barbara, face sonel',
	arrondissement: 'Arrondissment Yaoundé 1er',
	mail: 'contact@makiti.cm',
	website: 'www.makiti.cm',
}

export const socialsMock: {
	label: string
	icon: string
	link?: string
}[] = [
	{
		label: 'Instagram',
		icon: instagramLogo,
		link: '#',
	},
	{
		label: 'Twitter',
		icon: XLogo,
		link: '#',
	},
	{
		label: 'Linkedin',
		icon: linkedinLogo,
		link: 'https://www.linkedin.com/company/makiti-group/posts/?feedView=all',
	},
]

export const heroCarousel: {
	title: string
	desc: string
	video: string
	cta: string
	href: string
}[] = [
	{
		title: 'Boost Your Connectivity & Entertainment with Our Expert Solutions',
		desc: 'At the crossroads of performance, security, and entertainment, we deliver the digital infrastructure your world needs.',
		video: heroVideo1,
		cta: 'Contact Us Now',
		href: '/contact-us',
	},
	{
		title: 'Entertainment without limits',
		desc: 'Enjoy premium IPTV, Netflix, music, and video streaming — we deliver the content you love, hassle-free.',
		video: heroVideo2,
		cta: 'Browse Our Webshop',
		href: '/shop',
	},
	{
		title: 'Stay Connected Everywhere',
		desc: 'Enjoy fast, reliable internet anywhere — even in remote areas. We sell, install, configure, and maintain satellite internet kits to keep you connected, wherever you are.',
		video: heroVideo3,
		cta: 'Contact Us Now',
		href: 'contact-us',
	},
]

/* Products mock */
export type ProductTagType = 'new' | 'topRated' | 'inStock'

export const productsMock: Product[] = [
	{
		id: '1',
		name: 'Dell PowerEdge R740XD',
		description:
			'A powerful, high-capacity rack server designed for data-intensive workloads, offering scalable storage, dual CPUs, and enterprise-grade performance.',
		rating: 4.7,
		reviews: 162,
		images: [DellPowerEdgeR740XD],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		category: 'electronics',
		tags: ['inStock'],
	},
	{
		id: '2',
		name: 'PROXMOX Licences',
		description:
			'Unlimited VM support, Full Enterprise Repository Access, Centralized Web-Based Management, Advanced Backup & Restore, Seamless Cluster Management; Annual Subscription',
		rating: 4.7,
		reviews: 162,
		images: [proxmoxLicences],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		category: 'license',
		tags: ['topRated'],
	},
	{
		id: '3',
		name: 'SanDisk Extreme Portable',
		description:
			'A rugged, compact SSD with fast NVMe speeds, ideal for creatives and professionals who need reliable, high-speed storage on the go.',
		rating: 4.7,
		reviews: 162,
		images: [SanDiskExtremePortable],
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		category: 'electronics',
		tags: ['inStock'],
	},
	{
		id: '4',
		name: 'FRITZ Box 7530 AX WI-FI 6 DSL-Router',
		description:
			'Comprehensive package for home use, featuring high-speed internet and advanced user equipment.',
		rating: 4.7,
		reviews: 162,
		images: [FRITZBox],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		category: 'electronics',
		tags: ['topRated'],
	},
	{
		id: '5',
		name: 'SanDisk Extreme Portable',
		description:
			'A rugged, compact SSD with fast NVMe speeds, ideal for creatives and professionals who need reliable, high-speed storage on the go.',
		rating: 4.7,
		reviews: 162,
		images: [SanDiskExtremePortableUSB],
		price: 8700,
		quantity: 5,
		creationDate: '2025-02-06',
		category: 'electronics',
		tags: ['inStock'],
	},
	{
		id: '6',
		name: 'Folishine Cat7 Ethernet Cable 5m',
		description:
			'High-Speed Gigabit RJ45 LAN Network Cable, 10Gbps 600Mhz Internet Patch Cable for Switch Router Modem Patch Panel PC (White)',
		rating: 4.7,
		reviews: 162,
		images: [FolishineCat7],
		price: 4500,
		quantity: 5,
		creationDate: '2025-02-06',
		category: 'electronics',
		tags: ['new'],
	},
]

export type PartnersCategoryType = 'serverSecurity' | 'internetConfiguration' | 'streamingServices'

export const partnersMock: Record<PartnersCategoryType, string[]> = {
	serverSecurity: [
		cloudflareLogo,
		setOfAmazonAwsLogo,
		ciscoLogo,
		ubuntuLogo,
		proxmoxLogo,
		ftVmwareWorkstationLogo,
		windowsServerLogo,
		dellLogo,
	],
	internetConfiguration: [starlinkLogo],
	streamingServices: [
		beinSportsLogo,
		disneyPlusLogo,
		paramountLogo,
		canalPlusLogo,
		appleTvLogo,
		appleMusicLogo,
		primeVideoLogo,
		netflixLogo,
	],
}

export const ourServicesMock: {
	title: string
	description: string
	attributes: string[]
	icon: string
	image: string
	price: number
	priceUnit: string
	cta: string
	link?: string
}[] = [
	{
		title: 'Server Security',
		description:
			'From sourcing to secure installation, we build robust IT infrastructures that power your operations with confidence.',
		attributes: [
			'24/7 monitoring and threat detection',
			'Advanced firewall configuration',
			'Vulnerability assessments',
		],
		price: 250000,
		priceUnit: 'month',
		icon: service1Number,
		cta: 'Stay secure',
		image: serverSecurityImg,
		link: 'server-security',
	},
	{
		title: 'Internet Kit Configuration',
		description:
			'Enjoy fast, reliable internet anywhere — even in remote areas. We sell, install, and maintain satellite kits to keep you connected.',
		attributes: ['Global Shipping', '24/7 Remote Support', 'Coverage area mapping'],
		price: 600000,
		priceUnit: 'device',
		icon: service2Number,
		cta: 'Get connected',
		image: starlinkKitImg,
		link: 'internet-kit-configuration',
	},
	{
		title: 'Streaming Services',
		description:
			'Dive into endless entertainment with our curated IPTV, music & video streaming packages — including Netflix, live TV, and more.',
		attributes: [
			'Multi-device configuration',
			'Channel lineup optimization',
			'Streaming quality enhancement',
		],
		price: 50000,
		priceUnit: 'device',
		icon: service3Number,
		cta: 'Stream without limits',
		image: streamingServicesImg,
		link: 'streaming-services',
	},
]

export const serverSecurityOffersMock: {
	id: string
	images: string[]
	name: string
	description: string
	promises: string[]
	price: number
	quantity: number
	creationDate: string
	color: string
	icon: string
}[] = [
	{
		id: '1-serverSecurity',
		name: 'Technical Analysis',
		description: 'Comprehensive security assessment and vulnerability analysis',
		images: [serverSecurtyImage1],
		icon: serverSecurtyIcon1,
		promises: [
			'Security audit',
			'Vulnerability scanning',
			'Risk assessment',
			'Detailed reporting',
		],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#DCEBFE',
	},
	{
		id: '2-serverSecurity',
		name: 'Solution Support',
		description: '24/7 technical support and maintenance services',
		images: [serverSecurtyImage2],
		icon: serverSecurtyIcon2,
		price: 75000,
		quantity: 5,
		creationDate: '2025-02-06',
		promises: ['24/7 monitoring', 'Incident response', 'Regular updates', 'Technical guidance'],
		color: '#DDFCE7',
	},
	{
		id: '3-serverSecurity',
		name: 'License Installation',
		description: 'Professional software licensing and installation services',
		images: [serverSecurtyImage3],
		icon: serverSecurtyIcon3,
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		promises: ['Software licensing', 'Installation setup', 'Configuration', 'Compliance check'],
		color: '#F3E8FF',
	},
	{
		id: '4-serverSecurity',
		name: 'Antivirus Solutions',
		description: 'Enterprise-grade antivirus and malware protection',
		images: [serverSecurtyImage4],
		icon: serverSecurtyIcon4,
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#FAE3E3',
		promises: [
			'Real-time protection',
			'Malware scanning',
			'Firewall management',
			'Regular updates',
		],
	},
	{
		id: '5-serverSecurity',
		name: 'Backup Server',
		description: 'Automated backup solutions and disaster recovery',
		images: [serverSecurtyImage5],
		icon: serverSecurtyIcon5,
		price: 75000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#FDEDD7',
		promises: ['Automated backups', 'Cloud storage', 'Disaster recovery', 'Data encryption'],
	},
	{
		id: '6-serverSecurity',
		name: 'Mail Gateway',
		description: 'Secure email gateway and spam protection',
		images: [serverSecurtyImage6],
		icon: serverSecurtyIcon6,
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#D5FAF2',
		promises: ['Spam filtering', 'Email encryption', 'Virus scanning', 'Policy management'],
	},
]

export const streamingServicesOffersMock: {
	id: string
	images: string[]
	name: string
	description: string
	promises: string[]
	price: number
	quantity: number
	creationDate: string
	color: string
	icon: string
}[] = [
	{
		id: '1',
		name: 'Live TV',
		description: 'Access thousands of live TV channels from around the world',
		images: [streamingServicesImage1],
		icon: streamingServicesIcon1,
		promises: ['5000+ Live channels', 'International content', 'HD/4K quality', 'EPG support'],
		price: 50000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#DCEBFE',
	},
	{
		id: '2',
		name: 'Sports',
		description: 'Premium sports channel and live events',
		images: [streamingServicesImage2],
		icon: streamingServicesIcon2,
		price: 75000,
		quantity: 5,
		creationDate: '2025-02-06',
		promises: [
			'All major sports leagues',
			'Live match coverage',
			'Sports highlights',
			'Multi-camera angles',
		],
		color: '#DDFCE7',
	},
	{
		id: '3',
		name: 'Kids',
		description: 'Safe and educational content for children',
		images: [streamingServicesImage3],
		icon: streamingServicesIcon3,
		price: 30000,
		quantity: 5,
		creationDate: '2025-02-06',
		promises: [
			'Age-appropriate content',
			'Educational programs',
			'Parental controls',
			'Cartoon channels',
		],
		color: '#F3E8FF',
	},
	{
		id: '4',
		name: 'Music & Videos',
		description: 'Music streaming and music video channels',
		images: [streamingServicesImage4],
		icon: streamingServicesIcon4,
		price: 40000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#FCE7F3',
		promises: [
			'Music streaming',
			'Music video channels',
			'Concert broadcasts',
			'Offline playlists',
		],
	},
	{
		id: '5',
		name: 'Movies & Series',
		description: 'Premium movies and series streaming',
		images: [streamingServicesImage5],
		icon: streamingServicesIcon5,
		price: 60000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#FEE2E2',
		promises: ['Latest movies', 'TV series on demand', 'Documentaries', '4k Ultra HD'],
	},
	{
		id: '6',
		name: 'Complete Package',
		description: 'All streaming services in one package',
		images: [streamingServicesImage6],
		icon: streamingServicesIcon6,
		price: 199000,
		quantity: 5,
		creationDate: '2025-02-06',
		color: '#FEF7EB',
		promises: ['All categories included', 'Premium support', 'Multiple devices', 'Best value'],
	},
]

// Internet kit configuration mocks
export const internetKitConfigurationStatsMock: {
	transkey: string
	count: number
	suffix: string
}[] = [
	{
		transkey: 'sattelites',
		count: 5000,
		suffix: '+',
	},
	{
		transkey: 'sattelites',
		count: 550,
		suffix: 'km',
	},
	{
		transkey: 'lowLatency',
		count: 25,
		suffix: 'ms',
	},
	{
		transkey: 'uptime',
		count: 99,
		suffix: '%',
	},
]

export const internetKitConfigurationPlansMock: {
	title: string
	description: string
	promises: string[]
	price: number
	isBest: boolean
	transkey: string
}[] = [
	{
		title: 'Starter',
		price: 420000,
		description: '+',
		isBest: false,
		promises: ['Order your equipment with ease.', 'Fast delivery straight to your door.'],
		transkey: 'starter',
	},
	{
		title: 'Premium',
		price: 1108000,
		description: 'km',
		isBest: true,
		promises: [
			'Easily order your premium equipment.',
			'Fast and secure delivery to your door.',
			'Pre-installation visit at your location.',
			'Technician deployment for optimal setup.',
			'24/7 personalized support to answer all your questions.',
			'1 month of free subscription.',
			'Custom solutions  for unmatched connectivity.',
			'One free VIP bus ticket from an agency of your choice.',
		],
		transkey: 'premium',
	},
	{
		title: 'Standard',
		price: 983000,
		description: 'ms',
		isBest: false,
		promises: [
			'Order your equipment in just a few clicks.',
			'Express delivery to your location.',
			'Pre-installation visit at your premises.',
			'Optimized setup by our expert team for maximum performance.',
			'Personalized follow-up to ensure total satisfaction.',
			'One free PREMIUM bus ticket from an agency of your choice.',
		],
		transkey: 'standard',
	},
]

export const iKcInstallationProcessMock: {
	icon: string
	title: string
	description: string
	color: string
}[] = [
	{
		icon: iKCIcon1,
		title: 'Site Survey',
		description: 'We assess your location for optimal satellite signal reception',
		color: '#DEEAFD',
	},
	{
		icon: iKCIcon2,
		title: 'Equipment Setup',
		description: 'Professional installation of dish and router with optimal positioning',
		color: '#E2FBE8',
	},
	{
		icon: iKCIcon3,
		title: 'Network Configuration',
		description: 'Complete network setup including Wi-Fi and device connections',
		color: '#FDEDD7',
	},
	{
		icon: iKCIcon4,
		title: 'Testing & Training',
		description: 'Speed testing and user training on system operation',
		color: '#F1E9FD',
	},
]
