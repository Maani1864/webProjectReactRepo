import React from "react";
import pic1 from "laptop.jpg";

console.log(pic1);

const LandingPage = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<img src={laptop} alt="laptop" />
		</div>
	);
};

export default LandingPage;
