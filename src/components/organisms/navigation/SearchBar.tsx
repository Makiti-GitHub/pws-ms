import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useNavigate } from 'rasengan'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SearchBar = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [searchQuery, setSearchQuery] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	const inputRef = useRef<HTMLInputElement>(null)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value
		setSearchQuery(query)
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
				navigate(`/shop?search=${searchQuery}`)
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
		<div className="relative w-40 sm:w-[250px] h-10 rounded-4xl">
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

					// if (searchQuery.trim()) {
					//   setShowResults(true);
					// }
				}}
				aria-haspopup="listbox"
				aria-label="Search products"
				onBlur={() => setIsFocused(false)}
				className="size-full bg-surface-container placeholder:text-lg placeholder:text-outline rounded-4xl pr-10"
			/>
			<SearchIcon className="size-5 absolute top-1/2 -translate-y-1/2 right-3 text-on-surface-variant" />
		</div>
	)
}

export default SearchBar
