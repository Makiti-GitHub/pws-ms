import SectionHeader from '@/components/molecules/SectionHeader'
// import { ProductCategoryType } from '@/data/mock'
import { PageComponent } from 'rasengan'
// import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

// const filterOptions: { label: string; value: ProductCategoryType }[] = [
//     { label: 'All Products', value: 'all' },
//     { label: 'Electronics', value: 'electronics' },
//     { label: 'Licence', value: 'license' },
//     { label: 'Fashion', value: 'fashion' },
//     { label: 'Beauty', value: 'beauty' },
//     { label: 'Home', value: 'home' },
//     { label: 'Baby & Chidren', value: 'baby&children' },
//     { label: 'Health', value: 'health' },
//     { label: 'Food', value: 'food' },
// ]

const ContactUs: PageComponent = () => {
	const { t } = useTranslation()

	// const [selectedFilter, setSelectedFilter] = useState<ProductCategoryType>('all')

	// const filteredStories = useMemo(() => {
	//     if (selectedFilter === 'all') {
	//         return productsMock
	//     }
	//     return productsMock.filter((product) => product.category === selectedFilter)
	// }, [selectedFilter])

	// const handleSelectFilter = (value: ProductCategoryType) => {
	//     setSelectedFilter(value)
	// }

	return (
		<main className="flex flex-col gap-8 px-4 sm:px-8 md:px-[80px] lg:px-[60px] xl:px-[120px] pt-[150px] relative">
			<div className="space-y-8 relative">
				<SectionHeader
					title={t('pages.contactUs.title')}
					subTitle={t('pages.contactUs.subtitle')}
				/>
			</div>
		</main>
	)
}

ContactUs.path = '/:locale?/contact-us'
ContactUs.metadata = {
	title: 'Contact Us',
	description: 'Contact us page',
}

export default ContactUs
