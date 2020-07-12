import React, { useReducer } from "react";
import {
	clearStorage,
	getAllItems,
	removeFromStorage,
} from "../utils/localstorage";
import { Meal } from "./Home";
import { RouteComponentProps } from "@reach/router";
import { productCard as Products } from "../components/productCard";

function reducer(
	state: Meal[],
	action: { type: string; payload?: string }
): Meal[] {
	switch (action.type) {
		case "REMOVE":
			removeFromStorage(`${action.payload}`);
			const items = getAllItems();
			return [...items];
		case "REMOVE_ALL":
			console.log("remove all");
			clearStorage();
			return [];
		default:
			console.log("nothing");
			return [];
	}
}

export const Favourites: React.FC<RouteComponentProps> = () => {
	const initialState = getAllItems();

	const [state, dispatch] = useReducer<
		(
			state: Meal[],
			action: {
				type: string;
				payload?: string;
			}
		) => Meal[]
	>(reducer, initialState);

	return (
		<>
			<div className="container mx-auto my-10">
				<h2 className="text-center font-bold">Favourites</h2>
				<div
					className=" container mx-auto items-center text-center px-5 flex flex-wrap w-full h-full"
					style={{ minHeight: "350px" }}
				>
					{state.length ? (
						(state as Meal[]).map((e: Meal, i: number) => {
							return (
								<div className="md:w-1/4 w-full" key={i}>
									<Products meal={e} />
									<button
										className="bg-red-500 text-white px-5 rounded py-3"
										onClick={() =>
											dispatch({ type: "REMOVE", payload: `${e.idMeal}` })
										}
									>
										Remove
									</button>
								</div>
							);
						})
					) : (
						<p className="text-center">"You do not have any Favourite Meal"</p>
					)}
				</div>
				{state.length ? (
					<div className="text-center">
						<button
							className="bg-red-500 text-white px-5 rounded py-3 w-1/3 text-center mt-10"
							onClick={() => dispatch({ type: "REMOVE_ALL" })}
						>
							Delete All
						</button>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};
