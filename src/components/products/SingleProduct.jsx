import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
const SingleProduct = (props) => {
	const { product, onDelete, history } = props;
	console.log(props);
	return (
		<Grid item xs={4}>
			<h3>
				{product.Name}{" "}
				{userService.isAdmin() && (
					<>
						<Button
							variant="contained"
							color="dark"
							onClick={(e) => {
								console.log("navigate to update");
								history.push("/products/update/" + product._id);
							}}
						>
							Edit
						</Button>{" "}
						<Button
							variant="contained"
							color="dark"
							onClick={(e) => {
								productService
									.deleteProduct(product._id)
									.then((data) => {
										console.log(data);
										onDelete();
									})
									.catch((err) => {
										console.log(err);
									});
							}}
						>
							Delete
						</Button>
					</>
				)}
			</h3>
			<h3>{product.Model}</h3>
			<h3>{product.Price}</h3>
			<br />
			<hr />
			<br />
			<br />
		</Grid>
	);
};

export default withRouter(SingleProduct);
