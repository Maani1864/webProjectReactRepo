import React from "react";

const LandingPage = () => {
	return (
		<div>
			<div class="header">
				<div class="container">
					<div class="row">
						<div class="col-2">
							<h1>Get Something Unique!!</h1>
						</div>
						<div class="col-2">
							<img src="/images/extension.jpeg" alt="extension" />
						</div>
					</div>
				</div>
			</div>
			<div class="category">
				<h2 class="title">Featured Categories</h2>
				<div class="small-container">
					<div class="row">
						<div class="col-3">
							<img src="/images/laptop.jpg" alt="laptop" />
							<h3> Laptop </h3>
						</div>
						<div class="col-3">
							<img src="/images/mi_extension.png" alt="extension" />
							<h3> MI Extension </h3>
						</div>
						<div class="col-3">
							<img src="/images/laptop2.png" alt="laptop" />
							<h3> Laptop </h3>
						</div>
						<div class="col-3">
							<img src="/images/laptop6.png" alt="laptop" />
							<h3> Laptop </h3>
						</div>
						<div class="col-3">
							<img src="/images/extension1.png" alt="extension" />
							<h3> Extension </h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
