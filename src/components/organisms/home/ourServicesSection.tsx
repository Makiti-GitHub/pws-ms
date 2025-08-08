import SectionHeader from '@/components/molecules/SectionHeader'
import { ourServicesMock } from '@/data/mock'
import { useTranslation } from 'react-i18next'
import OurServiceItem from '../services/OurServiceItem'

const OurServicesSection = () => {
	const { t } = useTranslation()
	return (
		<section
			id="ourServices"
			className="flex flex-col w-screen items-center gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pb-16"
		>
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
	)
}

export default OurServicesSection
