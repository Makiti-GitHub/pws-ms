import makitiLogoWhite from '@/assets/Makiti_logo_primary.svg'
import { Link } from 'rasengan'
import LanguageButton from '../atoms/buttons/LanguageButton'
import Image from '@rasenganjs/image'
import { useTranslation } from 'react-i18next'
import { useMenuContext } from '@/hooks/guard/ContextGuard'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from '../ui/button'

const NavBar = () => {
	const { t } = useTranslation()
	const { isOpened, setIsOpened, navlinks } = useMenuContext()

	return (
		<header className="fixed left-0 right-0 w-full z-50">
			<nav
				className={`relative px-3 sm:px-8 md:px-[80px] bg-white xl:px-[120px] py-5 w-full flex items-center justify-between`}
			>
				{/* === Logo === */}
				<div className="w-20 sm:w-[120px]">
					{/* === Background Images === */}
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

				<div className="flex items-center gap-4 sm:gap-8">
					<div className="w-24 sm:w-[250px] h-8 sm:h-12 bg-surface-container rounded-4xl" />

					<ShoppingCartIcon className="size-6 text-on-surface-variant" />

					<LanguageButton />

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
