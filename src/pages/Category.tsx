import React from "react";
import { RouteComponentProps } from "@reach/router";
import { productCard as Products } from "../components/productCard";
import { fetchResources as UseFetch } from "../customhooks/fetchResources";
import { Meal } from "./Home";
import { Loading } from "../components/Loading";

interface RouteParams extends RouteComponentProps {
	id?: string;
}

export const Category: React.FC<RouteParams> = (props) => {
	const [data, loading, errors] = UseFetch(
		"https://www.themealdb.com/api/json/v1/1/filter.php?c=" + props.id,
		"meals"
	);

	const SingleCards = () =>
		data.map((e: Meal, index: number) => {
			return <Products meal={e} key={index} />;
		});

	return (
		<>
			<h1 className="container text-3xl my-10 mx-auto px-5">
				Category {props.id}
			</h1>
			<div
				className="flex flex-wrap container mx-auto items-center justify-between relative"
				style={{ minHeight: "350px" }}
			>
				{loading ? <Loading /> : errors ? "an Error Occured..." : SingleCards()}
			</div>
		</>
	);
};
