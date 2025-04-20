"use client";
import { milestones } from "./milestone";
import { useEffect, useState, useRef } from "react";

const MilestoneTimeline = () => {
	const containerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const scrollToIndex = (index) => {
		const container = containerRef.current;
		const item = container.children[index];
		if (item && container) {
			container.scrollTo({
				top: item.offsetTop,
				behavior: "smooth",
			});
		}
	};

	// Auto-scroll
	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (currentIndex + 1) % milestones.length;
			scrollToIndex(nextIndex);
			setCurrentIndex(nextIndex);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	// Manual-scroll
	const handleScroll = () => {
		const container = containerRef.current;
		const children = Array.from(container.children);
		const scrollTop = container.scrollTop;
		const containerHeight = container.clientHeight;

		const index = children.findIndex((child) => {
			const offsetTop = child.offsetTop;
			return (
				scrollTop >= offsetTop - containerHeight / 2 &&
				scrollTop < offsetTop + containerHeight / 2
			);
		});

		if (index !== -1 && index !== currentIndex) {
			setCurrentIndex(index);
		}
	};
	// <div className="py-12 px-4">
	//   <h2 className="text-3xl font-bold text-center mb-12">Company Milestones</h2>

	//   <div className="max-w-6xl mx-auto">
	//     <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-4">
	//       {milestones.map((milestone, idx) => (
	//         <div
	//           key={idx}
	//           className="snap-center shrink-0 w-72 bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col items-center text-center"
	//         >
	//           <div className="mb-4">{milestone.icon}</div>
	//           <h3 className="text-lg font-bold">{milestone.year}</h3>
	//           <p className="text-blue-600 font-medium">{milestone.title}</p>
	//           <p className="text-gray-500 text-sm mt-2">{milestone.description}</p>
	//         </div>
	//       ))}
	//     </div>
	//   </div>
	// </div>
	return (
		<div className='py-12 px-4'>
			<h2 className='text-3xl font-bold text-center mb-12'>
				Company Milestones
			</h2>

			<div
				ref={containerRef}
				onScroll={handleScroll}
				className='max-w-xl mx-auto h-55 overflow-y-auto scroll-smooth snap-y snap-mandatory rounded-lg'
			>
				{milestones.map((milestone, idx) => (
					<div
						key={idx}
						className='snap-start h-55 p-6 bg-white border border-gray-200 shadow flex items-center'
					>
						<div className='text-blue-600 text-4xl mr-4'>{milestone.icon}</div>
						<div>
							<h3 className='text-xl font-bold'>{milestone.year}</h3>
							<p className='text-lg font-medium'>{milestone.title}</p>
							<p className='text-gray-500 text-sm mt-2'>
								{milestone.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MilestoneTimeline;
