import React from "react";
import { Link } from "@reach/router";
import { Meal } from "../pages/home";

export const productCard: React.FC<{ meal: Meal }> = ({ meal }) => {
	return (
		<>
			<div className="p-4 __product_card">
				<Link
					to={`/product/${meal.idMeal}`}
					className="block relative h-48 rounded overflow-hidden"
				>
					<img
						alt="Loading..."
						className="object-cover object-center w-full h-full block"
						src={meal.strMealThumb}
					/>
				</Link>
				<div className="mt-4">
					<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
						CATEGORY
					</h3>
					<h2 className="text-gray-900 title-font text-xs">{meal.strMeal}</h2>
				</div>
			</div>
		</>
	);
};
