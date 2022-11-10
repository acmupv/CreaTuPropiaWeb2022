import { FiArrowUpRight } from 'react-icons/fi';

export default function Work({}) {
	return (
		<div
			id="work"
			className="relative flex w-screen flex-col items-center justify-center bg-gray-50"
		>
			<div className="flex w-full max-w-7xl flex-col items-start px-8 py-20 text-black">
				<div className="flex w-full flex-col items-start space-y-10">
					<h2 className="text-5xl">Work</h2>

					<div className="flex w-full flex-col gap-16">
						{/* WORK ITEM */}

						<div className="flex w-full flex-col gap-6 border-t border-gray-300 py-8 md:flex-row md:gap-16">
							<div className="flex flex-1 flex-col space-y-5">
								<div className="flex flex-col items-start space-y-1">
									<span className="font-semibold uppercase">Internxt</span>
									<span className="text-sm text-gray-500">
										July 2020&nbsp;&nbsp;—&nbsp;&nbsp; Present
									</span>
								</div>
								<a
									target="_blank"
									href="https://internxt.com/"
									className="flex flex-row items-center space-x-1 underline-offset-4 hover:underline"
								>
									<span>Visit site</span>
									<FiArrowUpRight />
								</a>
							</div>

							<div className="flex flex-1 flex-col space-y-1">
								<span className="font-medium uppercase">
									Lead Product Designer
								</span>
								<div className="flex flex-col space-y-4 text-gray-500">
									<span>
										Led the creation, documentation, and implementation of the
										design system in Internxt, using Figma, Storybook, and
										TailwindCSS, achieving a 60% reduction in frontend
										development time and code review.
									</span>
									<span>
										Led UX Research, UI prototyping, Service Design and UI
										Design for multiple new products. Helped Frontend team
										during the development and testing of the applications.
									</span>
								</div>
							</div>
						</div>

						{/* END WORK ITEM */}
					</div>
				</div>
			</div>
		</div>
	);
}
