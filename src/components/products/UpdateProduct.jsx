import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
import Admin from "../auth/Admin";

const UpdateProduct = (props) => {
	const [Name, setName] = React.useState("");
	const [Model, setModel] = React.useState("");
	const [Price, setPrice] = React.useState(0);
	const id = props.match.params.id;
	React.useEffect(() => {
		productService.getSingleProduct(id).then((data) => {
			setName(data.Name);
			setModel(data.Model);
			setPrice(data.Price);
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
				</Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={3}></Grid>
				<Grid item xs={9}>
					<Button
						variant="contained"
						color="primary"
						onClick={(e) => {
							productService
								.updateProduct(id, { Name, Model, Price })
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
