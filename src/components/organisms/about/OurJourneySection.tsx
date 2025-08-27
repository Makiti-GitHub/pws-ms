import SectionHeader from '@/components/molecules/SectionHeader'
import { journeyListMock } from '@/data/mock'
import { CalendarIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const OurJourneySection = () => {
	const { t } = useTranslation()
	return (
		<section id="timeline" className="flex flex-col items-center gap-8  pb-16">
			<SectionHeader
				title={t('pages.about.sections.ourJourney.title')}
				subTitle={t('pages.about.sections.ourJourney.subtitle')}
			/>

			<div>
				{journeyListMock.map((_, index) => (
					<div
						key={`timeline-item-${index}`}
						className="flex items-stretch gap-3 sm:gap-6 lg:gap-10 xl:gap-[60px]"
					>
						<div className={`flex flex-col items-center justify-start`}>
							{index == 0 ? <div className="h-full" /> : null}
							{index !== 0 ? (
								<div className="h-full border-l-2 border-secondary" />
							) : null}
							<div className="aspect-[1] size-16 lg:size-20 xl:size-[100px] rounded-full border-2 border-secondary bg-secondary flex justify-center items-center">
								<CalendarIcon className="size-5 sm:size-7 text-primary" />
							</div>
							{index !== journeyListMock.length - 1 ? (
								<div className="h-full border-l-2 border-secondary" />
							) : null}
							{index == journeyListMock.length - 1 ? (
								<div className="h-full" />
							) : null}
						</div>

						<div className="py-5">
							<div className="p-5 lg:p-7 xl:p-10 box_shadow_timeline_card bg-white rounded-lg">
								<div className="space-y-3 lg:space-y-6">
									<div className="flex items-center gap-2.5">
										<span className="border-[0.5px] rounded-lg border-outline-variant px-3 py-1">
											{t(
												`pages.about.sections.ourJourney.activities.activity${
													index + 1
												}.date`,
											)}
										</span>
										<span className="text-on-surface font-seravek_medium text-2xl lg:text-3xl xl:text-4xl">
											{t(
												`pages.about.sections.ourJourney.activities.activity${
													index + 1
												}.title`,
											)}
										</span>
									</div>
									<p className="text-lg lg:text-xl xl:text-2xl text-on-surface-variant leading-5 lg:leading-7 xl:leading-10">
										{t(
											`pages.about.sections.ourJourney.activities.activity${
												index + 1
											}.desc`,
										)}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default OurJourneySection
