import React from "react";
import { Link } from "@reach/router";

const Nav: React.FC = () => {
	return (
		<div>
			<header className="text-gray-700 body-font __nav">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link
						to="/"
						className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
					>
						<span className="ml-3 text-xl text-white">tailblocks</span>
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to="/first" className="mr-5 text-white">
							First Link
						</Link>
						<Link to="/second" className="mr-5 text-white">
							Second Link
						</Link>
					</nav>
					<div className="flex md:justify-start justify-center">
						<input
							className="bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4"
							placeholder="Placeholder"
							type="search"
						/>
						<button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
							Button
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Nav;
