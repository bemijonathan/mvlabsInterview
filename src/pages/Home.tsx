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
