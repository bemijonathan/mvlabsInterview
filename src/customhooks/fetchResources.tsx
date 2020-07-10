/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Meal } from "../pages/Home";

type output = [Meal[] | Meal, boolean, boolean];

export const fetchResources = (
	url: string,
	type: "categories" | "meals"
): output => {
	const [data, setData] = useState<Meal | Meal[]>([]);
	const [Loading, setLoading] = useState<boolean>(true);
	const [Errors, setError] = useState<boolean>(false);

	useEffect(() => {
		const fetchMeal = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				let a = await response.json();
				if (a[type]) {
					setData(a[type]);
				} else {
					setData([]);
				}
				console.log(a[type]);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		};
		fetchMeal();
	}, [setLoading, setData, type, url]);

	return [data, Loading, Errors];
};
