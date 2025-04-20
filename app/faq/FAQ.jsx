"use client";

import { useState } from "react";
import { faqs } from "./questions";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const QuestionsAndAnswers = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className='max-w-4xl mx-auto px-4 py-12'>
			<h2 className='text-3xl font-bold text-center mb-8'>
				Frequently Asked Questions
			</h2>
			<div>
				{faqs.map((faq, idx) => (
					<div
						key={idx}
						className='rounded-lg overflow-hidden border border-gray-200 transition-transform duration-200 hover:scale-[1.01]'
					>
						<button
							onClick={() => toggle(idx)}
							className='w-full text-left px-4 py-3 font-medium flex justify-between items-center hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200'
						>
							<span>{faq.question}</span>

							{/* {
								<ChevronDownIcon
									className={`w-5 h-5 transition-transform duration-200 ${
										openIndex === idx ? "rotate-180" : ""
									}`}
								/>
							} */}
							<motion.div
								animate={{ rotate: openIndex === idx ? 180 : 0 }}
								transition={{
									type: "spring",
									stiffness: 250,
									damping: 20,
								}}
							>
								<ChevronDownIcon className='w-5 h-5 text-gray-600' />
							</motion.div>
						</button>
						<motion.div
							className='overflow-hidden px-6'
							initial={{ maxHeight: 0, opacity: 0 }}
							animate={{
								maxHeight: openIndex === idx ? 200 : 0, // Animate max height
								opacity: openIndex === idx ? 1 : 0, // Fade in/out
							}}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							<p className='text-gray-600'>{faq.answer}</p>
						</motion.div>
						{/* <div
							className={`overflow-hidden transition-all duration-300 ease-in-out ${
								openIndex === idx
									? "max-h-40 opacity-100 py-3 px-4"
									: "max-h-0 opacity-0 px-4"
							}`}
						>
							<p className='text-gray-600'>{faq.answer}</p>
						</div> */}
						{/* {openIndex === idx && (
							<div className='px-4 pb-4 text-gray-600 bg-white'>
								{faq.answer}
							</div>
						)} */}
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionsAndAnswers;
