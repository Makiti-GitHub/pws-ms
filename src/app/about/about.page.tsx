import SectionHeader from '@/components/molecules/SectionHeader'
import OurJourneySection from '@/components/organisms/about/OurJourneySection'
import Image from '@rasenganjs/image'
import { PageComponent } from 'rasengan'
import { useTranslation } from 'react-i18next'
import bannerImage from '@/assets/ourJourney/image.png'
import AnimatedCounter from '@/components/atoms/animations/AnimatedCounter'

const About: PageComponent = () => {
	const { t } = useTranslation()

	return (
		<main className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] 2xl:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative">
				<SectionHeader
					title={t('pages.about.title')}
					subTitle={t('pages.about.subtitle')}
				/>

				<div>
					<div className="w-full grid xl:grid-cols-8 gap-[52px] pt-[61px] pb-[45px]">
						<div className="flex flex-col gap-5 xl:col-span-3 2xl:col-span-3">
							<div className="space-y-2">
								<h2 className="font-seravek_bold text-on-surface w-max text-3xl sm:text-[32px] sm:leading-16 xl:leading-20">
									{t('pages.about.sections.ourMission.title')}
								</h2>
								<div className="space-y-8 text-base text-on-surface-variant sm:text-xl leading-normal">
									<p>{t('pages.about.sections.ourMission.p1')}</p>
									<p>{t('pages.about.sections.ourMission.p2')}</p>
								</div>
							</div>

							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
								<div className="space-y-1">
									<p className="text-[40px] text-primary">
										<AnimatedCounter from={0} to={50} />
										<span>+</span>
									</p>
									<p className="text-lg text-on-surface-variant">
										{t('pages.about.sections.ourMission.stats.happyClients')}
									</p>
								</div>

								<div className="space-y-1">
									<p className="text-[40px] text-primary">
										<AnimatedCounter from={0} to={5} />
										<span>+</span>
									</p>
									<p className="text-lg text-on-surface-variant">
										{t('pages.about.sections.ourMission.stats.activeYears')}
									</p>
								</div>

								<div className="space-y-1">
									<p className="text-[40px] text-primary">
										<AnimatedCounter from={0} to={24} />
										<span>/</span>
										<AnimatedCounter from={0} to={7} />
									</p>
									<p className="text-lg text-on-surface-variant">
										{t(
											'pages.about.sections.ourMission.stats.supportAvailable',
										)}
									</p>
								</div>
							</div>
						</div>
						<div className="xl:col-span-4 2xl:col-span-5 max-h-[510px]">
							<Image
								src={bannerImage}
								alt={'Joint hands image'}
								width={'100%'}
								height={'100%'}
								className="size-full aspect-auto object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>

				<OurJourneySection />
			</div>
		</main>
	)
}

About.path = '/:locale?/about'
About.metadata = {
	title: 'About',
	description: 'About page',
}

export default About
