import ProductCard from '@/components/molecules/cards/ProductCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationFirst,
	PaginationItem,
	PaginationLast,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { ProductCategoryType, productsMock } from '@/data/mock'
import { PageComponent } from 'rasengan'
import { useMemo, useState } from 'react'
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

const Shop: PageComponent = () => {
	const { t } = useTranslation()

	const [selectedFilter, setSelectedFilter] = useState<ProductCategoryType>('all')

	const filteredStories = useMemo(() => {
		if (selectedFilter === 'all') {
			return productsMock
		}
		return productsMock.filter((product) => product.category === selectedFilter)
	}, [selectedFilter])

	const handleSelectFilter = (value: ProductCategoryType) => {
		setSelectedFilter(value)
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
								onClick={() => handleSelectFilter(item.value)}
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

					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
						{filteredStories.map((product, index) => (
							<ProductCard key={`product-${index}`} product={product} />
						))}
					</div>
				</div>

				<Pagination className="py-3">
					<PaginationContent>
						<PaginationItem>
							<PaginationFirst
								href="#"
								className="border border-outline-variant rounded-sm"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationPrevious
								href="#"
								className="border border-outline-variant rounded-sm"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext
								href="#"
								className="border border-outline-variant rounded-sm"
							/>
						</PaginationItem>
						<PaginationItem>
							<PaginationLast
								href="#"
								className="border border-outline-variant rounded-sm"
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
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
