import FeaturedProducts from '@/components/organisms/home/FeaturedProducts'
import HeroSection from '@/components/organisms/home/HeroSection'
import { PageComponent } from 'rasengan'

const Home: PageComponent = () => {
	return (
		<main className="size-full bg-white flex flex-col items-center font-seravek_regular tracking-normal relative">
			{/* === Hero Section === */}
			<HeroSection />

			{/* === Featured Products === */}
			<FeaturedProducts />
		</main>
	)
}

Home.path = '/:locale?'
Home.metadata = {
	title: 'Home',
	description: 'Home page',
}

export default Home
