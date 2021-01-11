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
			<p style={({ paddingLeft: "28%" }, { fontSize: "25px" })}>
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
			</p>
			<p style={({ paddingLeft: "28%" }, { fontSize: "25px" })}>
				{product.Model}
			</p>
			<p style={({ paddingLeft: "28%" }, { fontSize: "25px" })}>
				{product.Price}
			</p>
			<br />
			<hr />
			<br />
			<br />
		</Grid>
	);
};

export default withRouter(SingleProduct);
