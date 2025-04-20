"use client";
import { useEffect, useRef, useState } from "react";
import { milestones } from "./milestone";

const MilestoneTimeline = () => {
	const containerRef = useRef(null);
	const itemRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const scrollToIndex = (index) => {
		const container = containerRef.current;
		const itemHeight = itemRef.current?.offsetHeight || 200;

		container.scrollTo({
			top: index * itemHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (currentIndex + 1) % milestones.length;
			scrollToIndex(nextIndex);
			setCurrentIndex(nextIndex);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	const handleScroll = () => {
		const container = containerRef.current;
		const itemHeight = itemRef.current?.offsetHeight || 200;

		const index = Math.round(container.scrollTop / itemHeight);
		if (index !== currentIndex) {
			setCurrentIndex(index);
		}
	};

	return (
		<div className='max-w-4xl mx-auto px-4 py-12'>
			<h2 className='text-3xl font-bold text-center mb-12'>
				Company Milestones
			</h2>
			<div
				ref={containerRef}
				onScroll={handleScroll}
				className='timeline-container h-56 overflow-y-auto scroll-smooth snap-y snap-mandatory rounded-lg'
			>
				{milestones.map((milestone, idx) => (
					<div
						key={idx}
						ref={idx === 0 ? itemRef : null}
						className='snap-start h-56 p-6 bg-white border border-gray-200 shadow flex items-center'
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
