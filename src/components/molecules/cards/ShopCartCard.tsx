import ProductTag from '@/components/atoms/tag/ProductTag'
import { Button } from '@/components/ui/button'
import { CartItem, useCartStore } from '@/stores/cartStore'
import Image from '@rasenganjs/image'
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ShopCartCardProps {
	cartItem: CartItem
}

const ShopCartCard = ({ cartItem }: ShopCartCardProps) => {
	const { t } = useTranslation()
	const { updateQuantity, removeFromCart, getItemTotalPrice } = useCartStore()
	return (
		<div className="border-[0.5px] p-4 border-outline-variant space-y-2 rounded-xl">
			<div className="flex flex-col gap-8 lg:flex-row justify-between">
				<div className="space-x-4 flex">
					<div className="size-[90px] rounded-sm drop_shadow_cart_item_image">
						<Image
							src={cartItem.images[0]}
							width={90}
							height={90}
							alt="cart item image"
							className="size-full aspect-auto object-contain rounded-sm"
						/>
					</div>

					<div className="space-y-2 flex-1">
						<p className="font-seravek_medium text-2xl text-on-surface">
							{cartItem.name}
						</p>

						<p>{`${cartItem.price} CFA`}</p>
						{cartItem.tags ? (
							<div className="flex items-center gap-2">
								{cartItem.tags.map((tag, index) => (
									<ProductTag
										key={`product-tag-${cartItem.id}-${index}`}
										className="text-xs !p-1"
										variant={tag}
									/>
								))}
							</div>
						) : null}
					</div>
				</div>
				<div className="flex flex-row sm:items-center justify-between gap-3 lg:gap-6">
					<div className="flex items-center gap-8 w-full">
						<Button
							variant={'ghost'}
							disabled={cartItem.quantity < 1}
							onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
							className="!p-2.5 size-[44px] hover:cursor-pointer rounded-sm border-[0.5px] border-outline-variant"
						>
							<MinusIcon className="size-6" />
						</Button>

						<span className="text-lg font-seravek_medium text-on-surface">
							{cartItem.quantity}
						</span>

						<Button
							variant={'ghost'}
							onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
							className="!p-2.5 size-[44px] hover:cursor-pointer rounded-sm border-[0.5px] border-outline-variant"
						>
							<PlusIcon className="size-6" />
						</Button>
					</div>
					<div className="flex sm:flex-col gap-2 items-center sm:items-start">
						{/* <p className="text-lg lg:text-2xl text-center lg:text-left font-seravek_medium text-on-surface whitespace-nowrap">
							{`${getItemTotalPrice(cartItem.id)} CFA`}
						</p> */}

						<Button
							variant={'ghost'}
							onClick={() => removeFromCart(cartItem.id)}
							className="!p-2.5 sm:w-full hover:cursor-pointer rounded-sm border-[0.5px] border-red-500 hover:bg-red-500 group"
						>
							<Trash2Icon className="size-4 text-red-500 group-hover:text-white" />
							<span className="text-red-500 group-hover:text-white">
								{t('remove')}
							</span>
						</Button>
					</div>
				</div>
			</div>
			<p className="flex font-seravek_medium text-lg text-on-surface items-center justify-end gap-1 w-full">
				<span>
					{t('pages.shoppingCart.sections.orderSummary.subtotal')}{' '}
					{`(${cartItem.quantity} ${t('items')})`}:
				</span>
				<span className="text-lg lg:text-2xl text-center lg:text-left font-seravek_medium text-on-surface whitespace-nowrap">
					{`${getItemTotalPrice(cartItem.id)} CFA`}
				</span>
			</p>
		</div>
	)
}

export default ShopCartCard
