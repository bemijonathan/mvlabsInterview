import { Meal } from "../pages/Home";

export const removeFromStorage = (mealId: string) => {
	const items = getAllItems();
	let item = items.filter((e) => {
		return e.idMeal !== mealId;
	});
	localStorage.setItem("favourites", JSON.stringify(item));
};

export const clearStorage = () => {
	localStorage.clear();
};

export const itemExists = (mealId: string): boolean => {
	const items = getAllItems();
	const item = items.find((e) => {
		return e.idMeal === mealId;
	});

	console.log(item, items);
	if (item) return true;
	else return false;
};

export const getAllItems = (): Meal[] => {
	const meals = localStorage.getItem("favourites");
	if (meals) {
		return JSON.parse(meals);
	} else {
		return [];
	}
};
export const addToStorage = (meal: Meal): void => {
	let items = getAllItems();
	items.push(meal);
	localStorage.setItem("favourites", JSON.stringify(items));
};
