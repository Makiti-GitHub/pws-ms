import { cn } from '@/lib/utils'
import { FC } from 'react'

interface TagProps {
	className?: string
	label: string
}
const Tag: FC<TagProps> = ({ label, className }) => {
	return (
		<span
			className={cn('border-[0.5px] border-outline-variant px-3 py-1 rounded-sm', className)}
		>
			{label}
		</span>
	)
}

export default Tag
