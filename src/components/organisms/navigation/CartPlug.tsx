import { Button } from '@/components/ui/button'
import { useCartStore } from '@/stores/cartStore'
import { ShoppingCartIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'

const CartPlug = () => {
	const navigate = useNavigate()
	const totalItems = useCartStore((state) => state.getTotalItems())

	return (
		<div className="relative flex items-center justify-center">
			{totalItems > 0 ? (
				<div className="absolute right-2 top-0">
					<div className="relative">
						{/* <span className="absolute -right-1 -top-1 size-6 animate-ping rounded-full bg-primary opacity-75" /> */}
						<span className="absolute -right-1 -top-1 flex size-5 text-white items-center justify-center rounded-full bg-primary font-seravek_bold text-[10px]">
							{totalItems > 99 ? '99+' : totalItems}
						</span>
					</div>
				</div>
			) : null}
			<Button
				type="button"
				onClick={() => navigate('/shopping-cart')}
				variant={'ghost'}
				className="w-max h-max p-1 rounded-xl hover:cursor-pointer"
			>
				<ShoppingCartIcon className="size-6 text-on-surface-variant" />
			</Button>
		</div>
	)
}

export default CartPlug
