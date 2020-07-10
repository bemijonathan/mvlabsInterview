import React from "react";
import { Link } from "@reach/router";

export const ShopLayer: React.FC = () => {
	const list = [
		{
			img: "./images/Bullseye-Gradient.svg",
			link: "#",
			text: "Best Sellers",
		},
		{
			img: "./images/Cornered-Stairs.svg",
			link: "#",
			text: "Ship to your Door Step",
		},
		{
			img: "./images/Flat-Mountains.svg",
			link: "#",
			text: "Order Now",
		},
	];
	return (
		<section className="text-gray-700 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					{list.map((e, i) => {
						return (
							<div className="p-4 lg:w-1/3 w-full text-white" key={i}>
								<div
									className="h-full px-8 pt-16 pb-24 rounded-lg __layer_shop overflow-hidden text-center relative"
									style={{ backgroundImage: `url(${e.img})` }}
								>
									<h1 className="title-font sm:text-2xl text-xl font-medium  text-white mb-3">
										{e.text}
									</h1>
									<Link to="#" className=" text-white inline-flex items-center">
										Learn More
										<svg
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
