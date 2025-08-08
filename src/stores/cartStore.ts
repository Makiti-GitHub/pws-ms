import Product from '@/entities/product.entity'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem extends Product {
	quantity: number
}

interface CartStore {
	items: CartItem[]
	addToCart: (product: Product) => void
	removeFromCart: (productId: string) => void
	updateQuantity: (productId: string, quantity: number) => void
	clearCart: () => void
	getTotalItems: () => number
	getTotalPrice: () => number
	getItemTotalPrice: (productId: string) => number
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],

			addToCart: (product: Product) => {
				set((state) => {
					const existingItem = state.items.find((item) => item.id === product.id)

					if (existingItem) {
						return {
							items: state.items.map((item) =>
								item.id === product.id
									? { ...item, quantity: item.quantity + 1 }
									: item,
							),
						}
					}

					return {
						items: [...state.items, { ...product, quantity: 1 }],
					}
				})
			},

			removeFromCart: (productId: string) => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== productId),
				}))
			},

			updateQuantity: (productId: string, quantity: number) => {
				if (quantity <= 0) {
					get().removeFromCart(productId)
					return
				}

				set((state) => ({
					items: state.items.map((item) =>
						item.id === productId ? { ...item, quantity } : item,
					),
				}))
			},

			clearCart: () => {
				set({ items: [] })
			},

			getTotalItems: () => {
				const { items } = get()
				return items.reduce((total, item) => total + item.quantity, 0)
			},

			getTotalPrice: () => {
				const { items } = get()
				return items.reduce((total, item) => total + item.price * item.quantity, 0)
			},

			getItemTotalPrice: (productId: string) => {
				const { items } = get()
				const item = items.find((item) => item.id === productId)
				return item ? item.price * item.quantity : 0
			},
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
		},
	),
)
