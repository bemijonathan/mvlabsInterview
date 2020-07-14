import { Meal } from "../pages/home";

export type favouriteAction = {
	type: string;
	payload?: Meal | string;
};

export const addToFavourites = (payload: Meal): favouriteAction => ({
	type: "ADD_TO_FAVOURITE",
	payload,
});

export const removeFormFavourites = (payload: string): favouriteAction => ({
	type: "REMOVE_FROM_FAVOURITE",
	payload,
});

export const removeAll = (): favouriteAction => ({
	type: "REMOVE_ALL_FAVOURITE",
});

export const getALL = (): favouriteAction => ({
	type: "GET_ALL_FAVOURITE",
});

// export const AddToFavourites = (payload: Meal): favouriteAction => ({
// 	type: "ADD_TO_FAVOURITE",
// 	payload,
// });
