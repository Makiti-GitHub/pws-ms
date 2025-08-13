import TransParagraph from '@/components/molecules/trans/TransParagraph'
import { useTranslation } from 'react-i18next'

const LegalNotice = () => {
	const { t } = useTranslation()
	return (
		<main className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] pt-[150px] relative">
			<h1 className="font-seravek_bold text-3xl">{t('pages.termsAndConditions.title')}</h1>

			{/** Section 1 */}
			<div className="space-y-4">
				<h2 className="font-seravek_bold text-2xl">
					1. {t('pages.termsAndConditions.sections.introduction.title')}
				</h2>

				<div className="space-y-2 text-lg">
					<TransParagraph transKey="pages.termsAndConditions.sections.introduction.p1" />
					<TransParagraph transKey="pages.termsAndConditions.sections.introduction.p2" />
				</div>
			</div>
		</main>
	)
}

LegalNotice.path = '/:locale?/legal-notice'
LegalNotice.metadata = {
	title: 'Legal notice',
	description: 'Legal notice page',
}

export default LegalNotice
