import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'
// import { Button } from '@/components/ui/button'
// import { ourServicesMock } from '@/data/mock'
// import Image from '@rasenganjs/image'
// import { CheckIcon, MoveRightIcon } from 'lucide-react'

const InternetKitConfiguration: PageComponent = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<main className="flex flex-col w-screen gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
			<section id="ourServices" className="flex flex-col items-center gap-8 pb-16">
				<div className="space-y-8">
					<SectionHeader
						title={t('pages.home.sections.ourServices.title')}
						subTitle={t('pages.home.sections.ourServices.subtitle')}
					/>
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
