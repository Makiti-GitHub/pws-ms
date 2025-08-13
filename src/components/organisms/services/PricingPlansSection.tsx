import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { internetKitConfigurationPlansMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import { CheckIcon, ShoppingCartIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import starlinkLogo from '@/assets/partners/starlink.svg'
import { useCartStore } from '@/stores/cartStore'
import serverSecurityImg from '@/assets/ourServices/server_security.png'
import { toast } from 'sonner'

const PricingPlansSection = () => {
	const { t } = useTranslation()

	const addToCart = useCartStore((state) => state.addToCart)
	return (
		<section className="py-8 flex flex-col items-center gap-5">
			<div className="flex items-center gap-2">
				<div className="w-[164px] h-[80px]">
					<Image
						src={starlinkLogo}
						alt={'Numeric shield image'}
						width={'100%'}
						height={'100%'}
						className="size-full object-container rounded-xl aspect-auto"
					/>
				</div>

				<h2 className="font-seravek_medium text-on-surface text-2xl">
					{t('pages.services.internetKitConfiguration.sections.ourStarlinkPlans.title')}
				</h2>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 lg:w-full">
				{internetKitConfigurationPlansMock.map((plan, index) => (
					<article
						key={`plan-${index}`}
						className={`border-t-4 ${
							plan.isBest ? 'border-primary' : 'border-secondary'
						} rounded-xl max-w-[460px] p-3 flex flex-col gap-16 hover:scale-105 transition-transform duration-300 ease-in-out justify-between drop_show_pricing_plan_card`}
					>
						<div className="flex flex-col gap-2.5">
							<div className="space-y-2">
								<div className="flex items-center justify-between gap-4">
									<h3 className="font-seravek_medium text-2xl text-on-surface">
										{t(
											`pages.services.internetKitConfiguration.sections.ourStarlinkPlans.${plan.transkey}.title`,
										)}
									</h3>
									{plan.isBest ? (
										<span className="rounded-sm bg-primary text-secondary text-xs font-seravek_medium py-1 px-2">
											{t('bestOffer')}
										</span>
									) : null}
								</div>
								<p className="text-[17px] text-outline">
									{t(
										`pages.services.internetKitConfiguration.sections.ourStarlinkPlans.${plan.transkey}.description`,
									)}
								</p>
							</div>
							<Separator className="w-full h-0.5 bg-outline-variant" />
							<ul className="space-y-2">
								{plan.promises.map((_, index2) => (
									<li
										key={`promise-${index}-${index2}`}
										className="gap-2 flex items-center"
									>
										<CheckIcon className="text-success size-4" />
										<span className="text-sm text-outline">
											{t(
												`pages.services.internetKitConfiguration.sections.ourStarlinkPlans.${
													plan.transkey
												}.promises.promise${index2 + 1}`,
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="space-y-3">
							<p className="font-seravek_bold text-2xl text-center text-secondary">
								{plan.price} CFA
							</p>

							<Button
								onClick={() => {
									addToCart({
										creationDate: '2025-08-08',
										id: `Plan ${index}`,
										// category: service.category,
										quantity: 1,
										price: plan.price,
										name: `${t(
											'pages.services.internetKitConfiguration.title',
										)} - ${t(
											`pages.services.internetKitConfiguration.sections.ourStarlinkPlans.${plan.transkey}.title`,
										)}`,
										rating: 5,
										reviews: 0,
										images: [serverSecurityImg],
										description: plan.description,
									})

									toast.success('Plan added to cart')
								}}
								variant={'primary'}
								className="rounded-lg w-full flex-1 h-max !py-2 sm:!py-3 !px-4 gap-5 hover:cursor-pointer border border-secondary hover:bg-accent/5"
							>
								<span className="sr-only">Add to cart</span>{' '}
								<span className="text-base font-seravek_medium">
									{t('addToCart')}
								</span>{' '}
								<ShoppingCartIcon className="size-5 sm:size-6" />
							</Button>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default PricingPlansSection
