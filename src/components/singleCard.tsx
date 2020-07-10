import React from "react";
import { Link } from "@reach/router";
import { Meal } from "../pages/Home";

export const SingleCard: React.FC<{ meal: Meal }> = ({ meal }) => {
	return (
		<div className="p-4 mb-6 __card flex items-center mr-6 rounded">
			<div className="rounded-lg h-64 overflow-hidden">
				<img
					alt="content"
					className="object-contain object-center h-full w-full"
					src={meal.strCategoryThumb}
				/>
			</div>
			<div className="m-2">
				<h2 className="text-xl text-gray-900 mt-5">
					<b> {meal.strCategory}</b>
				</h2>
				<div className=" leading-relaxed mt-2 text-xs">
					<p>{meal.strCategoryDescription?.slice(0, 50) + "..."} </p>
					<Link
						to={`category/${meal.strCategory}`}
						className=" text-indigo-500 inline-flex items-center mt-3"
					>
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
			</div>
		</div>
	);
};
