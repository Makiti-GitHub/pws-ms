import FeaturedProductsSection from '@/components/organisms/home/FeaturedProductsSection'
import HeroSection from '@/components/organisms/home/HeroSection'
import OurServicesSection from '@/components/organisms/home/ourServicesSection'
import PartnersSection from '@/components/organisms/home/PartnersSection'
import { PageComponent } from 'rasengan'

const Home: PageComponent = () => {
	return (
		<main className="size-full bg-white flex flex-col items-center font-seravek_regular tracking-normal relative">
			{/* === Hero Section === */}
			<HeroSection />

			{/* === Partners === */}
			<PartnersSection />

			{/* === Featured Products === */}
			<FeaturedProductsSection />

			{/* === Our Services === */}
			<OurServicesSection />
		</main>
	)
}

Home.path = '/:locale?'
Home.metadata = {
	title: 'Home',
	description: 'Home page',
}

export default Home
