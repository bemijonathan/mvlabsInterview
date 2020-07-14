import { Meal } from "../pages/home";
import { actionTypes } from "./actionTypes";

export type favouriteAction = {
	type: string;
	payload?: Meal | string;
};

export const addToFavourites = (payload: Meal): favouriteAction => ({
	type: actionTypes.ADD_TO_FAVOURITE,
	payload,
});

export const removeFormFavourites = (payload: string): favouriteAction => ({
	type: actionTypes.REMOVE_FROM_FAVOURITE,
	payload,
});

export const removeAll = (): favouriteAction => ({
	type: actionTypes.REMOVE_ALL_FAVOURITE,
});

export const getALL = (): favouriteAction => ({
	type: actionTypes.GET_ALL_FAVOURITE,
});
