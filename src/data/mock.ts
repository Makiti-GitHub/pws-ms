/* -- Hero videos -- */
import heroVideo1 from '@/assets/hero/videos/hero-video1.mp4'
import heroVideo2 from '@/assets/hero/videos/hero-video2.mp4'
import heroVideo3 from '@/assets/hero/videos/hero-video3.mp4'

/* == Socials icons == */
import instagramLogo from '@/assets/logo/instagram_logo.svg'
import XLogo from '@/assets/logo/x_logo.svg'
import linkedinLogo from '@/assets/logo/linkedin_logo.svg'

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

export type ProjectCategoryType = 'web_app' | 'mobile_app' | 'e_commerce' | 'saas' | 'all'
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
