import { Button } from '@/components/ui/button'
import { productsMock } from '@/data/mock'
import { cn } from '@/lib/utils'
import Image from '@rasenganjs/image'
import { MoveRightIcon } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductCardProps {
	product: (typeof productsMock)[number]
}

const ProductCard: FC<React.ComponentProps<'article'> & ProductCardProps> = ({
	product,
	className,
	children,
	...props
}) => {
	const { t } = useTranslation()
	return (
		<article
			className={cn(
				'size-full flex flex-col hover:cursor-pointer rounded-[20px] box_shadow_product_card hover:scale-105 transition duration-300 ease-in-out bg-surface',
				className,
			)}
			{...props}
		>
			<div className="w-full h-[250px] bg-slate-300 rounded-t-[20px]">
				<Image
					width={'100%'}
					height={'100%'}
					src={product.images[0]}
					alt={product.name}
					className="size-full object-cover aspect-auto rounded-t-[20px]"
				/>
			</div>
			<div className={`flex flex-col justify-between gap-3 p-4 flex-1`}>
				<div className="space-y-1 font-seravek_medium">
					<p className="text-xl text-on-surface">{product.name}</p>
					{/* <p className="text-base text-on-surface-variant">{product.category}</p> */}
				</div>
				<p className="text-base text-outline">{product.description}</p>

				<div className="flex items-center justify-between">
					<span>{`${product.price} CFA`}</span>
					<span>{`${product.rating} (${product.reviews} reviews)`}</span>
				</div>
				<Button
					// onClick={() => navigate('/products')}
					className="rounded-[8px] w-full h-max !py-2 sm:!py-3 !px-4 gap-5 hover:cursor-pointer border border-secondary text-secondary bg-transparent hover:bg-accent/5"
				>
					<span className="sr-only">Explore Products</span>{' '}
					<span className="text-base font-seravek_medium">{t('moreDetails')}</span>{' '}
					<MoveRightIcon className="size-5 sm:size-6" />
				</Button>
			</div>
		</article>
	)
}

export default ProductCard
