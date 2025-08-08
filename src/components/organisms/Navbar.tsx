import makitiLogoWhite from '@/assets/Makiti_logo_primary.svg'
import { Link } from 'rasengan'
import LanguageButton from '../atoms/buttons/LanguageButton'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const NavBar = () => {
	const { t } = useTranslation()
	const { isOpened, setIsOpened, navlinks } = useMenuContext()

	return (
		<header className="fixed left-0 right-0 w-full z-50">
			<nav
				className={`relative px-3 sm:px-8 md:px-[80px] bg-white xl:px-[120px] py-5 w-full flex items-end sm:items-center justify-between shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_4px_4px_rgba(0,0,0,0.12)]`}
			>
				{/* === Logo === */}
				<div className="w-24 sm:w-[120px]">
					{/* <Image */}
					<Link to={'/'}>
						<Image
							src={makitiLogoWhite}
							alt="Makiti logo"
							width={'100%'}
							height={'100%'}
							className="size-full aspect-auto object-contain pointer-events-none select-none"
						/>
					</Link>
				</div>
				{/* === Menu === */}
				<ul
					className={`hidden lg:flex flex-1 justify-center items-center gap-6 text-on-surface-variant text-lg`}
				>
					{navlinks.map((link, index) => (
						<li key={`nav-link-${index}`}>
							<Link
								className="hover:text-primary hover:underline capitalize"
								to={link.href}
							>
								{t(`nav.links.${link.label}`)}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-4 md:gap-8">
					<div className="relative w-40 sm:w-[250px] h-10 rounded-4xl">
						<Input
							type="search"
							placeholder={t('nav.searchBar.placeholder')}
							className="size-full bg-surface-container placeholder:text-lg placeholder:text-outline rounded-4xl pr-10"
						/>
						<SearchIcon className="size-5 absolute top-1/2 -translate-y-1/2 right-3 text-on-surface-variant" />
					</div>

					<ShoppingCartIcon className="size-6 text-on-surface-variant" />

					<span className="hidden sm:inline-block">
						<LanguageButton />
					</span>

					<Button
						variant={'ghost'}
						type="button"
						className="rounded-lg h-max lg:hidden !p-1 text-secondary place-content-center transition-all duration-75 ease-in-out hover:text-secondary hover:bg-primary"
						onClick={() => setIsOpened(!isOpened)}
					>
						<span className="sr-only">mobile Menu</span>
						<MenuIcon className="size-6" />
					</Button>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
