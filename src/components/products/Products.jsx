import React from "react";
import SingleProduct from "./SingleProduct";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./../../services/ProductsService";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
	addBtn: {
		position: "absolute",
		right: theme.spacing(5),
	},
}));

const Products = (props) => {
	const [products, setProducts] = React.useState([]);
	const classes = useStyles();

	const getData = () => {
		productService
			.getProducts()
			.then((data) => {
				setProducts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// getData();
	React.useEffect(getData, []);
	// console.log("Inside Products Component");
	const handleNewProductClick = () => {
		console.log(props);
		props.history.push("/products/new");
	};
	return (
		<div>
			<h1>All mmnProducts</h1>
			{userService.isLoggedIn() && (
				<Fab
					color="black"
					aria-label="add"
					className={classes.addBtn}
					onClick={handleNewProductClick}
				>
					<AddIcon />
				</Fab>
			)}
			<br />
			<br />
			<br />
			<p className={classes.addBtn}>Add Product</p>
			{products.length == 0 ? (
				<p>There are no products</p>
			) : (
				<div>
					{products.map((product, index) => (
						<SingleProduct key={index} product={product} onDelete={getData} />
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
