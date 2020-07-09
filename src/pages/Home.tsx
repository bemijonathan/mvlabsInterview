import React from "react";
import { RouteComponentProps } from "@reach/router";
import Nav from "../components/Nav";
import Banner from "../components/banner";
import { fetchResources as UseFetch } from "../customhooks/fetchResources";
import { SingleCard } from "../components/singleCard";

export interface Meal {
	strMeal?: string;
	strCategoryThumb: string;
	idMeal: string;
	strCategoryDescription?: string;
	strCategory?: string;
}

export const Home: React.FC<RouteComponentProps> = () => {
	// const [state, setstate] = useState<Meal[]>([]);

	const [data, loading, errors] = UseFetch(
		"https://www.themealdb.com/api/json/v1/1/categories.php",
		"categories"
	);

	const SingleCards = () =>
		data.map((e: Meal, index: number) => {
			return <SingleCard meal={e} key={index} />;
		});
	return (
		<div>
			<Nav />
			<Banner />
			{/* {JSON.stringify(data)} */}
			<h1 className="container mx-auto  px-5 text-3xl font-bold mb-3">
				Categories
			</h1>
			<div className=" container mx-auto  px-5 flex overflow-x-scroll w-full">
				{loading ? (
					<div className="absolute w-full h-full flex items-center justify-center bg-red-200 __overlay">
						<div>
							<div className="lds-dual-ring"></div>
							<h2 className="text-white font-bold"> Loading </h2>
						</div>
					</div>
				) : errors ? (
					"an Error Occured..."
				) : (
					SingleCards()
				)}
			</div>
		</div>
	);
};
