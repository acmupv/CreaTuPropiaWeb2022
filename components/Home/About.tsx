export default function About({}) {
	return (
		<div
			id="about"
			className="relative flex w-screen flex-col items-center justify-center bg-white"
		>
			<div className="flex w-full max-w-7xl flex-col items-start px-8 py-20 text-black lg:py-32">
				<div className="flex flex-col items-start space-y-10">
					<h2 className="text-5xl">About me</h2>

					<div className="flex flex-col items-stretch gap-16 text-xl font-light lg:flex-row lg:text-2xl">
						<p className="flex-1">
							I've been a product designer with 4+ years of experience, and in
							that time I've helped small startups design their first product
							and design teams to create consistent and scalable design systems.
							I've worked with all user platforms and with all sorts of clients.
						</p>

						<p className="flex-1">
							My design philosophy is straightforward. No matter who the client
							is or the project, one thing always remains the same: it's all
							about understanding people. You have to figure out what they need
							and want, then create something that meets those needs and
							desires.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
