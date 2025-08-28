import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent } from 'rasengan'
import { useTranslation } from 'react-i18next'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

/* Icons */
import phoneIcon from '@/assets/icons/phone.svg'
// import emailIcon from '@/assets/icons/mail.svg'
import workIcon from '@/assets/icons/work.svg'
import Image from '@rasenganjs/image'
import { MailIcon } from 'lucide-react'

// Define schemas for each step
const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.email(),
	companyName: z.string(),
	subject: z.string(),
	message: z.string(),
})
type FullFormData = z.infer<typeof formSchema>

const ContactUs: PageComponent = () => {
	const { t } = useTranslation()

	const form = useForm<FullFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			companyName: '',
			subject: '',
			message: '',
		},
	})

	const onSubmit = (data: FullFormData) => {
		console.log('Form submitted:', data)

		const project = '+237 680 09 54 53'

		let text = `${t('pages.contactUs.sections.leftSection.form.fields.name.label')} : ${
			data.name
		}\n`

		text += `${t('pages.contactUs.sections.leftSection.form.fields.email.label')} : ${
			data.email
		}\n`

		text += `${t('pages.contactUs.sections.leftSection.form.fields.companyName.label')} : ${
			data.companyName
		}\n\n`

		text += `Subject: ${t(
			'pages.contactUs.sections.leftSection.form.fields.subject.label',
		)} : ${data.subject}\n\n`

		text += `${t('pages.contactUs.sections.leftSection.form.fields.message.label')} : ${
			data.message
		}\n\n`

		text += `\n`

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
		<main className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] xl:px-[120px] py-[150px] relative">
			<div className="space-y-8 relative">
				<SectionHeader
					title={t('pages.contactUs.title')}
					subTitle={t('pages.contactUs.subtitle')}
				/>

				<section className="gap-4 grid md:grid-cols-12">
					<div className="p-5 rounded-xl border-[0.5px] border-outline-variant space-y-6 col-span-12 md:col-span-7 lg:col-span-8">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="flex flex-col gap-4 sm:gap-6 rounded-xl"
							>
								<div className="text-on-surface-variant space-y-2">
									<h3 className="text-xl font-seravek_medium">
										{t('pages.contactUs.sections.leftSection.title')}
									</h3>
									<p className="text-base">
										{t('pages.contactUs.sections.leftSection.subtitle')}
									</p>
								</div>

								<div className="space-y-4">
									<div className="flex flex-col lg:flex-row gap-4">
										<FormField
											control={form.control}
											name="name"
											render={({ field }) => (
												<FormItem className="lg:w-1/2 flex flex-col gap-2 items-start">
													<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
														{t(
															'pages.contactUs.sections.leftSection.form.fields.name.label',
														)}
													</FormLabel>
													<FormControl>
														<Input
															placeholder={t(
																'pages.contactUs.sections.leftSection.form.fields.name.placeholder',
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
												<FormItem className="lg:w-1/2 flex flex-col gap-2 items-start">
													<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
														{t(
															'pages.contactUs.sections.leftSection.form.fields.email.label',
														)}
													</FormLabel>
													<FormControl>
														<Input
															placeholder={t(
																'pages.contactUs.sections.leftSection.form.fields.email.placeholder',
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
														'pages.contactUs.sections.leftSection.form.fields.companyName.label',
													)}
												</FormLabel>
												<FormControl>
													<Input
														placeholder={t(
															'pages.contactUs.sections.leftSection.form.fields.companyName.placeholder',
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
										name="subject"
										render={({ field }) => (
											<FormItem className="w-full flex flex-col gap-2 items-start">
												<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
													{t(
														'pages.contactUs.sections.leftSection.form.fields.subject.label',
													)}
												</FormLabel>
												<FormControl>
													<Input
														placeholder={t(
															'pages.contactUs.sections.leftSection.form.fields.subject.placeholder',
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
										name="message"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel className="font-seravek_medium text-base sm:text-lg text-on-surface-variant">
													{t(
														'pages.contactUs.sections.leftSection.form.fields.message.label',
													)}
												</FormLabel>
												<FormControl>
													<Textarea
														placeholder={t(
															'pages.contactUs.sections.leftSection.form.fields.message.placeholder',
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
									className="w-full !py-3 !px-4 !rounded-xl gap-3 hover:cursor-pointer"
								>
									<span className="font-seravek_medium text-base text-secondary">
										{t('pages.contactUs.sections.leftSection.form.cta')}
									</span>
								</Button>
							</form>
						</Form>
					</div>

					<aside className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col gap-4">
						<div className="space-y-6 border-[0.5px] border-outline-variant rounded-xl p-5">
							<div className="flex items-center gap-2">
								<div className="size-5">
									<Image
										src={phoneIcon}
										alt="Phone icon"
										width={'100%'}
										height={'100%'}
										className="size-full object-contain aspect-auto"
									/>
								</div>

								<p className="text-xl font-seravek_medium text-on-surface-variant">
									{t('pages.contactUs.sections.rightSection.phone')}
								</p>
							</div>
							<p className="text-on-surface-variant text-base">
								<a
									href="tel:+237680095453"
									target="_blank"
									rel="noopener noreferrer"
								>
									+237 6 80 09 54 53
								</a>
							</p>
						</div>
						<div className="space-y-6 border-[0.5px] border-outline-variant rounded-xl p-5">
							<div className="flex items-center gap-2">
								<MailIcon className="size-6" />

								<p className="text-xl font-seravek_medium text-on-surface-variant">
									{t('pages.contactUs.sections.rightSection.email')}
								</p>
							</div>
							<p className="text-on-surface-variant text-base">
								<a
									href="mailto:contact@makiti.cm"
									target="_blank"
									rel="noopener noreferrer"
								>
									contact@makiti.cm
								</a>
							</p>
						</div>

						<div className="space-y-6 border-[0.5px] border-outline-variant rounded-xl p-5">
							<div className="flex items-center gap-2">
								<div className="size-5">
									<Image
										src={workIcon}
										alt="house icon"
										width={'100%'}
										height={'100%'}
										className="size-full object-contain aspect-auto"
									/>
								</div>

								<p className="text-xl font-seravek_medium text-on-surface-variant">
									{t('pages.contactUs.sections.rightSection.businessHours.title')}
								</p>
							</div>
							<div className="text-on-surface-variant text-base">
								<p>{t('pages.contactUs.sections.rightSection.businessHours.p1')}</p>
								<p>{t('pages.contactUs.sections.rightSection.businessHours.p2')}</p>
								<p>{t('pages.contactUs.sections.rightSection.businessHours.p3')}</p>
							</div>
						</div>
					</aside>
				</section>
			</div>
		</main>
	)
}

ContactUs.path = '/:locale?/contact-us'
ContactUs.metadata = {
	title: 'Contact Us',
	description: 'Contact us page',
}

export default ContactUs
