import ProductCard from '@/components/molecules/cards/ProductCard'
import SectionHeader from '@/components/molecules/SectionHeader'
import { Button } from '@/components/ui/button'
import { productsMock } from '@/data/mock'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FeaturedProducts = () => {
	const { t } = useTranslation()
	return (
		<section
			id="products"
			className="flex flex-col items-center gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[120px] py-16"
		>
			<div className="space-y-8">
				<SectionHeader
					title={t('pages.home.sections.featuredProducts.title')}
					subTitle={t('pages.home.sections.featuredProducts.subtitle')}
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
					{productsMock.map((product, index) => (
						<ProductCard key={`product-${index}`} product={product} />
					))}
				</div>
			</div>

			<Button
				// onClick={() => navigate('/products')}
				className="rounded-4xl w-max h-max !py-2 sm:!py-4 !px-8 hover:cursor-pointer border-[2.5px] border-secondary text-secondary bg-transparent hover:bg-accent/5"
			>
				<ArrowUpRightIcon className="size-5 sm:size-6" />
				<span className="sr-only">Explore Products</span>{' '}
				<span className="text-base sm:text-lg md:text-2xl font-seravek_medium">
					{t('pages.home.sections.featuredProducts.cta')}
				</span>{' '}
			</Button>
		</section>
	)
}

export default FeaturedProducts
