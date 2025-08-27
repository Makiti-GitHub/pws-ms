import { Button } from '@/components/ui/button'
import { ourServicesMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import { CheckIcon, MoveRightIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'
import { useTranslation } from 'react-i18next'

interface OurServiceItemProps {
	ourService: (typeof ourServicesMock)[number]
	index: number
	showPrice?: boolean
}

const OurServiceItem = ({ ourService, index, showPrice }: OurServiceItemProps) => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	return (
		<>
			<div className="px-10 flex flex-col items-center justify-between gap-10">
				<div className="w-10">
					<Image
						src={ourService.icon}
						alt="first service"
						width={'100%'}
						height={'100%'}
						className="size-full object-container aspect-auto"
					/>
				</div>

				<div className="w-80 h-[200px] rounded-xl">
					<Image
						src={ourService.image}
						alt={ourService.title}
						width={'100%'}
						height={'100%'}
						className="size-full object-container rounded-xl aspect-auto"
					/>
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-8 items-center justify-between px-6 xl:px-[46px]">
				<div className="flex flex-col gap-8">
					<div className="text-center">
						<h3 className="text-xl font-seravek_medium text-on-surface">
							{t(
								`pages.home.sections.ourServices.services.service${
									index + 1
								}.title`,
							)}
						</h3>
						<p className="text-base text-outline">
							{t(
								`pages.home.sections.ourServices.services.service${
									index + 1
								}.description`,
							)}
						</p>
					</div>
					<div>
						<ul className="space-y-1 flex flex-col items-center">
							{ourService.attributes.map((_, index2) => (
								<li
									key={`ourService-attribute-${index}-${index2}`}
									className="gap-3 flex items-center"
								>
									<CheckIcon className="text-success size-5 sm:size-6" />
									<span className="text-base text-outline">
										{t(
											`pages.home.sections.ourServices.services.service${
												index + 1
											}.attributes.attribute${index2 + 1}`,
										)}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="flex flex-col gap-8 w-full">
					{showPrice ? (
						<p className="font-seravek_bold text-2xl text-center text-secondary">{`${t(
							'startingFrom',
						)} ${ourService.price.toString().toCommaSeperatedDigits()} CFA/${t(
							ourService.priceUnit,
						)}`}</p>
					) : null}

					<Button
						onClick={() => navigate(`/${i18n.language}/services/${ourService.link}`)}
						variant="primary"
						className="w-full !py-3 !px-4 !rounded-xl gap-3 hover:cursor-pointer"
					>
						<span className="font-seravek_medium text-base text-secondary">
							{t(`pages.home.sections.ourServices.services.service${index + 1}.cta`)}
						</span>

						<MoveRightIcon className="size-5 sm:size-6" />
					</Button>
				</div>
			</div>
		</>
	)
}

export default OurServiceItem
