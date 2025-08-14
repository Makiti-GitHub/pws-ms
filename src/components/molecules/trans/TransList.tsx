import { Trans, useTranslation } from 'react-i18next'

interface TransListProps {
	transKey: string
	emails?: string[]
	phones?: string[]
	links?: string[]
	listKey?: string
}

const TransList = ({ transKey, links, emails, phones, listKey = 'ul' }: TransListProps) => {
	const { t } = useTranslation()

	const linksRecord: Record<string, React.ReactElement> = {}
	const phonesRecord: Record<string, React.ReactElement> = {}
	const emailsRecord: Record<string, React.ReactElement> = {}

	links?.forEach((item, index) => {
		linksRecord[`link${index + 1}`] = (
			<a href={item} className="text-primary" target="_blank" rel="noopener noreferrer" />
		)
	})

	emails?.forEach((item, index) => {
		emailsRecord[`email${index === 0 ? '' : index + 1}`] = (
			<a
				href={`mailto:${item}`}
				target="_blank"
				className="text-primary"
				rel="noopener noreferrer"
			/>
		)
	})

	phones?.forEach((item, index) => {
		phonesRecord[`phone${index === 0 ? '' : index + 1}`] = (
			<a
				href={`tel:${item}`}
				target="_blank"
				className="text-primary"
				rel="noopener noreferrer"
			/>
		)
	})

	const list = t(`${transKey}.${listKey}`, {
		returnObjects: true,
	}) as string[] | undefined

	return (
		<ul className="list-disc pl-12">
			{Array.isArray(list) &&
				list?.map((_, index) => (
					<li
						key={`${transKey}.${listKey}.${index}`}
						className="text-gray-700 leading-relaxed"
					>
						<Trans
							i18nKey={`${transKey}.${listKey}.${index}`}
							components={{
								bold: <strong className="font-seravek_bold" />,
								italic: <span className="font-seravek_italic" />,
								...emailsRecord,
								...linksRecord,
								...phonesRecord,
							}}
						/>
					</li>
				))}
		</ul>
	)
}

export default TransList
