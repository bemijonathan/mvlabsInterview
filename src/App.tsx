import React from "react";
import "./css/custom.css";
import { Home } from "./pages/Home";
import { Router, RouteComponentProps } from "@reach/router";

let Dash = (props: RouteComponentProps) => <div>Dash</div>;

function App() {
	return (
		<div className="App">
			<Router>
				<Home path="/" />
				<Dash path="dashboard" />
			</Router>
		</div>
	);
}

export default App;
