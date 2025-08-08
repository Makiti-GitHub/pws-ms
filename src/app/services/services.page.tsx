import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent } from 'rasengan'
import { useTranslation } from 'react-i18next'
import { ourServicesMock } from '@/data/mock'
import OurServiceItem from '@/components/organisms/services/OurServiceItem'

const Services: PageComponent = () => {
	const { t } = useTranslation()

	return (
		<main className="flex flex-col w-screen gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
			<section id="ourServices" className="flex flex-col items-center gap-8 pb-16">
				<div className="space-y-8">
					<SectionHeader
						title={t('pages.home.sections.ourServices.title')}
						subTitle={t('pages.home.sections.ourServices.subtitle')}
					/>
					<div className="space-y-8">
						{ourServicesMock.map((ourService, index) => (
							<div
								key={`ourService-${index}`}
								className={`py-5 flex flex-col lg:flex-row gap-4 bg-surface box_shadow_product_card rounded-[20px] h-auto ${
									index % 2 === 0 ? '' : 'lg:flex-row-reverse'
								}`}
							>
								<OurServiceItem ourService={ourService} index={index} />
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

Services.path = '/:locale?/services'
Services.metadata = {
	title: 'Services',
	description: 'Services page',
}

export default Services
