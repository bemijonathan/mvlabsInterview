import { Meal } from "../pages/home";
import { favouriteAction } from "./actions";
import {
	removeFromStorage,
	getAllItems,
	clearStorage,
	addToStorage,
} from "../utils/localstorage";
import { actionTypes } from "./actionTypes";

export const favoritesReducer = (
	state: Meal[] = getAllItems(),
	action: favouriteAction
): Meal[] => {
	switch (action.type) {
		case actionTypes.REMOVE_FROM_FAVOURITE:
			removeFromStorage(`${action.payload}`);
			return [...getAllItems()];

		case actionTypes.ADD_TO_FAVOURITE:
			addToStorage(action.payload as Meal);
			return [...getAllItems()];

		case actionTypes.REMOVE_ALL_FAVOURITE:
			clearStorage();
			return [];

		default:
			return [...state];
	}
};
