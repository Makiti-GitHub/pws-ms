import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { frequentlyAskedQuestionsMock } from '@/data/mock'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FaqSection = () => {
	const { t } = useTranslation()
	return (
		<section className="box_shadow_security_service_card bg-surface px-4 py-9 space-y-10 rounded-[20px]">
			<h2 className="font-seravek_medium text-2xl text-on-surface text-center">
				{t('pages.services.internetKitConfiguration.sections.faq.title')}
			</h2>
			<div>
				<Accordion
					type="multiple"
					// collapsible={true}
					className="w-full flex flex-col gap-4"
					// defaultValue={['item-1']}
				>
					{frequentlyAskedQuestionsMock.map((faq, index) => (
						<AccordionItem
							key={`question-${index + 1}-${faq.question}`}
							value={`item-${index + 1}`}
							className="box_shadow_security_service_card rounded-lg px-3 py-1.5"
						>
							<AccordionTrigger
								icon={
									<>
										<PlusIcon className="group-[[data-state=open]]:hidden text-outline-variant pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ease-in-out" />
										<MinusIcon className="hidden group-[[data-state=open]]:block text-outline-variant pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ease-in-out" />
									</>
								}
							>
								<p className="flex items-center gap-2.5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
									>
										<circle cx="12" cy="12" r="10" />
										<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
										<path d="M12 17h.01" />
									</svg>
									<span className="font-seravek_medium text-sm text-on-surface-variant">
										{t(
											`pages.services.internetKitConfiguration.sections.faq.questions.question${
												index + 1
											}.question`,
										)}
									</span>
								</p>
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								<p>
									{t(
										`pages.services.internetKitConfiguration.sections.faq.questions.question${
											index + 1
										}.answer`,
									)}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}

export default FaqSection
