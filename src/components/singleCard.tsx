import React from "react";
import { Link } from "@reach/router";
import { Meal } from "../pages/Home";

export const SingleCard: React.FC<{ meal: Meal }> = ({ meal }) => {
	return (
		<div className="p-4 mb-6 __card">
			<div className="rounded-lg h-64 overflow-hidden">
				<img
					alt="content"
					className="object-contain object-center h-full w-full"
					src={meal.strCategoryThumb}
				/>
			</div>
			<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
				<b> {meal.strCategory}</b>
			</h2>
			<p className="text-base leading-relaxed mt-2">
				Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.
				Gastropub street art beard dreamcatcher neutra, ethical XOXO
				lumbersexual.
			</p>
			<Link to="#" className="text-indigo-500 inline-flex items-center mt-3">
				Learn More
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="w-4 h-4 ml-2"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</Link>
		</div>
	);
};
