import { heroCarousel } from '@/data/mock'
import MotionIconButton from '@/components/atoms/buttons/MotionIconButton'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon, PauseIcon, PlayIcon } from 'lucide-react'
import { Link } from 'rasengan'
import { useTranslation } from 'react-i18next'

const slidersVariants = {
	hover: {
		scale: 1.2,
	},
}
const dotsVariants = {
	initial: {
		y: 0,
	},
	active: {
		backgroundColor: '#F9B122',
		width: 30,
	},
	inactive: {
		backgroundColor: '#C4C7CA',
		//   transition: { type: "spring", stiffness: 1000, damping: "10" },
		transition: { duration: 2 },
	},
	hover: {
		scale: 1.1,
		transition: { duration: 0.2 },
	},
}

const HeroSection = () => {
	const { t } = useTranslation()
	const [isPlaying, setIsPlaying] = useState(true)
	const [videoLoaded, setVideoLoaded] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)
	const sectionRef = useRef<HTMLDivElement>(null)
	const isInView = useInView(sectionRef, { margin: '-50%' })

	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState('left')

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		if (isInView && isPlaying) {
			video.play().catch(console.error)
		} else {
			video.pause()
		}
	}, [isInView, isPlaying])

	const toggleVideo = () => {
		const video = videoRef.current
		if (!video) return

		if (video.paused) {
			video.play().catch(console.error)
			setIsPlaying(true)
		} else {
			video.pause()
			setIsPlaying(false)
		}
	}

	// Auto-slide every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext()
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	const handleNext = () => {
		setDirection('right')
		setCurrentIndex((prevIndex) => (prevIndex + 1 === heroCarousel.length ? 0 : prevIndex + 1))
	}

	const handlePrevious = () => {
		setDirection('left')

		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? heroCarousel.length - 1 : prevIndex - 1,
		)
	}

	const handleDotClick = (index: number) => {
		setDirection(index > currentIndex ? 'right' : 'left')
		setCurrentIndex(index)
	}

	return (
		<section
			ref={sectionRef}
			className={`space-y-12 sm:space-y-24 relative bg-secondary h-screen w-screen overflow-hidden pt-[150px] pb-16`}
		>
			{/* Fallback Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 -z-30" />

			{/* Video Background */}
			<video
				ref={videoRef}
				className="absolute inset-0 w-full h-full object-cover z-20"
				autoPlay
				muted
				loop
				playsInline
				onLoadedData={() => setVideoLoaded(true)}
				onError={() => setVideoLoaded(false)}
			>
				<source src={heroCarousel[0].video} type="video/mp4" />
			</video>

			{/* Overlay */}
			<div className="absolute h-screen inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-30" />

			<div className="absolute z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center text-white gap-10">
				<AnimatePresence>
					{heroCarousel[currentIndex] && (
						<>
							<motion.div
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -50, opacity: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								key={heroCarousel[currentIndex].title}
								className="flex flex-col gap-6 items-center w-screen px-10 sm:px-[300px]"
							>
								<motion.h1 className="font-seravek_bold text-center text-4xl lg:text-7xl xl:text-[80px] leading-10 xl:leading-20">
									{/* {t(
											`pages.home.sections.hero.item${
												currentIndex + 1
											}.title`,
										)} */}
									{t(heroCarousel[currentIndex].title)}
								</motion.h1>
								<motion.p className="font-seravek_bold text-center text-lg sm:text-xl lg:text-[26px] leading-normal">
									{/* {t(
											`pages.home.sections.hero.item${
												currentIndex + 1
											}.content`,
										)} */}
									{t(heroCarousel[currentIndex].desc)}
								</motion.p>
								<Link to="#">
									<MotionIconButton
										// label={t(`pages.home.sections.hero.cta`)}
										label={t(heroCarousel[currentIndex].cta)}
										className="rounded-[40px] px-4 py-3 lg:px-8 lg:py-4 h-max sm:text-xl lg:text-2xl"
									/>
								</Link>
							</motion.div>
						</>
					)}
				</AnimatePresence>

				<div>
					<AnimatePresence>
						{heroCarousel.length > 0 ? (
							<div className="w-max flex gap-4 items-center justify-between">
								<motion.div
									variants={slidersVariants}
									whileHover="hover"
									role="button"
									className="cursor-pointer"
									onClick={(e) => {
										handlePrevious()
										e.preventDefault()
										e.stopPropagation()
									}}
								>
									<ArrowLeftIcon className="size-7 text-white" />
								</motion.div>
								<div className="flex gap-2">
									{heroCarousel.map((_, index) => (
										<motion.div
											key={`carousel-dot-${index}`}
											className={`size-3 rounded-xl ${
												currentIndex === index
													? 'bg-primary'
													: 'bg-outline-variant'
											}`}
											onClick={(e) => {
												handleDotClick(index)
												e.stopPropagation()
											}}
											initial="initial"
											animate={currentIndex === index ? 'active' : 'inactive'}
											whileHover="hover"
											role="button"
											variants={dotsVariants}
										/>
									))}
								</div>
								<motion.div
									variants={slidersVariants}
									whileHover="hover"
									role="button"
									className="cursor-pointer"
									onClick={(e) => {
										handleNext()
										e.preventDefault()
										e.stopPropagation()
									}}
								>
									<ArrowRightIcon className="size-7 text-white" />
								</motion.div>
							</div>
						) : null}
					</AnimatePresence>
				</div>
			</div>

			{/* Video Controls */}
			<AnimatePresence>
				{videoLoaded && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3 }}
						className="absolute bottom-6 right-6 z-30"
					>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={toggleVideo}
							className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
						>
							{isPlaying ? (
								<PauseIcon className="w-5 h-5" />
							) : (
								<PlayIcon className="w-5 h-5 ml-0.5" />
							)}
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default HeroSection
