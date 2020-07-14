import React from "react";
import "./css/custom.css";
import { Home } from "./pages/home";
import { Router, RouteComponentProps } from "@reach/router";
import { FooterComponent } from "./components/footer";
import Nav from "./components/nav";
import { Category } from "./pages/category";
import { Product } from "./pages/product";
import Favourites from "./pages/favourites";
import { Search } from "./pages/search";
import { store } from "./store";
import { Provider } from "react-redux";

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
			<Provider store={store}>
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
			</Provider>
		</div>
	);
}

export default App;
