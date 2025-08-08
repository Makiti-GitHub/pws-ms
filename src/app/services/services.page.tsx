import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { ourServicesMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import { CheckIcon, MoveRightIcon } from 'lucide-react'

const Services: PageComponent = () => {
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
					<div className="space-y-8">
						{ourServicesMock.map((ourService, index) => (
							<div
								key={`ourService-${index}`}
								className={`py-5 flex flex-col lg:flex-row gap-4 bg-surface box_shadow_product_card rounded-[20px] h-auto ${
									index % 2 === 0 ? '' : 'lg:flex-row-reverse'
								}`}
							>
								<div className="px-10 flex flex-col items-center justify-between gap-10">
									<div className="w-10">
										<Image
											src={ourService.icon}
											alt="first service"
											width={'100%'}
											height={'100%'}
											className="size-full object-container aspect-auto"
										/>
									</div>

									<div className="w-80 h-[200px] rounded-xl">
										<Image
											src={ourService.image}
											alt={ourService.title}
											width={'100%'}
											height={'100%'}
											className="size-full object-container rounded-xl aspect-auto"
										/>
									</div>
								</div>
								<div className="flex-1 flex flex-col gap-8 items-center px-6 xl:px-[46px]">
									<div className="text-center">
										<h3 className="text-xl font-seravek_medium text-on-surface">
											{ourService.title}
										</h3>
										<p className="text-base text-outline">
											{ourService.description}
										</p>
									</div>
									<div>
										<ul className="space-y-1 flex flex-col items-center">
											{ourService.attributes.map((promise, index2) => (
												<li
													key={`ourService-attribute-${index}-${index2}`}
													className="gap-3 flex items-center"
												>
													<CheckIcon className="text-success size-5 sm:size-6" />
													<span className="text-base text-outline">
														{promise}
													</span>
												</li>
											))}
										</ul>
									</div>

									<p className="font-seravek_bold text-2xl text-center text-secondary">{`Starting from ${ourService.price}`}</p>

									<Button
										type="button"
										onClick={() => navigate(`/services/${ourService.link}`)}
										variant="primary"
										className="w-full !py-3 !px-4 !rounded-xl gap-3 hover:cursor-pointer"
									>
										<span className="font-seravek_medium text-base text-secondary">
											{t(ourService.cta)}
										</span>

										<MoveRightIcon className="size-5 sm:size-6" />
									</Button>
								</div>
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
