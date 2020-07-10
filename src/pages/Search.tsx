import React from "react";
import { RouteComponentProps } from "@reach/router";
import { productCard as Products } from "../components/productCard";
import { fetchResources as UseFetch } from "../customhooks/fetchResources";
import { Meal } from "./Home";
import { Loading } from "../components/Loading";

interface RouteParams extends RouteComponentProps {
	id?: string;
	search?: string;
}

export const Search: React.FC<RouteParams> = (props) => {
	let term = props.location?.search?.replace("?=", "");
	console.log(term);
	const [data, loading, errors] = UseFetch(
		"https://www.themealdb.com/api/json/v1/1/search.php?s=" + term,
		"meals"
	);

	const SingleCards = () =>
		(data as Meal[]).map((e: Meal, index: number) => {
			return (
				<div className="w-1/4">
					<Products meal={e} key={index} />
				</div>
			);
		});

	return (
		<>
			<h1 className="container text-3xl my-10 mx-auto px-5">
				Search Results for {term}
			</h1>
			<div
				className="flex flex-wrap container mx-auto items-center relative"
				style={{ minHeight: "350px" }}
			>
				{loading ? (
					<Loading />
				) : errors ? (
					"an Error Occured..."
				) : (data as Meal[]).length ? (
					SingleCards()
				) : (
					<h2> No Result Found</h2>
				)}
			</div>
		</>
	);
};
