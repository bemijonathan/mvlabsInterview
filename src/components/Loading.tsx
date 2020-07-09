import React from "react";

export const Loading: React.FC = () => {
	return (
		<div
			className="absolute w-full flex items-center justify-center bg-red-200 __overlay left-0 contianer"
			style={{ height: "350px" }}
		>
			<div>
				<div className="lds-dual-ring"></div>
				<h2 className="text-white font-bold"> Loading </h2>
			</div>
		</div>
	);
};
