import React from "react";
import { Grid, Button, makeStyles } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

const useStyles = makeStyles(() => ({
	pFonts: {
		paddingLeft: "28%",
		fontSize: "18px",
	},
	pding: {
		paddingLeft: "17%",
	},
	bttn: {
		marginLeft: "20%",
	},
}));

const SingleProduct = (props) => {
	const classes = useStyles();
	const { product, onDelete, history } = props;
	return (
		<Grid item xs={4}>
			<img
				className={classes.pding}
				src={product.Picture}
				alt="Pic"
				width="90%"
			></img>
			<p>Product_Name: </p>
			<p className={classes.pFonts}>{product.Name}</p>
			<p>Product_Model: </p>
			<p className={classes.pFonts}>{product.Model}</p>
			<p>Product_Price: </p>
			<p className={classes.pFonts}>{product.Price}</p>
			<br />
			{userService.isAdmin() && (
				<>
					<Button
						className={classes.bttn}
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
			<br />
			<br />
			<hr />
			<br />
			<br />
		</Grid>
	);
};

export default withRouter(SingleProduct);
