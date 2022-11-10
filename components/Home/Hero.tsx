import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';

export default function Hero({}) {
	return (
		<div
			id="home"
			className="relative flex min-h-screen w-screen flex-col items-center justify-center"
		>
			<img
				className="absolute h-full w-screen object-cover object-center"
				draggable="false"
				src="/images/bg/bg.png"
			/>

			<div className="absolute top-0 left-0 z-10 flex h-28 w-screen flex-row bg-gradient-to-b from-black/30 to-black/0 text-white">
				<div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-8">
					<a href="#home" className="flex flex-shrink-0">
						<img src="/logos/logo_white.png" className="h-10 w-10" />
					</a>

					<div className="hidden flex-row items-center space-x-10 lg:flex">
						<a href="#home">Home</a>
						<a href="#about">About</a>
						<a href="#work">Work</a>
						<a href="#contact">Contact</a>
					</div>
				</div>
			</div>

			<div className="z-0 flex w-full max-w-7xl flex-col items-start space-y-8 px-8 pt-16 pb-12 text-white sm:space-y-12 sm:pt-28 lg:py-48">
				<div className="flex flex-col items-start space-y-2 sm:space-y-5">
					<div className="rounded-full bg-black/15 px-4 py-2 text-xs text-white md:text-sm">
						PRODUCT DESIGNER
					</div>

					<h1 className="text-3xl sm:text-4xl md:text-6xl">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/alvarohernandezperales/"
							className="bg-gradient-to-br from-white/75 via-white/100 to-white/75 bg-clip-text font-semibold text-transparent drop-shadow-xl"
						>
							Álvaro Hernández
						</a>{' '}
						<span className="font-extralight">
							is a Product Designer working with startups to create great
							products and brands.
						</span>
					</h1>
				</div>

				<div className="flex flex-row flex-wrap gap-4 text-xl lg:text-2xl">
					<a
						target="_blank"
						href="https://www.linkedin.com/in/alvarohernandezperales/"
						className="flex flex-row items-center space-x-3 whitespace-nowrap rounded-full bg-white px-8 py-4 text-black transition-all duration-100 ease-out hover:scale-105 active:scale-99"
					>
						<span>Work with me</span>
						<FiArrowUpRight className="scale-110" />
					</a>

					<a
						href="#about"
						className="flex flex-row items-center space-x-3 whitespace-nowrap rounded-full bg-white/15 px-8 py-4 text-white backdrop-blur-xl transition-all duration-100 ease-out hover:bg-white/20 active:bg-white/25"
					>
						<span>Find more</span>
						<FiArrowDown className="scale-110" />
					</a>
				</div>
			</div>
		</div>
	);
}
