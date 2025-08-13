import SectionHeader from '@/components/molecules/SectionHeader'
import { PageComponent, useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { serverSecurityOffersMock } from '@/data/mock'
import { ArrowUpRightIcon, ShoppingCartIcon } from 'lucide-react'
import ServiceCard from '@/components/molecules/cards/ServiceCard'
import Image from '@rasenganjs/image'
import checkIcon from '@/assets/icons/check.svg'
import { useCartStore } from '@/stores/cartStore'
import serverSecurityImg from '@/assets/ourServices/server_security.png'
import { toast } from 'sonner'

const ServerSecurity: PageComponent = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const addToCart = useCartStore((state) => state.addToCart)

	return (
		<main className="flex flex-col w-screen gap-8 px-4 sm:px-8 md:px-11 lg:px-[60px] xl:px-[120px] pt-8 relative">
			<section id="ourServices" className="flex flex-col gap-8 pb-16">
				<SectionHeader
					title={t('pages.services.serverSecurity.title')}
					subTitle={t('pages.services.serverSecurity.subtitle')}
				/>
				<div className="space-y-8">
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6">
						{serverSecurityOffersMock.map((service, index) => (
							<ServiceCard key={`service-${index}`} service={service} />
						))}
					</div>

					<div className="flex flex-col gap-8 py-5 items-center rounded-[20px] box_shadow_security_service_card bg-surface">
						<div className="p-4 flex flex-col gap-4 w-full">
							<div className="text-center space-y-2.5">
								<h3 className="font-seravek_medium text-2xl text-on-surface">
									{t(
										'pages.services.serverSecurity.sections.completeSecurityPackage.title',
									)}
								</h3>
								<p className="text-sm text-on-surface-variant">
									{t(
										'pages.services.serverSecurity.sections.completeSecurityPackage.subtitle',
									)}
								</p>
							</div>

							<div className="flex flex-col gap-1 sm:flex-row sm:gap-8 items-center w-full">
								{Array.from({ length: 3 }).map((_, index) => (
									<div
										key={`completeSecurityPackage-promise-${index}`}
										className="flex gap-2 items-center justify-center flex-1"
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
										<span className="text-base text-outline">
											{t(
												`pages.services.serverSecurity.sections.completeSecurityPackage.promises.promise${
													index + 1
												}`,
											)}
										</span>
									</div>
								))}
							</div>

							<p className="font-seravek_medium text-2xl text-center text-secondary">
								665.000 CFA/{t('month')}
							</p>

							<Button
								onClick={() => {
									addToCart({
										creationDate: '2025-08-08',
										id: `complete-security-package`,
										// category: service.category,
										quantity: 1,
										price: 665000,
										name: t(
											'pages.services.serverSecurity.sections.completeSecurityPackage.title',
										),
										rating: 5,
										reviews: 0,
										images: [serverSecurityImg],
										description: t(
											'pages.services.serverSecurity.sections.completeSecurityPackage.subtitle',
										),
									})

									toast.success('Service added to cart')
								}}
								variant={'primary'}
								className="rounded-[8px] w-full flex-1 h-max !py-2 sm:!py-3 !px-4 gap-5 hover:cursor-pointer border border-secondary hover:bg-accent/5"
							>
								<span className="sr-only">Add to cart</span>{' '}
								<span className="text-base font-seravek_medium">
									{t('addToCart')}
								</span>{' '}
								<ShoppingCartIcon className="size-5 sm:size-6" />
							</Button>
						</div>
					</div>
				</div>
				<div className="space-y-3 flex flex-col items-center">
					<p className="text-on-surface-variant text-xl text-center">
						{t('pages.services.serverSecurity.sections.callToAction.title')}
					</p>

					<Button
						type="button"
						onClick={() => navigate('/contact-us')}
						variant={'primary'}
						className="rounded-[40px] h-max gap-2 !py-2 !px-4 sm:!py-4 md:!px-8 hover:cursor-pointer"
					>
						<span className="sr-only">Contact us now</span>
						<span className="text-xl md:text-2xl font-seravek_medium text-secondary">
							{t('pages.services.serverSecurity.sections.callToAction.cta')}
						</span>
						<ArrowUpRightIcon className="text-secondary size-5 sm:size-6" />
					</Button>
				</div>
			</section>
		</main>
	)
}

ServerSecurity.path = '/server-security'
ServerSecurity.metadata = {
	title: 'Server security',
	description: 'Server security page',
}

export default ServerSecurity
