/* Images */
import makitiLogoWhite from '@/assets/Makiti_logo_secondary.svg'
/* Icons */
import AtSignIcon from '@/assets/footer/entypo_email.svg'
import GlobeIcon from '@/assets/footer/streamline-plump_web.svg'
import HouseIcon from '@/assets/footer/famicons_home-outline.svg'
import MapIcon from '@/assets/footer/prime_map.svg'
import MapPinIcon from '@/assets/footer/ion_location-outline.svg'
import MessageSquareIcon from '@/assets/footer/famicons_logo-whatsapp.svg'
import SignpostIcon from '@/assets/footer/bi_mailbox.svg'
import SmartphoneIcon from '@/assets/footer/bi_phone.svg'

import { Separator } from '../ui/separator'
import { locationMock, socialsMock } from '@/data/mock'
import { Link } from 'rasengan'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useMenuContext } from '@/hooks/guard/ContextGuard'

const Footer = () => {
	const { t, i18n } = useTranslation()

	const { navlinks } = useMenuContext()

	return (
		<footer className="px-4 sm:px-8 xl:px-[120px] pt-10 pb-5 w-full flex flex-col gap-10 bg-primary">
			<div className="w-full flex flex-col lg:flex-row justify-between gap-5 sm:gap-8 xl:gap-12">
				<div className="space-y-12 md:space-y-5 lg:w-2/6 xl:2/6">
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

				<div className="flex flex-col sm:flex-row justify-between gap-10 lg:w-3/6 xl:w-4/6">
					<div className="text-base space-y-5 text-secondary">
						<p className="font-seravek_medium">
							{t('footer.upperSection.rightSection.services.title')}
						</p>

						<ul className={`flex flex-col gap-2.5 text-on-surface-variant`}>
							{navlinks
								.filter((item) => item.label !== 'services')
								.map((link, index) => (
									<li key={`nav-link-${index}`}>
										<Link
											className="hover:underline capitalize"
											to={`/${i18n.language}${link.href}`}
										>
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
								<Link to={`/${i18n.language}/services/server-security`}>
									{t(
										'footer.upperSection.rightSection.services.options.serverSecurity',
									)}
								</Link>
							</li>
							<li className="text-nowrap">
								<Link to={`/${i18n.language}/services/internet-kit-configuration`}>
									{t(
										'footer.upperSection.rightSection.services.options.internetKitConfiguration',
									)}
								</Link>
							</li>
							<li>
								<Link to={`/${i18n.language}/services/streaming-services`}>
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
						<div className="gap-2 text-secondary grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
							{locationMock.place ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={HouseIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<span className="flex-1">{locationMock.place}</span>
								</div>
							) : null}

							{locationMock.arrondissement ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={SignpostIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<span className="flex-1">{locationMock.arrondissement}</span>
								</div>
							) : null}

							{locationMock.phone ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={SmartphoneIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<a
										href={`tel:${locationMock.phone.replace(/\s/g, '')}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1"
									>
										{locationMock.phone}
									</a>
								</div>
							) : null}

							{locationMock.mail ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={AtSignIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>

									<a
										href={`mailto:${locationMock.mail}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1"
									>
										{locationMock.mail}
									</a>
								</div>
							) : null}

							{locationMock.whatsapp ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={MessageSquareIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<a
										href={`https://wa.me/${locationMock.whatsapp.replace(
											/\D/g,
											'',
										)}?text=${encodeURIComponent('Hello!')}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1"
									>
										{locationMock.phone}
									</a>
								</div>
							) : null}

							{locationMock.website ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={GlobeIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<a
										href={`https://${locationMock.website}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1"
									>
										{locationMock.website}
									</a>
								</div>
							) : null}

							{locationMock.address ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={MapPinIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<span className="flex-1">{locationMock.address}</span>
								</div>
							) : null}

							{locationMock.address ? (
								<div className="flex gap-4 items-start">
									<div className="size-6">
										<Image
											src={MapIcon}
											alt="house icon"
											width={'100%'}
											height={'100%'}
											className="size-full object-contain aspect-auto"
										/>
									</div>
									<span className="flex-1">
										{t(
											'footer.upperSection.rightSection.contactUs.getDirections',
										)}
									</span>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
			<Separator className="w-full bg-outline" />
			<div className="w-full text-secondary text-base flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-2">
				<p>{t('footer.lowerSection.copyright', { year: '2025' })}</p>
				<div className="flex items-center justify-between gap-5">
					<Link to={`/${i18n.language}/privacy-policy`} className="hover:text-white">
						{t('footer.lowerSection.nav.privacyPolicy')}
					</Link>
					<Link
						to={`/${i18n.language}/terms-and-conditions`}
						className="hover:text-white"
					>
						{t('footer.lowerSection.nav.termsOfService')}
					</Link>
					<Link to={`/${i18n.language}/legal-notice`} className="hover:text-white">
						{t('footer.lowerSection.nav.legalNotice')}
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
