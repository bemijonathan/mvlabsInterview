import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import { connect } from "react-redux";
import { Meal } from "../pages/home";

type proptypes = {
	length?: number;
};

const Nav: React.FC<proptypes> = (props) => {
	const [term, setTerm] = useState<string>("");

	const Submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (term.trim().length) {
			navigate("/search?=" + term);
			setTerm("");
		}
	};
	return (
		<div>
			<header className="text-gray-700 body-font __nav">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link
						to="/"
						className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
					>
						<span className="md:ml-3 text-xl text-white">tailblocks</span>
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to="/favourites" className="md:mr-5 text-white">
							Favourites
							<span className="ml-3 bg-white h-8 w-8 rounded-full text-sm px-2 text-red-500">
								{props.length}
							</span>
						</Link>
					</nav>
					<form
						className="flex md:flex-no-wrap flex-wrap md:justify-start justify-center"
						onSubmit={(e) => Submit(e)}
					>
						<input
							className="bg-gray-100 rounded md:mr-4 xd:mb-3 border border-gray-400 focus:outline-none focus:border-red-500 w-full px-4"
							placeholder="Placeholder"
							type="search"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setTerm(e.target.value)
							}
						/>
						<button
							type="submit"
							className="inline-flex items-center text-white border-2 border-white py-1 px-3 focus:outline-none hover:bg-white hover:text-red-500 rounded text-base mt-0"
						>
							Button
						</button>
					</form>
				</div>
			</header>
		</div>
	);
};

const mapStateToProps = (state: Meal[]): { length: number } => ({
	length: state.length,
});

export default connect(mapStateToProps)(Nav);
