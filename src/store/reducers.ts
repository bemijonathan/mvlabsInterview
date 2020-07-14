import { Meal } from "../pages/home";
import { favouriteAction } from "./actions";
import {
	removeFromStorage,
	getAllItems,
	clearStorage,
	addToStorage,
} from "../utils/localstorage";

export const favoritesReducer = (
	state: Meal[] = getAllItems(),
	action: favouriteAction
): Meal[] => {
	switch (action.type) {
		case "REMOVE_FROM_FAVOURITE":
			removeFromStorage(`${action.payload}`);
			return [...getAllItems()];

		case "ADD_TO_FAVOURITE":
			addToStorage(action.payload as Meal);
			return [...getAllItems()];

		case "REMOVE_ALL_FAVOURITE":
			clearStorage();
			return [];

		default:
			console.log("nothing");
			return [...state];
	}
};
