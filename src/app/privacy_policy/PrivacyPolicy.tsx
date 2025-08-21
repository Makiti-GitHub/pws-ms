import TransList from '@/components/molecules/trans/TransList'
import TransParagraph from '@/components/molecules/trans/TransParagraph'
import { PageComponent } from 'rasengan'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy: PageComponent = () => {
	const { t } = useTranslation()
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] pb-14 relative">
			<h1 className="font-seravek_bold text-3xl">{t('pages.privacyPolicy.title')}</h1>

			{/** Section 1 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					1. {t('pages.privacyPolicy.sections.introduction.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.introduction.p1" />
					<TransParagraph transKey="pages.privacyPolicy.sections.introduction.p2" />
				</div>
			</div>

			{/** Section 2 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					2. {t('pages.privacyPolicy.sections.personalDataCollected.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.personalDataCollected.p1" />
					<TransList transKey="pages.privacyPolicy.sections.personalDataCollected" />
				</div>
			</div>

			{/** Section 3 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					3. {t('pages.privacyPolicy.sections.collectionMethod.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.collectionMethod.p1" />
					<TransList transKey="pages.privacyPolicy.sections.collectionMethod" />
				</div>
			</div>

			{/** Section 4 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					4. {t('pages.privacyPolicy.sections.processingPurposes.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.processingPurposes.p1" />
					<TransList transKey="pages.privacyPolicy.sections.processingPurposes" />
				</div>
			</div>

			{/** Section 5 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					5. {t('pages.privacyPolicy.sections.dataDisclosure.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.dataDisclosure.p1" />
					<TransList transKey="pages.privacyPolicy.sections.dataDisclosure" />
				</div>
			</div>

			{/** Section 6 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					6. {t('pages.privacyPolicy.sections.retentionPeriod.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.retentionPeriod.p1" />
					<TransParagraph transKey="pages.privacyPolicy.sections.retentionPeriod.p2" />
				</div>
			</div>

			{/** Section 7 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					7. {t('pages.privacyPolicy.sections.dataSecurity.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.dataSecurity.p1" />
					<TransList transKey="pages.privacyPolicy.sections.dataSecurity" />
				</div>
			</div>

			{/** Section 8 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					8. {t('pages.privacyPolicy.sections.yourRights.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.yourRights.p1" />
					<TransList transKey="pages.privacyPolicy.sections.yourRights" />
					<TransParagraph
						transKey="pages.privacyPolicy.sections.yourRights.p2"
						emails={['contact@makiti-group.cm']}
					/>
				</div>
			</div>

			{/** Section 9 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					9. {t('pages.privacyPolicy.sections.cookiesAndTrackers.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.cookiesAndTrackers.p1" />
					<TransList transKey="pages.privacyPolicy.sections.cookiesAndTrackers" />
					<TransParagraph transKey="pages.privacyPolicy.sections.cookiesAndTrackers.p2" />
				</div>
			</div>

			{/** Section 10 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					10. {t('pages.privacyPolicy.sections.policyChanges.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.policyChanges.p1" />
					<TransParagraph transKey="pages.privacyPolicy.sections.policyChanges.p2" />
				</div>
			</div>

			{/** Section 11 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					11. {t('pages.privacyPolicy.sections.contact.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.privacyPolicy.sections.contact.p1" />
					<TransParagraph transKey="pages.privacyPolicy.sections.contact.p2" />
					<div>
						<TransParagraph
							transKey="pages.privacyPolicy.sections.contact.p3"
							links={['https://www.makiti-group.com']}
						/>
						<TransParagraph
							transKey="pages.privacyPolicy.sections.contact.p4"
							emails={['contact@makiti-group.cm']}
						/>
						<TransParagraph
							transKey="pages.privacyPolicy.sections.contact.p5"
							phones={['+237 680 095 453']}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}

PrivacyPolicy.path = '/:locale?/privacy-policy'
PrivacyPolicy.metadata = {
	title: 'Privacy policy',
	description: 'Privacy policy page',
}

export default PrivacyPolicy
