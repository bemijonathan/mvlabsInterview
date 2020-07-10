import React from "react";
import { RouteComponentProps } from "@reach/router";
import Banner from "../components/banner";
import { fetchResources as UseFetch } from "../customhooks/fetchResources";
import { SingleCard } from "../components/singleCard";
import { ShopLayer } from "../components/layer";
import { Loading } from "../components/Loading";
export interface Meal {
	strMeal?: string;
	strCategoryThumb: string;
	idMeal: string;
	strCategoryDescription?: string;
	strCategory?: string;
	strMealThumb?: string;
	strInstructions?: string;
}

// let a = {
// 	meals: [
// 		{
// 			idMeal: "52772",
// 			strMeal: "Teriyaki Chicken Casserole",
// 			strCategory: "Chicken",
// 			strArea: "Japanese",
// 			strInstructions:
// 				"Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
// 			strMealThumb:
// 				"https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
// 			strTags: "Meat,Casserole",
// 			strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
// 			strIngredient1: "soy sauce",
// 			strIngredient2: "water",
// 			strIngredient3: "brown sugar",
// 			strIngredient4: "ground ginger",
// 			strIngredient5: "minced garlic",
// 			strIngredient6: "cornstarch",
// 			strIngredient7: "chicken breasts",
// 			strIngredient8: "stir-fry vegetables",
// 			strIngredient9: "brown rice",
// 		},
// 	],
// };

export const Home: React.FC<RouteComponentProps> = () => {
	// const [state, setstate] = useState<Meal[]>([]);

	const [data, loading, errors] = UseFetch(
		"https://www.themealdb.com/api/json/v1/1/categories.php",
		"categories"
	);

	const SingleCards = () =>
		(data as Meal[]).map((e: Meal, index: number) => {
			return <SingleCard meal={e} key={index} />;
		});
	return (
		<div>
			<Banner />
			{/* {JSON.stringify(data)} */}
			<h1 className="container mx-auto  mt-10 px-5 text-3xl font-bold mb-3">
				Categories
			</h1>
			<div
				className=" container mx-auto  px-5 flex overflow-x-scroll w-full h-full"
				style={{ height: "350px" }}
			>
				{loading ? <Loading /> : errors ? "an Error Occured..." : SingleCards()}
			</div>
			<ShopLayer />
		</div>
	);
};
