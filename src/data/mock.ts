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

export const expertisesMock: {
	title: string
	content: {
		description: string
		list: string[]
	}
	color?: string
}[] = [
	{
		title: 'IT Outsourcing',
		content: {
			description: 'Complete IT outsourcing with dedicated teams',
			list: ['Dedicated Teams', 'Project Management', 'CMS Solutions'],
		},
		color: '#AACDFA',
	},
	{
		title: 'Software Development',
		content: {
			description: 'Agile development and sustainable UX/UI design',
			list: ['Agile Development', 'UX/UI Design', 'Quality Assurance'],
		},
		color: '#B3F2C0',
	},
	{
		title: 'IT Consulting',
		content: {
			description: 'AI-driven design and innovation strategies',
			list: ['AI-Driven Design', 'Innovation Strategy', 'Technical Consulting'],
		},
		color: '#FCE6C9',
	},
	{
		title: 'E-Commerce & SaaS',
		content: {
			description: 'Platform development and cloud solutions',
			list: ['E-Commerce Platforms', 'SaaS Development', 'Cloud Integration'],
		},
		color: '#E8DCFA',
	},
	{
		title: 'Security & Compliance',
		content: {
			description: 'Comprehensive cybersecurity and regulatory compliance solutions',
			list: ['Cybersecurity Audits', 'Data Protection', 'Compliance Solutions'],
		},
		color: '#F6D8D8',
	},
	{
		title: 'Digital Solutions',
		content: {
			description: 'Green digital marketing and app development',
			list: ['Digital Marketing', 'Mobile Application', 'Cross-Platform'],
		},
		color: '#F4BBDF',
	},
]

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
export type IndustriesType =
	| 'transportation'
	| 'travel'
	| 'finance'
	| 'cross_platform'
	| 'e_commerce'
	| 'logistics'
	| 'agency'
	| 'agriculture'
	| 'farming'
export type PhaseType =
	| 'discovery_and_planning'
	| 'design_and_development'
	| 'launch_and_optimization'

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
	iframeLink:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.5142507275755!2d11.536122975462819!3d3.9136499479766624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcffbec9d86b3%3A0xf33e87492a4425cb!2sMakiti%20SARL!5e0!3m2!1sfr!2sde!4v1753448717828!5m2!1sfr!2sde',
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
		href: '#contact',
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
		href: '#contact',
	},
]

export type Member = {
	name: string
	role: string
	roleDesc: string
	image: string
	experience: number
	tags: string[]
}

export const teamMemberMock: Member[] = [
	{
		name: 'Ousmanou Aboubakar',
		role: 'Chief Marketing Officer & Chief Financial Officer',
		experience: 8,
		image: '/static/images/teams/dilane-kombou.png',
		tags: ['Business Development', 'Client Relations'],
		roleDesc:
			'Visionary leader with extensive experience in business strategy and client relations, driving company growth and innovation.',
	},
	// {
	// 	name: 'Marie-Josée Mache',
	// 	role: 'Chief Technology Officer',
	// 	experience: 7,
	// 	image: '/static/images/teams/2.jpeg',
	// 	tags: ['Strategic Leadership', 'Software Architecture'],
	// 	roleDesc:
	// 		'Strategic technology leader with deep expertise in software architecture, driving innovative technical solutions and organizational growth.',
	// },
	{
		name: 'Ivan Axel Ngomdjom',
		role: 'Project Analyst',
		experience: 6,
		image: '/static/images/teams/3.jpeg',
		tags: ['Cross Platform', 'Marketing'],
		roleDesc:
			'Detail-oriented analyst with experience in cross-platform initiatives, leveraging marketing insights to optimize project outcomes.',
	},
	{
		name: 'Armel Dilane Mbianda Kombou',
		role: 'Software Developer',
		experience: 4,
		tags: ['Coding', 'Software Development'],
		image: '/static/images/teams/5.jpeg',
		roleDesc:
			'Skilled software developer with robust coding abilities, building and maintaining high-quality software solutions.',
	},
	{
		name: 'Virginie Ndjenaar Adama Mando',
		role: 'Junior Key Account Manager & Executive assistant',
		experience: 3,
		tags: ['Marketing', 'Client Relations'],
		roleDesc:
			'Dynamic professional adept at client relations, supporting key accounts and contributing to marketing initiatives.',
		image: '/static/images/teams/6.jpeg',
	},
	{
		name: 'Lawal Michael Fuad',
		role: 'Lead Designer',
		tags: ['Prototyping', 'Software Design'],
		experience: 2,
		roleDesc:
			'Creative lead designer specializing in prototyping and software design, crafting intuitive and engaging user experiences.',
		image: '/static/images/teams/4.jpeg',
	},
]

/* Form fields values */

/* Project type */

export const ProjectTypeCategoriesEnum = [
	'web_app',
	'mobile_app',
	'e_commerce',
	'saas',
	'others',
] as const

export type ProjectTypeCategoriesType =
	(typeof ProjectTypeCategoriesEnum)[keyof typeof ProjectTypeCategoriesEnum]

export const formProjectTypes: {
	label: string
	type: ProjectTypeCategoriesType
}[] = [
	{
		label: 'Web Development',
		type: 'web_app',
	},
	{
		label: 'Mobile Development',
		type: 'mobile_app',
	},
	{
		label: 'E-Commerce Platforms',
		type: 'e_commerce',
	},
	{
		label: 'SaaS Development',
		type: 'saas',
	},
	{
		label: 'Others',
		type: 'others',
	},
]

/** Technical Requirements */

export const formTechnicalRequirements = [
	{
		id: 'frontend-development',
		label: 'Frontend Development',
	},
	{
		id: 'database-design',
		label: 'Database Design',
	},
	{
		id: 'devops',
		label: 'DevOps',
	},
	{
		id: 'uxui-design',
		label: 'UX/UI Design',
	},
	{
		id: 'project-management',
		label: 'Project Management',
	},
	{
		id: 'backend-development',
		label: 'Backend Development',
	},
	{
		id: 'cloud-infrastructure',
		label: 'Cloud Infrastructure',
	},
	{
		id: 'mobile-development',
		label: 'Mobile Development',
	},
	{
		id: 'quality-assurance',
		label: 'Quality Assurance',
	},
	{
		id: 'technical-consulting',
		label: 'Technical Consulting',
	},
] as const

/** Technical Requirements */

export const formTeamSizes = [
	{
		id: '1–2 Members',
		label: '1–2 Members',
	},
	{
		id: '3–5 Members',
		label: '3–5 Members',
	},
	{
		id: '6–10 Members',
		label: '6–10 Members',
	},
	{
		id: '10–15 Members',
		label: '10–15 Members',
	},
	{
		id: '15+ Members',
		label: '15+ Members',
	},
] as const

/** Form Budget Ranges */
export const formBudgetRanges = [
	'$10,000 - $25,000',
	'$25,000 - $50,000',
	'$50,000 - $100,000',
	'$100,000 - $250,000',
	'$250,000+',
] as const

/** Form Project Timeline */
export const formProjectTimelines = [
	'0–3 Months',
	'3–6 Months',
	'6–9 Months',
	'9–12 Months',
	'12+ Months',
] as const

/* Products mock */
export type ProductTagType = 'new' | 'topRated' | 'inStock'

export const productsMock: {
	images: string[]
	name: string
	description: string
	rating: number
	reviews: number
	id: string
	tags?: ProductTagType[]
	price: string
	quantity: number
	creationDate: string
	category: ProductCategoryType
}[] = [
	{
		id: '1',
		name: 'Dell PowerEdge R740XD',
		description:
			'A powerful, high-capacity rack server designed for data-intensive workloads, offering scalable storage, dual CPUs, and enterprise-grade performance.',
		rating: 4.7,
		reviews: 162,
		images: [DellPowerEdgeR740XD],
		price: '50,000',
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
		price: '50,000',
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
		price: '75,000',
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
		price: '50,000',
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
		price: '8,700',
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
		price: '4,500',
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
	price: string
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
		price: '250.000 CFA/month',
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
		price: '600.000 CFA/device',
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
		price: '50.000 CFA/device',
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
		id: '1',
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
		id: '2',
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
		id: '3',
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
		id: '4',
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
		id: '5',
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
		id: '6',
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
