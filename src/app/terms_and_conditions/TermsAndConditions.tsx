import TransList from '@/components/molecules/trans/TransList'
import TransParagraph from '@/components/molecules/trans/TransParagraph'
import { useTranslation } from 'react-i18next'

const TermsAndConditions = () => {
	const { t } = useTranslation()
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] pb-14 relative">
			<h1 className="font-seravek_bold text-3xl">{t('pages.termsAndConditions.title')}</h1>

			<TransParagraph transKey="pages.termsAndConditions.p1" className="text-lg" />
			<TransParagraph transKey="pages.termsAndConditions.p2" className="text-lg" />

			{/** Section 1 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					1. {t('pages.termsAndConditions.sections.presentation.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.presentation.p1" />
				</div>
			</div>

			{/** Section 2 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					2. {t('pages.termsAndConditions.sections.definitions.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.definitions.p1" />
					<TransList transKey="pages.termsAndConditions.sections.definitions" />
				</div>
			</div>

			{/** Section 3 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					3. {t('pages.termsAndConditions.sections.purposes.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.purposes.p1" />
				</div>
			</div>

			{/** Section 4 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					4. {t('pages.termsAndConditions.sections.servicesAccess.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.servicesAccess.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.servicesAccess.p2" />
					<TransList transKey="pages.termsAndConditions.sections.servicesAccess" />
				</div>
			</div>

			{/** Section 5 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					5. {t('pages.termsAndConditions.sections.responsibleServicesUsage.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.responsibleServicesUsage.p1" />
					<TransList transKey="pages.termsAndConditions.sections.responsibleServicesUsage" />
				</div>
			</div>

			{/** Section 6 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					6. {t('pages.termsAndConditions.sections.intellectualProperty.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.intellectualProperty.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.intellectualProperty.p2" />
				</div>
			</div>

			{/** Section 7 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					7. {t('pages.termsAndConditions.sections.personalDataProtection.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.personalDataProtection.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.personalDataProtection.p2" />
				</div>
			</div>

			{/** Section 8 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					8. {t('pages.termsAndConditions.sections.availabilityAndMaintenance.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.availabilityAndMaintenance.p1" />
					<TransList transKey="pages.termsAndConditions.sections.availabilityAndMaintenance" />
				</div>
			</div>

			{/** Section 9 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					9. {t('pages.termsAndConditions.sections.limitationOfLiability.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.limitationOfLiability.p1" />
					<TransList transKey="pages.termsAndConditions.sections.limitationOfLiability" />
					<TransParagraph transKey="pages.termsAndConditions.sections.limitationOfLiability.p2" />
				</div>
			</div>

			{/** Section 10 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					10. {t('pages.termsAndConditions.sections.suspensionAndTermination.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.suspensionAndTermination.p1" />
					<TransParagraph
						transKey="pages.termsAndConditions.sections.suspensionAndTermination.p2"
						emails={['contact@makiti.de']}
					/>
				</div>
			</div>

			{/** Section 11 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					11. {t('pages.termsAndConditions.sections.termsModification.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.termsModification.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.termsModification.p2" />
				</div>
			</div>

			{/** Section 12 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					12. {t('pages.termsAndConditions.sections.applicableLawAndJuridiction.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.applicableLawAndJuridiction.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.applicableLawAndJuridiction.p2" />
				</div>
			</div>

			{/** Section 13 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					13. {t('pages.termsAndConditions.sections.contact.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.contact.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.contact.p2" />
					<div>
						<TransParagraph
							transKey="pages.termsAndConditions.sections.contact.p3"
							emails={['contact@makiti.de']}
						/>
						<TransParagraph
							transKey="pages.termsAndConditions.sections.contact.p4"
							phones={['+237 680 095 453']}
						/>
						<TransParagraph
							transKey="pages.termsAndConditions.sections.contact.p5"
							links={['https://www.makiti-group.com']}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}

TermsAndConditions.path = '/:locale?/terms-and-conditions'
TermsAndConditions.metadata = {
	title: 'Terms and conditions',
	description: 'Terms and conditions page',
}

export default TermsAndConditions
