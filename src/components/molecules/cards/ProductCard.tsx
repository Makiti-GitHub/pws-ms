import ProductTag from '@/components/atoms/tag/ProductTag'
import { Button } from '@/components/ui/button'
import Product from '@/entities/product.entity'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores/cartStore'
import Image from '@rasenganjs/image'
import { MoveRightIcon, ShoppingCartIcon } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

interface ProductCardProps {
	product: Product
}

const ProductCard: FC<React.ComponentProps<'article'> & ProductCardProps> = ({
	product,
	className,
	children,
	...props
}) => {
	const { t } = useTranslation()
	const addToCart = useCartStore((state) => state.addToCart)
	return (
		<article
			className={cn(
				'relative size-full flex flex-col hover:cursor-pointer rounded-[20px] box_shadow_product_card hover:scale-105 transition duration-300 ease-in-out bg-surface',
				className,
			)}
			{...props}
		>
			{product.tags ? (
				<div className="absolute top-2 right-2 flex items-center gap-2">
					{product.tags.map((tag, index) => (
						<ProductTag
							key={`product-tag-${product.id}-${index}`}
							className="absolute top-4 right-4 z-20"
							variant={tag}
						/>
					))}
				</div>
			) : null}
			<div className="w-full max-w-[480px] h-[250px] rounded-t-[20px]">
				<Image
					width={'100%'}
					height={'100%'}
					src={product.images[0]}
					alt={product.name}
					className="size-full object-contain aspect-auto rounded-t-[20px]"
				/>
			</div>
			<div className={`flex flex-col justify-between gap-3 p-4 flex-1 w-full`}>
				<div className="space-y-1 font-seravek_medium">
					<p className="text-xl text-on-surface">{product.name}</p>
				</div>
				<p className="text-base text-outline">{product.description}</p>

				<div className="flex items-center justify-between">
					<span className="text-2xl font-seravek_bold text-secondary">{`${product.price} CFA`}</span>
					<span>{`${product.rating} (${product.reviews} reviews)`}</span>
				</div>
				<div className="w-full flex md:flex-row gap-2 lg:gap-4 items-center">
					<Button className="rounded-[8px] w-full lg:w-auto flex-1 h-max !py-2 sm:!py-3 !px-0 gap-5 lg:gap-3 2xl:gap-5 hover:cursor-pointer border border-secondary text-secondary bg-transparent hover:bg-accent/5">
						<span className="sr-only">More details</span>{' '}
						<span className="text-base font-seravek_medium">{t('moreDetails')}</span>{' '}
						<MoveRightIcon className="size-5 sm:size-6" />
					</Button>
					<Button
						type="button"
						onClick={() => {
							addToCart(product)
							toast.success('Product added to cart')
						}}
						variant={'primary'}
						className="rounded-[8px] w-full lg:w-auto flex-1 h-max !py-2 sm:!py-3 !px-0 gap-5 lg:gap-3 2xl:gap-5 hover:cursor-pointer border border-secondary hover:bg-accent/5"
					>
						<span className="sr-only">Add to cart</span>{' '}
						<span className="text-base font-seravek_medium">{t('addToCart')}</span>{' '}
						<ShoppingCartIcon className="size-5 sm:size-6" />
					</Button>
				</div>
			</div>
		</article>
	)
}

export default ProductCard
