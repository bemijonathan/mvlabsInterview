import React from "react";
import "./css/custom.css";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { FooterComponent } from "./components/footer";
import Nav from "./components/Nav";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";

function App() {
	return (
		<div className="App">
			<Nav />
			<Router>
				<Home path="/" />
				<Category path="category/:id" />
				<Product path="product/:id" />
			</Router>
			<FooterComponent />
		</div>
	);
}

export default App;
