import { FiCalendar, FiArrowUpRight } from 'react-icons/fi';

export default function Contact({}) {
	return (
		<div
			id="contact"
			className="relative flex w-screen flex-col items-center justify-center bg-white"
		>
			<div className="flex w-full max-w-7xl flex-col items-start px-8 py-20 text-black">
				<div className="flex w-full flex-col items-start gap-10 md:flex-row md:items-center md:justify-center md:gap-32">
					<h2 className="text-7xl font-medium">
						Let's
						<br />
						connect
					</h2>

					<div className="flex flex-row flex-wrap items-center gap-3 md:gap-6">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/alvarohernandezperales/"
							className="flex flex-row items-center space-x-3 whitespace-nowrap rounded-full bg-black px-8 py-4 text-white transition-all duration-100 ease-out hover:scale-105 active:scale-99"
						>
							<span>Message me on LinkedIn</span>
							<FiArrowUpRight className="scale-110" />
						</a>

						<a
							target="_blank"
							href="https://calendly.com/"
							className="flex flex-row items-center space-x-3 whitespace-nowrap rounded-full bg-gray-100 px-8 py-4 text-black backdrop-blur-xl transition-all duration-100 ease-out hover:bg-gray-200 active:bg-gray-300"
						>
							<span>Book a meeting</span>
							<FiCalendar className="scale-110" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
