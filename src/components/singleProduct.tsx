import React, { useState, useEffect, Dispatch } from "react";
import { Meal } from "../pages/home";
import {
	addToFavourites,
	favouriteAction,
	removeFormFavourites,
} from "../store/actions";
import { connect } from "react-redux";

type singleProductTypes = {
	addToFavourite: Function;
	meal: Meal;
	meals: Meal[];
	removeFromStorage: Function;
};

const SingleProduct: React.FC<singleProductTypes> = (
	props: singleProductTypes
) => {
	const [showMore, setShowMore] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		//check if item is in local storage and set active if active
		let x = props.meals.find((e: Meal) => e.idMeal === props.meal.idMeal);
		if (x) {
			setActive(true);
		}
	}, [setActive, props.meal.idMeal, props.meals]);

	const changeFavourite = () => {
		if (!active) {
			props.addToFavourite(props.meal);
		} else {
			props.removeFromStorage(props.meal.idMeal);
			setActive(!active);
		}
	};

	// addToStorage
	return (
		<section className="text-gray-700 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-5/6 mx-auto flex items-center flex-wrap">
					<img
						alt="Loading..."
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						src={props.meal.strMealThumb}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h2 className="text-sm title-font text-gray-500 tracking-widest">
							{props.meal.strCategory}
						</h2>
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
							{props.meal.strMeal}
						</h1>
						<div className="flex mb-4">
							<span className="flex items-center">
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-orange-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<span className="text-gray-600 ml-3">4 Reviews</span>
							</span>
						</div>
						<p className="leading-relaxed text-sm">
							{!showMore
								? props.meal.strInstructions?.slice(0, 1000) + "...."
								: props.meal.strInstructions}
						</p>

						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
						<div className="flex">
							<div>
								<button
									onClick={() => setShowMore((showMore) => !showMore)}
									className="rounded h-10 px-5 bg-red-500 text-white"
								>
									{!showMore ? "Read More" : "Hide More"}
								</button>
							</div>
							<button
								onClick={changeFavourite}
								className="ml-auto rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
							>
								<svg
									fill={active ? "red" : "grey"}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
const mapDispatchToProps = (dispatch: Dispatch<favouriteAction>) => ({
	addToFavourite(meal: Meal) {
		dispatch(addToFavourites(meal));
	},
	removeFromStorage(meal: string) {
		dispatch(removeFormFavourites(meal));
	},
});

const mapStateToProps = (state: Meal[]) => ({
	meals: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
