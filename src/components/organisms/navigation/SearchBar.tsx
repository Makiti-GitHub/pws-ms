import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useLocation, useNavigate, useSearchParams } from 'rasengan'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SearchBar = () => {
	const { pathname } = useLocation()
	const [urlParams] = useSearchParams()

	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const [searchQuery, setSearchQuery] = useState(() => urlParams.get('search') ?? '')
	const [isFocused, setIsFocused] = useState(false)

	const inputRef = useRef<HTMLInputElement>(null)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value
		setSearchQuery(query)
		if (!query.trim()) {
			urlParams.delete('search')
			navigate(`${pathname}?${urlParams.toString()}`, { replace: true })
		}
		// navigate(`/shop?search=${query}`);
	}

	// Handle keyboard navigation
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// if (!showResults || searchResults.length === 0) return;

		switch (e.key) {
			//   case 'ArrowDown':
			//     e.preventDefault();
			//     setSelectedIndex(prev =>
			//       prev < searchResults.length - 1 ? prev + 1 : 0
			//     );
			//     break;
			//   case 'ArrowUp':
			//     e.preventDefault();
			//     setSelectedIndex(prev =>
			//       prev > 0 ? prev - 1 : searchResults.length - 1
			//     );
			//     break;
			case 'Enter':
				e.preventDefault()
				// if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
				//   const selectedProduct = searchResults[selectedIndex];
				// }
				// const query = e.target.value;
				if (!searchQuery.trim()) return
				navigate(`/${i18n.language}/shop?search=${searchQuery}`)
				break
			case 'Escape':
				// setShowResults(false);
				inputRef.current?.blur()
				break
		}
	}

	// Auto-focus shortcut (Ctrl+K or Cmd+K)
	useEffect(() => {
		const handleKeyboardShortcut = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
				e.preventDefault()
				inputRef.current?.focus()
			}
		}

		document.addEventListener('keydown', handleKeyboardShortcut)
		return () => document.removeEventListener('keydown', handleKeyboardShortcut)
	}, [])

	return (
		<div className="relative flex-1 lg:flex-none w-40 sm:w-[250px] lg:w-[175px] xl:w-[300px] 2xl:w-[350px] h-10 rounded-4xl">
			<Input
				ref={inputRef}
				role="searchbox"
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				type="text"
				value={searchQuery}
				placeholder={`${t('nav.searchBar.placeholder')}... (Ctrl+K or Cmd+K)`}
				onFocus={() => {
					setIsFocused(true)
				}}
				aria-haspopup="listbox"
				aria-label="Search products"
				onBlur={() => setIsFocused(false)}
				className="size-full bg-surface-container placeholder:text-outline rounded-4xl pr-10 placeholder:text-sm sm:placeholder:text-base"
			/>
			<Button
				variant={'ghost'}
				onClick={(e) => {
					if (!searchQuery.trim()) return
					navigate(`/${i18n.language}/shop?search=${searchQuery}`)
					e.preventDefault()
				}}
				className="absolute !p-0 size-max top-1/2 -translate-y-1/2 right-3 hover:cursor-pointer hover:bg-transparent"
			>
				{/* {searchQuery.trim() ? (
					<XIcon className="size-5 text-on-surface-variant" />
				) : ( */}
				<SearchIcon className="size-5 text-on-surface-variant" />
				{/* )} */}
			</Button>
		</div>
	)
}

export default SearchBar
