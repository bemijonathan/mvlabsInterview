import React from "react";
import { RouteComponentProps } from "@reach/router";
import { fetchResources as useFetch } from "../customhooks/fetchResources";
import { Loading } from "../components/Loading";
import SingleProduct from "../components/singleProduct";
import { Meal } from "./home";

interface RouteParams extends RouteComponentProps {
	id?: string;
}

export const Product: React.FC<RouteParams> = (
	props: React.PropsWithChildren<RouteParams>
) => {
	const [data, loading, errors] = useFetch(
		"https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + props.id,
		"meals"
	);

	return (
		<div
			className=" container mx-auto  px-5 flex overflow-x-scroll w-full h-full"
			style={{ minHeight: "350px" }}
		>
			{loading ? (
				<Loading />
			) : errors ? (
				"an Error Occured..."
			) : (
				<SingleProduct meal={data[0] as Meal} />
			)}
		</div>
	);
};
