import {
	AtSignIcon,
	GlobeIcon,
	HouseIcon,
	MapPinIcon,
	MessageSquareIcon,
	SignpostIcon,
	SmartphoneIcon,
} from 'lucide-react'
import { Separator } from '../ui/separator'
import makitiLogoWhite from '@/assets/Makiti_logo_secondary.svg'
import { locationMock, socialsMock } from '@/data/mock'
import { Link } from 'rasengan'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useMenuContext } from '@/hooks/guard/ContextGuard'

const Footer = () => {
	const { t } = useTranslation()

	const { navlinks } = useMenuContext()

	return (
		<footer className="px-4 sm:px-8 md:px-[120px] pt-10 pb-5 w-full flex flex-col gap-10 bg-primary mt-[60px]">
			<div className="w-full flex flex-col lg:flex-row justify-between gap-12">
				<div className="space-y-12 md:space-y-5 xl:w-2/5">
					{/* == Makiti logo ==  */}
					<div className="w-[120px]">
						<Image
							src={makitiLogoWhite}
							alt="Makiti logo"
							width={'100%'}
							height={'100%'}
							className="size-full aspect-auto object-contain pointer-events-none select-none"
						/>
					</div>
					<p className="text-base text-secondary sm:flex-1">
						{t('footer.upperSection.leftSection.makitiActivityDescription')}
					</p>
					<div className="flex gap-5 items-center">
						{socialsMock.map((social, index) => (
							<span className="size-6 rounded-xs" key={`social-${index}`}>
								<a href={social.link} target="_blank">
									<Image
										width={'100%'}
										height={'100%'}
										src={social.icon}
										alt={social.label}
										className="size-full object-contain aspect-auto"
									/>
								</a>
							</span>
						))}
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-between gap-10 xl:w-3/5">
					<div className="text-base space-y-5 text-secondary">
						<p className="font-seravek_medium">
							{t('footer.upperSection.rightSection.services.title')}
						</p>

						<ul className={`flex flex-col gap-2.5 text-on-surface-variant`}>
							{navlinks
								.filter((item) => item.label !== 'services')
								.map((link, index) => (
									<li key={`nav-link-${index}`}>
										<Link className="hover:underline capitalize" to={link.href}>
											{t(`nav.links.${link.label}`)}
										</Link>
									</li>
								))}
						</ul>
					</div>
					<div className="text-base space-y-5 text-secondary">
						<p className="font-seravek_medium">
							{t('footer.upperSection.rightSection.services.title')}
						</p>
						<ul className="space-y-2.5">
							<li>
								<Link to="#">
									{t(
										'footer.upperSection.rightSection.services.options.serverSecurity',
									)}
								</Link>
							</li>
							<li>
								<Link to="#">
									{t(
										'footer.upperSection.rightSection.services.options.internetKitConfiguration',
									)}
								</Link>
							</li>
							<li>
								<Link to="#">
									{t(
										'footer.upperSection.rightSection.services.options.streamingServices',
									)}
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-6">
						<p className="font-seravek_medium text-base text-secondary">
							{t('footer.upperSection.rightSection.contactUs.title')}
						</p>
						<div className="flex flex-col xl:flex-row gap-2 text-secondary">
							<div className="xl:w-1/2 space-y-2">
								{locationMock.place ? (
									<div className="flex gap-4 items-center">
										<HouseIcon className="size-6" />
										<span className="flex-1">{locationMock.place}</span>
									</div>
								) : null}

								{locationMock.phone ? (
									<div className="flex gap-4 items-center">
										<SmartphoneIcon className="size-6" />
										<span className="flex-1">{locationMock.phone}</span>
									</div>
								) : null}

								{locationMock.whatsapp ? (
									<div className="flex gap-4 items-center">
										<MessageSquareIcon className="size-6" />
										<span className="flex-1">{locationMock.whatsapp}</span>
									</div>
								) : null}

								{locationMock.address ? (
									<div className="flex gap-4 items-center">
										<MapPinIcon className="size-6" />
										<span className="flex-1">{locationMock.address}</span>
									</div>
								) : null}
							</div>
							<div className="space-y-2 xl:w-1/2">
								{locationMock.arrondissement ? (
									<div className="flex gap-4 items-center">
										<SignpostIcon className="size-6" />
										<span className="flex-1">
											{locationMock.arrondissement}
										</span>
									</div>
								) : null}

								{locationMock.mail ? (
									<div className="flex gap-4 items-center">
										<AtSignIcon className="size-6" />
										<span className="flex-1">{locationMock.mail}</span>
									</div>
								) : null}

								{locationMock.website ? (
									<div className="flex gap-4 items-center">
										<GlobeIcon className="size-6" />
										<span className="flex-1">{locationMock.website}</span>
									</div>
								) : null}

								{/* {locationMock.address ? (
										<div className="flex gap-4 items-center">
											<MapIcon className="size-6" />
											<span className="flex-1">
												{t('footer.upperSection.leftSection.getDirections')}
											</span>
										</div>
									) : null} */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Separator className="w-full bg-outline" />
			<div className="w-full text-secondary text-base flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-2">
				<p>{t('footer.lowerSection.copyright', { year: '2025' })}</p>
				<div className="flex items-center justify-between gap-5">
					<Link to="/privacy-policy" className="hover:text-white">
						{t('footer.lowerSection.nav.privacyPolicy')}
					</Link>
					<Link to="/terms-and-conditions" className="hover:text-white">
						{t('footer.lowerSection.nav.termsOfService')}
					</Link>
					<Link to="/legal-notice" className="hover:text-white">
						{t('footer.lowerSection.nav.legalNotice')}
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
