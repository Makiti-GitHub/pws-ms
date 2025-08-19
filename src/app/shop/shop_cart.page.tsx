import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { PageComponent } from 'rasengan'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import z from 'zod'
import { useCartStore } from '@/stores/cartStore'
import ShopCartCard from '@/components/molecules/cards/ShopCartCard'
import { PhoneInput } from '@/components/atoms/input/phone-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Trash2Icon } from 'lucide-react'

// Define schemas for each step
const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.email(),
	companyName: z.string(),
	phoneNumber: z.string().refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
	address: z.string(),
})
type FullFormData = z.infer<typeof formSchema>

const ShoppingCart: PageComponent = () => {
	const { t } = useTranslation()
	const { items, getTotalPrice, getItemTotalPrice, clearCart } = useCartStore()

	const form = useForm<FullFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			companyName: '',
			phoneNumber: '',
			address: '',
		},
	})

	const onSubmit = (data: FullFormData) => {
		console.log('Form submitted:', data)
		// alert('Form submitted successfully!')

		const project = '+237 680 09 54 53'

		let text = `${t('pages.shoppingCart.sections.customerInformation.title')} :\n\n`

		text += `${t('pages.shoppingCart.sections.customerInformation.form.fields.name.label')} : ${
			data.name
		}\n\n`

		text += `${t(
			'pages.shoppingCart.sections.customerInformation.form.fields.email.label',
		)} : ${data.email}\n\n`

		text += `${t(
			'pages.shoppingCart.sections.customerInformation.form.fields.companyName.label',
		)} : ${data.companyName}\n\n`

		text += `${t(
			'pages.shoppingCart.sections.customerInformation.form.fields.phoneNumber.label',
		)} : ${data.phoneNumber}\n\n`

		text += `${t(
			'pages.shoppingCart.sections.customerInformation.form.fields.address.label',
		)} : ${data.address}\n\n`

		text += `Je souhaite commander :\n\n`

		items.forEach((item, index) => {
			text += `${index + 1}. ${item.name} (${item.price
				.toString()
				.toCommaSeperatedDigits()} FCFA) x ${item.quantity} : ${getItemTotalPrice(item.id)
				.toString()
				.toCommaSeperatedDigits()} FCFA\n\n`
		})

		text += `Prix total : ${getTotalPrice().toString().toCommaSeperatedDigits()} FCFA\n`

		// text += `\n`

		// Create WhatsApp URL with phone number and optional message
		// Format phone number - remove any non-digit characters
		const formattedNumber = project?.replace(/\D/g, '')
		const encodedMessage = encodeURIComponent(text)
		const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

		console.log(whatsappUrl)

		// Open WhatsApp in a new tab
		window.open(whatsappUrl, '_blank')
	}

	return (
		<main className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative pb-12 max-w-[925px] w-full mx-auto">
				<SectionHeader
					title={t('pages.shoppingCart.title')}
					subTitle={t('pages.shoppingCart.subtitle')}
				/>

				<section className="space-y-8">
					<section className="p-5 rounded-xl border-[0.5px] border-outline-variant space-y-6">
						<div className="flex items-center justify-between gap-4">
							<p className="font-seravek_medium text-xl text-on-surface-variant">
								{t('pages.shoppingCart.sections.cartItems.title')}
							</p>
							{items.length > 0 ? (
								<Button
									variant={'ghost'}
									onClick={() => clearCart()}
									className="!p-2.5 hover:cursor-pointer rounded-sm border-[0.5px] border-red-500 hover:bg-red-500 group"
								>
									<Trash2Icon className="size-4 text-red-500 group-hover:text-white" />
									<span className="text-red-500 group-hover:text-white">
										{t('clear')}
									</span>
								</Button>
							) : null}
						</div>

						<div className="flex flex-col gap-2">
							{items.length > 0 ? (
								items.map((item) => <ShopCartCard key={item.id} cartItem={item} />)
							) : (
								<p>{t('pages.shoppingCart.sections.cartItems.emptyCart')}</p>
							)}
						</div>
					</section>
					<section className="p-5 rounded-xl border-[0.5px] border-outline-variant space-y-6">
						<div className="space-y-6">
							<p className="font-seravek_medium text-xl text-on-surface-variant">
								{t('pages.shoppingCart.sections.orderSummary.title')}
							</p>

							<div className="space-y-4 border-b-[0.75px] border--outline-variant pb-4">
								<p className="flex font-seravek_medium text-lg text-on-surface items-center justify-between gap-6 w-full">
									<span>
										{t('pages.shoppingCart.sections.orderSummary.subtotal')}:
									</span>
									<span>{`${getTotalPrice()
										.toString()
										.toCommaSeperatedDigits()} CFA`}</span>
								</p>
								<p className="flex font-seravek_medium text-lg text-on-surface items-center justify-between gap-6 w-full">
									<span>
										{t('pages.shoppingCart.sections.orderSummary.shipping')}:
									</span>
									<span>{t('free')}</span>
								</p>
							</div>
						</div>
						<p className="flex font-seravek_medium text-on-surface items-center justify-between gap-6 w-full">
							<span className="text-xl">{t('total')}</span>
							<span className="text-2xl">{`${getTotalPrice()
								.toString()
								.toCommaSeperatedDigits()} CFA`}</span>
						</p>
					</section>
					<section className="p-5 rounded-xl border-[0.5px] border-outline-variant space-y-6">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="flex flex-col gap-4 sm:gap-6 rounded-xl"
							>
								<h3 className="font-seravek_medium text-xl text-on-surface-variant">
									{t('pages.shoppingCart.sections.customerInformation.title')}
								</h3>

								<div className="space-y-4">
									<div className="flex flex-col sm:flex-row gap-4">
										<FormField
											control={form.control}
											name="name"
											render={({ field }) => (
												<FormItem className="sm:w-1/2 flex flex-col gap-2 items-start">
													<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
														{t(
															'pages.shoppingCart.sections.customerInformation.form.fields.name.label',
														)}
													</FormLabel>
													<FormControl>
														<Input
															placeholder={t(
																'pages.shoppingCart.sections.customerInformation.form.fields.name.placeholder',
															)}
															className="bg-surface-container px-3 py-2.5"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem className="sm:w-1/2 flex flex-col gap-2 items-start">
													<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
														{t(
															'pages.shoppingCart.sections.customerInformation.form.fields.email.label',
														)}
													</FormLabel>
													<FormControl>
														<Input
															placeholder={t(
																'pages.shoppingCart.sections.customerInformation.form.fields.email.placeholder',
															)}
															className="bg-surface-container px-3 py-2.5"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="companyName"
										render={({ field }) => (
											<FormItem className="w-full flex flex-col gap-2 items-start">
												<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
													{t(
														'pages.shoppingCart.sections.customerInformation.form.fields.companyName.label',
													)}
												</FormLabel>
												<FormControl>
													<Input
														placeholder={t(
															'pages.shoppingCart.sections.customerInformation.form.fields.companyName.placeholder',
														)}
														{...field}
														className="bg-surface-container px-3 py-2.5"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="phoneNumber"
										render={({ field }) => (
											<FormItem className="w-full flex flex-col gap-2 items-start">
												<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
													{t(
														'pages.shoppingCart.sections.customerInformation.form.fields.phoneNumber.label',
													)}
												</FormLabel>
												<FormControl className="w-full">
													<PhoneInput
														placeholder={t(
															'pages.shoppingCart.sections.customerInformation.form.fields.phoneNumber.placeholder',
														)}
														{...field}
														className="bg-surface-container rounded-lg"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="address"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
													{t(
														'pages.shoppingCart.sections.customerInformation.form.fields.address.label',
													)}
												</FormLabel>
												<FormControl>
													<Textarea
														placeholder={t(
															'pages.shoppingCart.sections.customerInformation.form.fields.address.placeholder',
														)}
														{...field}
														rows={5}
														className="bg-surface-container px-3 py-2.5 resize-none"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<Button
									type="submit"
									variant="primary"
									disabled={items.length === 0}
									className="w-full !py-3 !px-4 !rounded-xl gap-3 hover:cursor-pointer"
								>
									<span className="font-seravek_medium text-base text-secondary">
										{t(
											'pages.shoppingCart.sections.customerInformation.form.cta',
										)}
									</span>
								</Button>
							</form>
						</Form>
					</section>
				</section>
			</div>
		</main>
	)
}

ShoppingCart.path = '/:locale?/shopping-cart'
ShoppingCart.metadata = {
	title: 'Shopping cart',
	description: 'Shopping cart page',
}

export default ShoppingCart
