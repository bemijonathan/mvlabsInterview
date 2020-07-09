import React from "react";
import { RouteComponentProps } from "@reach/router";

interface RouteParams extends RouteComponentProps {
	id?: string;
}

export const Product: React.FC<RouteParams> = (props) => {
	return <div> Product </div>;
};
