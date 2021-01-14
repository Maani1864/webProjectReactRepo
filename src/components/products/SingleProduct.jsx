import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

const useStyles = makeStyles(() => ({
	pFonts: {
		paddingLeft: "28%",
		fontSize: "22px",
	},
}));

const SingleProduct = (props) => {
	const classes = useStyles();
	const { product, onDelete, history } = props;
	return (
		<Grid item xs={4}>
			<img src={product.Picture} alt="Pic" width="10%"></img>
			<p>Product_Name: </p>
			<p className={classes.pFonts}>
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
			<p>Product_Model: </p>
			<p className={classes.pFonts}>{product.Model}</p>
			<p>Product_Price: </p>
			<p className={classes.pFonts}>{product.Price}</p>
			<br />
			<hr />
			<br />
			<br />
		</Grid>
	);
};

export default withRouter(SingleProduct);
