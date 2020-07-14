import { createStore, Store } from "redux";
import { Meal } from "../pages/home";
import { getAllItems } from "../utils/localstorage";
import { favouriteAction } from "./actions";
import { favoritesReducer } from "./reducers";

const preloadedState: Meal[] = getAllItems();

export const store: Store<Meal[], favouriteAction> = createStore(
	favoritesReducer,
	preloadedState,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
