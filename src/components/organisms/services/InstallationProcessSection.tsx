import { iKcInstallationProcessMock } from '@/data/mock'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'

const InstallationProcessSection = () => {
	const { t } = useTranslation()
	return (
		<section className="box_shadow_security_service_card bg-surface rounded-[20px] py-5 space-y-10">
			<div className="p-4 space-y-4">
				<h2 className="font-seravek_medium text-2xl text-on-surface text-center">
					{t(
						'pages.services.internetKitConfiguration.sections.installationProcess.title',
					)}
				</h2>

				<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-8">
					{iKcInstallationProcessMock.map((process, index) => (
						<article
							key={`process-${index}`}
							className="flex flex-col items-center justify-between gap-4 bg-surface rounded-xl p-6 shadow-[4px_4px_12px_-8px_#00000033,-4px_-4px_12px_-8px_#00000033]"
						>
							<div className="flex flex-col justify-between items-center gap-5">
								<div
									className="size-[74px] rounded-xl flex items-center justify-center"
									style={{ backgroundColor: process.color }}
								>
									<div className="size-12">
										<Image
											src={process.icon}
											alt={process.title}
											width={'100%'}
											height={'100%'}
											className="size-full object-container aspect-auto"
										/>
									</div>
								</div>
								<p className="font-seravek_medium text-on-surface text-2xl text-center">
									{t(
										`pages.services.internetKitConfiguration.sections.installationProcess.steps.step${
											index + 1
										}.title`,
									)}
								</p>
							</div>
							<p className="text-xl text-on-surface-variant text-center">
								{t(
									`pages.services.internetKitConfiguration.sections.installationProcess.steps.step${
										index + 1
									}.description`,
								)}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default InstallationProcessSection
