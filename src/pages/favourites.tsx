import React, { Dispatch } from "react";
import { Meal } from "./home";
import { RouteComponentProps } from "@reach/router";
import { productCard as Products } from "../components/productCard";
import { connect } from "react-redux";
import {
	favouriteAction,
	removeAll,
	removeFormFavourites,
} from "../store/actions";

interface propsType extends RouteComponentProps {
	state?: Meal[];
	removeAll: Function;
	removeItem: Function;
}

const favourites: React.FC<propsType> = (props: propsType) => {
	const removeItem = (id: string) => {
		props.removeItem(id);
	};

	const removeAll = () => {
		props.removeAll();
	};

	return (
		<>
			<div className="container mx-auto my-10">
				<h2 className="text-center font-bold">Favourites</h2>
				<div
					className=" container mx-auto items-center text-center px-5 flex flex-wrap w-full h-full"
					style={{ minHeight: "350px" }}
				>
					{props.state?.length ? (
						props.state.map((e: Meal, i: number) => {
							return (
								<div className="md:w-1/4 w-full" key={i}>
									<Products meal={e} />
									<button
										className="bg-red-500 text-white px-5 rounded py-3"
										onClick={() => removeItem(e.idMeal)}
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
				{props.state?.length ? (
					<div className="text-center">
						<button
							className="bg-red-500 text-white px-5 rounded py-3 w-1/3 text-center mt-10"
							onClick={removeAll}
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

const mapStateToProps = (
	meals: Meal[]
): {
	state: Meal[];
} => ({
	state: meals,
});

const mapDispatchToActions = (dispatch: Dispatch<favouriteAction>) => ({
	removeAll() {
		dispatch(removeAll());
	},
	removeItem(meal: string) {
		dispatch(removeFormFavourites(meal));
	},
});

export default connect(mapStateToProps, mapDispatchToActions)(favourites);
