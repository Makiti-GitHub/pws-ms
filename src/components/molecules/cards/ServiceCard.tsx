import { Button } from '@/components/ui/button'
import { serverSecurityOffersMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import Image from '@rasenganjs/image'
import { ShoppingCartIcon } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import checkIcon from '@/assets/icons/check.svg'
import { useCartStore } from '@/stores/cartStore'
import { toast } from 'sonner'

interface ServiceCardProps {
	service: (typeof serverSecurityOffersMock)[number]
}

const ServiceCard: FC<React.ComponentProps<'article'> & ServiceCardProps> = ({
	service,
	className,
	children,
	...props
}) => {
	const { t } = useTranslation()
	const addToCart = useCartStore((state) => state.addToCart)
	return (
		<article
			className={cn(
				'relative size-full flex flex-col rounded-[20px] box_shadow_product_card hover:scale-105 transition duration-300 ease-in-out bg-surface',
				className,
			)}
			{...props}
		>
			<div className="w-full h-[200px] rounded-t-[20px]">
				<Image
					width={'100%'}
					height={'100%'}
					src={service.images[0]}
					alt={service.name}
					className="size-full object-contain aspect-auto rounded-t-[20px]"
				/>
			</div>
			<div
				className={`flex z-20 flex-col justify-between gap-6 pt-3 px-5 pb-5 flex-1 shadow-[0_-10px_0px_0rem_white] rounded-t-xl`}
			>
				<div className="space-y-6">
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<div
								className="size-[44px] rounded-full flex justify-center items-center"
								style={{ backgroundColor: service.color }}
							>
								<div className="size-6">
									<Image
										src={service.icon}
										alt="Service icon"
										width={'100%'}
										height={'100%'}
										className="size-full object-contain aspect-auto"
									/>
								</div>
							</div>
							<p className="text-xl text-on-surface font-seravek_medium">
								{service.name}
							</p>
						</div>
						<p className="text-base text-outline">{service.description}</p>
					</div>

					<ul className="space-y-3">
						{service.promises.map((_, index) => (
							<li
								key={`${service.name}-promise-${index}`}
								className="flex gap-2 items-center"
							>
								<div className="size-5">
									<Image
										src={checkIcon}
										alt="Check icon"
										width={'100%'}
										height={'100%'}
										className="size-full object-contain aspect-auto"
									/>
								</div>
								<span className="text-sm text-on-surface">{t(_)}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="space-y-3.5">
					<p className="text-2xl text-center font-seravek_bold text-secondary">{`${
						service.price
					} CFA/${t('month')}`}</p>
					<div className="w-full flex flex-col lg:flex-row gap-2 sm:gap-4 items-center">
						<Button
							onClick={() => {
								addToCart({
									creationDate: service.creationDate,
									id: service.id,
									// category: service.category,
									quantity: 1,
									price: service.price,
									name: service.name,
									rating: 5,
									reviews: 0,
									images: service.images,
									description: service.description,
								})

								toast.success('Service added to cart')
							}}
							variant={'primary'}
							className="rounded-[8px] w-full flex-1 h-max !py-2 sm:!py-3 !px-4 gap-5 hover:cursor-pointer border border-secondary hover:bg-accent/5"
						>
							<span className="sr-only">Add to cart</span>{' '}
							<span className="text-base font-seravek_medium">{t('addToCart')}</span>{' '}
							<ShoppingCartIcon className="size-5 sm:size-6" />
						</Button>
					</div>
				</div>
			</div>
		</article>
	)
}

export default ServiceCard
