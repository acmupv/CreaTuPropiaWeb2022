import { FiArrowUpRight } from 'react-icons/fi';

export default function Workitem({ props }) {
	return (
		<div className="flex w-full flex-col gap-6 border-t border-gray-300 py-8 md:flex-row md:gap-16">
			<div className="flex flex-1 flex-col space-y-5">
				<div className="flex flex-col items-start space-y-1">
					<span className="font-semibold uppercase">{props.company}</span>
					<span className="text-sm text-gray-500">
						{props.dateRange.from}&nbsp;&nbsp;—&nbsp;&nbsp;{props.dateRange.to}
					</span>
				</div>
				{props.link && (
					<a
						target="_blank"
						href={props.link.url}
						className="flex flex-row items-center space-x-1 underline-offset-4 hover:underline"
					>
						<span>{props.link.title}</span>
						<FiArrowUpRight />
					</a>
				)}
			</div>

			<div className="flex flex-1 flex-col space-y-1">
				<span className="font-medium uppercase">{props.title}</span>
				<div className="flex flex-col space-y-4 text-gray-500">
					{props.description.map((text) => (
						<span>{text}</span>
					))}
				</div>
			</div>
		</div>
	);
}
