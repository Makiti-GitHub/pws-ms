import ProductCard from '@/components/molecules/cards/ProductCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import ShopPagination from '@/components/organisms/shop/PaginationControls'
import { ProductCategoryType, productsMock } from '@/data/mock'
import { PageComponent, useLocation, useNavigate, useSearchParams } from 'rasengan'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const filterOptions: { label: string; value: ProductCategoryType }[] = [
	{ label: 'All Products', value: 'all' },
	{ label: 'Electronics', value: 'electronics' },
	{ label: 'Licence', value: 'license' },
	{ label: 'Fashion', value: 'fashion' },
	{ label: 'Beauty', value: 'beauty' },
	{ label: 'Home', value: 'home' },
	{ label: 'Baby & Chidren', value: 'baby&children' },
	{ label: 'Health', value: 'health' },
	{ label: 'Food', value: 'food' },
]

const itemsPerPage = 6

const Shop: PageComponent = () => {
	const { t } = useTranslation()
	const [selectedFilter, setSelectedFilter] = useState<ProductCategoryType>('all')
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [urlParams] = useSearchParams()
	const searchQuery = urlParams.get('search')
	const [currentPage, setCurrentPage] = useState(1)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	const filteredProducts = useMemo(() => {
		let products = productsMock

		if (searchQuery) {
			products = productsMock.filter(
				(product) =>
					product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.categories?.some((category) => category.includes(searchQuery)),
			)
		}

		if (selectedFilter === 'all') {
			return products
		}
		return products.filter((product) => product.categories?.includes(selectedFilter))
	}, [selectedFilter, searchQuery])

	const currentProjects = useMemo(() => {
		return filteredProducts.slice(startIndex, endIndex)
	}, [filteredProducts, startIndex, endIndex])

	/**
	 * Function to set desired the url param, and navigate to it for component re-rendering
	 * @param param
	 * @param value
	 */
	const handleNavigate = useCallback(
		(param: string, value: string) => {
			urlParams.set(param, value)
			navigate(`${pathname}?${urlParams.toString()}`, { replace: true })
		},
		[urlParams, pathname, navigate],
	)

	/**
	 * Function to set desired the url param, and navigate to it for component re-rendering
	 * @param param
	 * @param value
	 */
	const handlePopNavigate = useCallback(
		(param: string, value?: string) => {
			urlParams.delete(param, value)
			navigate(`${pathname}?${urlParams.toString()}`, { replace: true })
		},
		[urlParams, pathname, navigate],
	)

	const handleSelectFilter = (value: ProductCategoryType) => {
		setSelectedFilter(value)
		handleNavigate('category', value)
	}

	return (
		<main className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative">
				<SectionHeader title={t('pages.shop.title')} subTitle={t('pages.shop.subtitle')} />

				<div className="space-y-4 sm:space-y-6">
					<div className="flex justify-center items-center flex-wrap gap-3">
						{filterOptions.map((item, index) => (
							<span
								tabIndex={0}
								role="button"
								onClick={() => {
									setCurrentPage(1)
									if (item.value !== 'all') {
										handleSelectFilter(item.value)
									} else {
										setSelectedFilter('all')
										handlePopNavigate('category')
									}
								}}
								key={`story-${index}-industry-${item.value}`}
								className={`${
									selectedFilter === item.value
										? 'bg-primary text-secondary'
										: 'bg-surface-container text-on-surface-variant hover:bg-outline-variant'
								} px-3 py-2 rounded-xl font-seravek_medium text-sm hover:cursor-pointer`}
							>
								{t(`pages.shop.filters.${item.value}`)}
							</span>
						))}
					</div>

					{currentProjects.length > 0 ? (
						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
							{currentProjects.map((product, index) => (
								<ProductCard key={`product-${index}`} product={product} />
							))}
						</div>
					) : (
						<p className="text-center text-on-surface-variant">
							{t('pages.shop.noProductsFound')}
						</p>
					)}
				</div>
				<ShopPagination
					products={filteredProducts}
					itemsPerPage={6}
					currentPage={currentPage}
					onPageChange={setCurrentPage}
					startIndex={startIndex}
					endIndex={endIndex}
				/>
			</div>
		</main>
	)
}

Shop.path = '/:locale?/shop'
Shop.metadata = {
	title: 'Shop',
	description: 'Shop page',
}

export default Shop
