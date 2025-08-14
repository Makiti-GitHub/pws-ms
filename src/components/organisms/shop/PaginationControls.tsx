import React from 'react'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	PaginationFirst,
	PaginationLast,
} from '@/components/ui/pagination'
import Product from '@/entities/product.entity'
import { useTranslation } from 'react-i18next'

interface ShopPaginationProps {
	products: Product[]
	currentPage: number
	itemsPerPage?: number
	onPageChange: (page: number) => void
	startIndex: number
	endIndex: number
}

const ShopPagination: React.FC<ShopPaginationProps> = ({
	products,
	currentPage,
	itemsPerPage = 8,
	onPageChange,
	startIndex,
	endIndex,
}) => {
	const { t } = useTranslation()
	// Calculate pagination values
	const totalItems = products.length
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	// Generate page numbers to display
	const getVisiblePages = () => {
		const pages = []
		const maxVisiblePages = 5

		if (totalPages <= maxVisiblePages) {
			// Show all pages if total is small
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			// Show pages with ellipsis logic
			if (currentPage <= 3) {
				// Show first pages
				for (let i = 1; i <= 3; i++) {
					pages.push(i)
				}
				pages.push('ellipsis')
				pages.push(totalPages)
			} else if (currentPage >= totalPages - 2) {
				// Show last pages
				pages.push(1)
				pages.push('ellipsis')
				for (let i = totalPages - 2; i <= totalPages; i++) {
					pages.push(i)
				}
			} else {
				// Show middle pages
				pages.push(1)
				pages.push('ellipsis')
				for (let i = currentPage - 1; i <= currentPage + 1; i++) {
					pages.push(i)
				}
				pages.push('ellipsis')
				pages.push(totalPages)
			}
		}

		return pages
	}

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page)
			//   setCurrentPage(page);
		}
	}

	const handleFirst = () => onPageChange(1) // setCurrentPage(1);
	const handleLast = () => onPageChange(totalPages) // setCurrentPage(totalPages);
	const handlePrevious = () => handlePageChange(currentPage - 1)
	const handleNext = () => handlePageChange(currentPage + 1)

	return (
		<div className="w-full">
			{/* Products Grid
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>*/}

			{/* Pagination Info  */}
			<div className="flex justify-between items-center mb-4 text-sm text-gray-600">
				<span>
					{t('pages.shop.pagination.showing', {
						count1: `${startIndex + 1}-${Math.min(endIndex, totalItems)}`,
						count2: `${totalItems}`,
					})}
				</span>
				<span>
					{t('pages.shop.pagination.page', {
						count1: `${currentPage}`,
						count2: `${totalPages}`,
					})}
				</span>
			</div>

			{/* Pagination Component */}
			{totalPages > 1 && (
				<Pagination className="py-3">
					<PaginationContent>
						{/* First Button */}
						<PaginationItem>
							<PaginationFirst
								onClick={handleFirst}
								className={`border border-outline-variant rounded-sm cursor-pointer ${
									currentPage === 1
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-gray-50'
								}`}
								aria-disabled={currentPage === 1}
							/>
						</PaginationItem>

						{/* Previous Button */}
						<PaginationItem>
							<PaginationPrevious
								onClick={handlePrevious}
								className={`border border-outline-variant rounded-sm cursor-pointer ${
									currentPage === 1
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-gray-50'
								}`}
								aria-disabled={currentPage === 1}
							/>
						</PaginationItem>

						{/* Page Numbers */}
						{getVisiblePages().map((page, index) => (
							<PaginationItem key={index}>
								{page === 'ellipsis' ? (
									<PaginationEllipsis />
								) : (
									<PaginationLink
										onClick={() => handlePageChange(page as number)}
										isActive={currentPage === page}
										className="cursor-pointer hover:bg-gray-50"
									>
										{page}
									</PaginationLink>
								)}
							</PaginationItem>
						))}

						{/* Next Button */}
						<PaginationItem>
							<PaginationNext
								onClick={handleNext}
								className={`border border-outline-variant rounded-sm cursor-pointer ${
									currentPage === totalPages
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-gray-50'
								}`}
								aria-disabled={currentPage === totalPages}
							/>
						</PaginationItem>

						{/* Last Button */}
						<PaginationItem>
							<PaginationLast
								onClick={handleLast}
								className={`border border-outline-variant rounded-sm cursor-pointer ${
									currentPage === totalPages
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-gray-50'
								}`}
								aria-disabled={currentPage === totalPages}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</div>
	)
}

export default ShopPagination
