import React, { useMemo } from 'react'
import { Outlet, LayoutComponent, useLocation } from 'rasengan'
import { Link } from 'rasengan'
import {
	Breadcrumb,
	// BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

const ServicesLayout: LayoutComponent = () => {
	const { t, i18n } = useTranslation()
	const { pathname } = useLocation()

	const currentPage = useMemo(() => {
		const page = pathname.split('/').pop()?.split('-')

		if (page) {
			const parsedPageName =
				page[0] +
				page
					.slice(1)
					.map((word) => word[0].toUpperCase() + word.slice(1))
					.join('')
			return parsedPageName
		}
		return
	}, [pathname])

	return (
		<React.Fragment>
			<main className={`relative pt-[150px]`}>
				<div className="pl-4 sm:pl-8 md:pl-11 lg:pl-[60px] xl:pl-[120px]">
					<Breadcrumb>
						<BreadcrumbList className="text-on-surface-variant text-lg flex items-center gap-6">
							<BreadcrumbItem className="flex items-center gap-2">
								<BreadcrumbLink asChild>
									<Link to={`/${i18n.language}/`}>{t('nav.links.home')}</Link>
								</BreadcrumbLink>
								<BreadcrumbSeparator />
							</BreadcrumbItem>
							<BreadcrumbItem className="flex items-center gap-2">
								<DropdownMenu>
									<DropdownMenuTrigger
										asChild
										className="flex items-center gap-1 hover:cursor-pointer"
									>
										<Button
											type="button"
											variant={'link'}
											className="!p-0 h-max"
										>
											<span className="text-lg text-on-surface-variant">
												{t('nav.links.services')}
											</span>
										</Button>
										{/* <BreadcrumbPage></BreadcrumbPage> */}
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start">
										<DropdownMenuItem asChild className="hover:cursor-pointer">
											<Link to={`/${i18n.language}/services/server-security`}>
												{t('pages.services.serverSecurity.title')}
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild className="hover:cursor-pointer">
											<Link
												to={`/${i18n.language}/services/internet-kit-configuration`}
											>
												{t('pages.services.internetKitConfiguration.title')}
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild className="hover:cursor-pointer">
											<Link
												to={`/${i18n.language}/services/streaming-services`}
											>
												{t('pages.services.streamingServices.title')}
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
								<BreadcrumbSeparator />
							</BreadcrumbItem>
							<BreadcrumbItem>
								<BreadcrumbPage>
									{t(`pages.services.${currentPage}.title`)}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Outlet />
			</main>
		</React.Fragment>
	)
}

ServicesLayout.path = '/:locale?/services'

export default ServicesLayout
