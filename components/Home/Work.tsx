import work from '../../data/work.json';
import Workitem from './Workitem';

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
						{work.map((job) => (
							<Workitem
								props={job}
								key={`${job.company}-${job.dateRange.from}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
