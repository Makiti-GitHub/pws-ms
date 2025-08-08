import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { streamingServicesOffersMock } from '@/data/mock'
import { ArrowUpRightIcon } from 'lucide-react'
import ServiceCard from '@/components/molecules/cards/ServiceCard'

const StreamingServices: PageComponent = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<main className="flex flex-col w-screen gap-8 px-4 sm:px-8 md:px-11 lg:px-[60px] xl:px-[120px] pt-8 relative">
			<section id="ourServices" className="flex flex-col gap-8 pb-16">
				<SectionHeader
					title={t('pages.services.streamingServices.title')}
					subTitle={t('pages.services.streamingServices.subtitle')}
				/>
				<div className="space-y-8">
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6">
						{streamingServicesOffersMock.map((service, index) => (
							<ServiceCard key={`service-${index}`} service={service} />
						))}
					</div>
				</div>
				<div className="space-y-3 flex flex-col items-center">
					<p className="text-on-surface-variant text-xl text-center">
						{t('pages.services.streamingServices.sections.callToAction.title')}
					</p>

					<Button
						type="button"
						onClick={() => navigate('/contact-us')}
						variant={'primary'}
						className="rounded-[40px] h-max gap-2 !py-2 !px-4 sm:!py-4 md:!px-8 hover:cursor-pointer"
					>
						<span className="sr-only">Contact us now</span>
						<span className="text-xl md:text-2xl font-seravek_medium text-secondary">
							{t('pages.services.streamingServices.sections.callToAction.cta')}
						</span>
						<ArrowUpRightIcon className="text-secondary size-5 sm:size-6" />
					</Button>
				</div>
			</section>
		</main>
	)
}

StreamingServices.path = '/streaming-services'
StreamingServices.metadata = {
	title: 'Streaming services',
	description: 'Streaming services page',
}

export default StreamingServices
