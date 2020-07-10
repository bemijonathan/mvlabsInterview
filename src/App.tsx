import React from "react";
import "./css/custom.css";
import { Home } from "./pages/Home";
import { Router, RouteComponentProps } from "@reach/router";
import { FooterComponent } from "./components/footer";
import Nav from "./components/Nav";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";
import { Favourites } from "./pages/Favourites";
import { Search } from "./pages/Search";

const NotFound: React.FC<RouteComponentProps> = () => {
	return (
		<div className="h-screen container pt-20">
			<h1 className="text-center font-bold text-3xl"> Page Not Found </h1>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Nav />
			<Router>
				<NotFound default={true} />
				<Home path="/" />
				<Category path="category/:id" />
				<Product path="product/:id" />
				<Favourites path="favourites" />
				<Search path="search" />
			</Router>
			<FooterComponent />
		</div>
	);
}

export default App;
