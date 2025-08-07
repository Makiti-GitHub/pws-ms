import { ProductTagType } from '@/data/mock'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductTagProps {
	className?: string
	variant: ProductTagType
}
const ProductTag: FC<ProductTagProps> = ({ className, variant }) => {
	const { t } = useTranslation()

	const bgColor = variant === 'inStock' ? '#27AE60' : variant === 'new' ? '#E93535' : '#3D8AFF'

	return (
		<div
			data-slot="product-tag"
			className={cn('px-2 py-1 rounded-[8px]', className)}
			style={{
				backgroundColor: bgColor,
			}}
		>
			<span className="font-seravek_medium text-white capitalize whitespace-nowrap">
				{variant === 'inStock'
					? t('inStock')
					: variant === 'new'
					? t('new')
					: t('topRated')}
			</span>
		</div>
	)
}

export default ProductTag
