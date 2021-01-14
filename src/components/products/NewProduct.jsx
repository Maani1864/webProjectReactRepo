import React from "react";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
import Auth from "../auth/Auth";

const useStyles = makeStyles(() => ({
	heading: {
		textAlign: "center",
		paddingTop: "2%",
	},
}));

const NewProduct = (props) => {
	const classes = useStyles();
	const [Name, setName] = React.useState("");
	const [Model, setModel] = React.useState("");
	const [Price, setPrice] = React.useState(0);
	const [Picture, setPicture] = React.useState("");
	return (
		<Auth>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h1 className={classes.heading}>Add Product</h1>
				</Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={6}>
					<TextField
						label="name"
						fullWidth
						value={Name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<TextField
						label="model"
						fullWidth
						value={Model}
						onChange={(e) => {
							setModel(e.target.value);
						}}
					/>
					<TextField
						label="price"
						fullWidth
						value={Price}
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>
					<TextField
						label="add image address"
						fullWidth
						value={Picture}
						onChange={(e) => {
							setPicture(e.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={9}>
					<Button
						variant="contained"
						color="primary"
						onClick={(e) => {
							productService
								.addProduct({ Name, Model, Price, Picture })
								.then((data) => {
									console.log(data);
									props.history.push("/products");
								})
								.catch((err) => {
									console.log(err);
								});
						}}
					>
						Add New
					</Button>
				</Grid>
			</Grid>
		</Auth>
	);
};

export default NewProduct;
