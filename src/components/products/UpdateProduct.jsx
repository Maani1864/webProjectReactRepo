import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
import Admin from "../auth/Admin";

const UpdateProduct = (props) => {
	const [Name, setName] = React.useState("");
	const [Model, setModel] = React.useState("");
	const [Price, setPrice] = React.useState(0);
	const [Picture, setPicture] = React.useState("");
	const id = props.match.params.id;
	React.useEffect(() => {
		productService.getSingleProduct(id).then((data) => {
			setName(data.Name);
			setModel(data.Model);
			setPrice(data.Price);
			setPicture(data.Picture);
		});
	}, []);
	return (
		<Admin>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h1>Update Product</h1>
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
						label="picture"
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
						color="dark"
						onClick={(e) => {
							productService
								.updateProduct(id, { Name, Model, Price, Picture })
								.then((data) => {
									console.log(data);
									props.history.push("/products");
								})
								.catch((err) => {
									console.log(err);
								});
						}}
					>
						Update
					</Button>
				</Grid>
			</Grid>
		</Admin>
	);
};

export default UpdateProduct;
