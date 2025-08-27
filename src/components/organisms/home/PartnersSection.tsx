import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

/* == Partners section == */
import galaSecure from '@/assets/partners/gala_secure.svg'
import iconoirInternet from '@/assets/partners/iconoir_internet.svg'
import icOutlineLiveTv from '@/assets/partners/ic_outline-live-tv.svg'
import Image from '@rasenganjs/image'
import { PartnersCategoryType, partnersMock } from '@/data/mock'

const PartnersSection = () => {
	const { t } = useTranslation()
	const [selectedTab, setSelectedTab] = useState<PartnersCategoryType>('serverSecurity')
	return (
		<section
			id="partners"
			className="flex flex-col w-screen items-center gap-8 px-4 sm:px-8 lg:px-[120px] py-16"
		>
			<div className="w-full p-2.5 space-y-5 rounded-xl box_shadow">
				<h2 className="text-center font-seravek_bold text-[28px] text-secondary">
					{t('pages.home.sections.partners.title')}
				</h2>

				<div className="space-y-4">
					<div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 lg:gap-14">
						<Button
							onClick={() => setSelectedTab('serverSecurity')}
							className={`h-max w-full md:w-auto !py-2 !px-4 gap-3 rounded-[20px] hover:cursor-pointer ${
								selectedTab === 'serverSecurity'
									? 'bg-primary'
									: 'bg-surface-container'
							}`}
						>
							<span className="size-6">
								<Image
									src={galaSecure}
									alt="Gala Secure"
									width={'100%'}
									height={'100%'}
									className="size-full object-contain aspect-auto"
								/>
							</span>
							<span className="text-secondary text-base font-seravek_medium">
								{t('pages.home.sections.partners.tabs.serverSecurity')}
							</span>
						</Button>
						<Button
							onClick={() => setSelectedTab('internetConfiguration')}
							className={`h-max w-full md:w-auto !py-2 !px-4 gap-3 rounded-[20px] hover:cursor-pointer ${
								selectedTab === 'internetConfiguration'
									? 'bg-primary'
									: 'bg-surface-container'
							}`}
						>
							<span className="size-6">
								<Image
									src={iconoirInternet}
									alt="Internet"
									width={'100%'}
									height={'100%'}
									className="size-full object-contain aspect-auto"
								/>
							</span>
							<span className="text-secondary text-base font-seravek_medium">
								{t('pages.home.sections.partners.tabs.internetConfiguration')}
							</span>
						</Button>
						<Button
							onClick={() => setSelectedTab('streamingServices')}
							className={`h-max w-full md:w-auto !py-2 !px-4 gap-3 rounded-[20px] hover:cursor-pointer ${
								selectedTab === 'streamingServices'
									? 'bg-primary'
									: 'bg-surface-container'
							}`}
						>
							<span className="size-6">
								<Image
									src={icOutlineLiveTv}
									alt="Live TV"
									width={'100%'}
									height={'100%'}
									className="size-full object-contain aspect-auto"
								/>
							</span>
							<span className="text-secondary text-base font-seravek_medium">
								{t('pages.home.sections.partners.tabs.streamingServices')}
							</span>
						</Button>
					</div>

					<div className="grid gap-8 grid-cols-4 py-5 px-8 lg:px-[200px]">
						{partnersMock[selectedTab].map((partner, index) => (
							<div
								key={`partner-${index}`}
								className="col-span-1 w-full max-h-[46px] flex justify-center"
							>
								<img
									src={partner}
									alt="Partner"
									className="w-auto max-w-full h-full max-h-[46px] object-contain aspect-auto"
								/>

								{/* <Image
									src={partner}
									alt="Partner"
									className="w-auto max-w-full h-full max-h-[46px] object-contain aspect-auto"
								/> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PartnersSection
