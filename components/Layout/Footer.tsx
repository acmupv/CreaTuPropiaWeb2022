export default function Footer({}) {
	return (
		<div
			id="footer"
			className="relative flex w-screen flex-col items-center justify-center bg-gray-50"
		>
			<div className="flex w-full max-w-7xl flex-col items-start justify-between gap-16 px-8 py-16 text-black md:flex-row">
				<div className="flex flex-shrink-0 flex-col items-start space-y-2">
					<a
						href="#home"
						className="flex flex-shrink-0 flex-row items-center space-x-2"
					>
						<img src="/logos/logo_black.png" className="h-8 w-8" />
						<span className="text-2xl">Álvaro Hernández</span>
					</a>

					<span className="text-sm text-gray-500">
						© 2022. Built by Álvaro Hernández
					</span>
				</div>

				<div className="flex w-full flex-row flex-wrap items-stretch justify-between gap-10 text-base sm:gap-16 md:flex-row md:justify-end lg:gap-32">
					<div className="flex flex-col gap-1">
						<a
							href="#home"
							className="hover:text-gray-800 active:text-gray-500"
						>
							Home
						</a>
						<a
							href="#about"
							className="hover:text-gray-800 active:text-gray-500"
						>
							About me
						</a>
						<a
							href="#work"
							className="hover:text-gray-800 active:text-gray-500"
						>
							Work
						</a>
						<a
							href="#contact"
							className="hover:text-gray-800 active:text-gray-500"
						>
							Contact
						</a>
					</div>

					<div className="flex flex-col gap-1">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/alvarohernandezperales/"
							className="hover:text-gray-800 active:text-gray-500"
						>
							LinkedIn
						</a>
						<a
							target="_blank"
							href="https://codepen.io/Varo"
							className="hover:text-gray-800 active:text-gray-500"
						>
							Codepen
						</a>
						<a
							target="_blank"
							href="https://github.com/aboredvaro"
							className="hover:text-gray-800 active:text-gray-500"
						>
							Github
						</a>
					</div>

					<div className="flex flex-col gap-1">
						<a
							target="_blank"
							href="/docs/alvaro_hernandez_CV.pdf"
							className="hover:text-gray-800 active:text-gray-500"
						>
							See resume
						</a>
						<a
							target="_blank"
							href="https://calendly.com/"
							className="hover:text-gray-800 active:text-gray-500"
						>
							Book a meeting
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
