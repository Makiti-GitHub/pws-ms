import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'
import serverSecurityImg from '@/assets/ourServices/server_security.png'
import Image from '@rasenganjs/image'
import AnimatedCounter from '@/components/atoms/animations/AnimatedCounter'
import { internetKitConfigurationStatsMock } from '@/data/mock'
import { ArrowUpRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FaqSection from '@/components/organisms/services/FaqSection'
import PricingPlansSection from '@/components/organisms/services/PricingPlansSection'
import InstallationProcessSection from '@/components/organisms/services/InstallationProcessSection'

const InternetKitConfiguration: PageComponent = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<main className="flex flex-col w-screen gap-8 px-4 sm:px-8 md:px-11 lg:px-[60px] xl:px-[120px] pt-8 relative">
			<section id="ourServices" className="flex flex-col gap-8 pb-16">
				<div className="space-y-8">
					<SectionHeader
						title={t('pages.services.internetKitConfiguration.title')}
						subTitle={t('pages.services.internetKitConfiguration.subtitle')}
					/>

					<div className="box_shadow_security_service_card flex flex-col md:flex-row bg-surface py-5 gap-10 rounded-[20px]">
						<div className="p-4 flex flex-col flex-1 gap-4">
							<h2 className="font-seravek_medium text-2xl text-on-surface">
								{t(
									'pages.services.internetKitConfiguration.sections.whyChooseStarlink.title',
								)}
							</h2>
							<p className="text-outline text-xl">
								{t(
									'pages.services.internetKitConfiguration.sections.whyChooseStarlink.description',
								)}
							</p>
							<div className="grid grid-cols-2 w-max gap-12">
								{internetKitConfigurationStatsMock.map((statistic, index) => (
									<div
										key={`hero-record-stats-1-${index}`}
										className="flex flex-1 flex-col tracking-normal font-normal gap-1"
									>
										<p className="text-[40px] text-primary">
											<span className="text-primary">
												<AnimatedCounter from={0} to={statistic.count} />
											</span>
											<span>{statistic.suffix}</span>
										</p>
										<p className="text-lg whitespace-nowrap text-on-surface-variant">
											{t(
												`pages.services.internetKitConfiguration.sections.whyChooseStarlink.stats.${statistic.transkey}`,
											)}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className="md:w-[480px] h-[366px] pr-4">
							<Image
								src={serverSecurityImg}
								alt={'Numeric shield image'}
								width={'100%'}
								height={'100%'}
								className="size-full object-container rounded-xl aspect-auto"
							/>
						</div>
					</div>
				</div>
				{/* == Pricing plans section == */}
				<PricingPlansSection />

				{/* == Installation Process section == */}
				<InstallationProcessSection />

				{/* == FAQ section == */}
				<FaqSection />

				<div className="space-y-3 flex flex-col items-center">
					<p className="text-on-surface-variant text-xl text-center">
						{t('pages.services.internetKitConfiguration.sections.callToAction.title')}
					</p>

					<Button
						type="button"
						onClick={() => navigate('/contact-us')}
						variant={'primary'}
						className="rounded-[40px] h-max gap-2 !py-2 !px-4 sm:!py-4 md:!px-8 hover:cursor-pointer"
					>
						<span className="sr-only">Contact us now</span>
						<span className="text-xl md:text-2xl font-seravek_medium text-secondary">
							{t('pages.services.internetKitConfiguration.sections.callToAction.cta')}
						</span>
						<ArrowUpRightIcon className="text-secondary size-5 sm:size-6" />
					</Button>
				</div>
			</section>
		</main>
	)
}

InternetKitConfiguration.path = '/internet-kit-configuration'
InternetKitConfiguration.metadata = {
	title: 'Internet kit configuration',
	description: 'Internet kit configuration page',
}

export default InternetKitConfiguration
