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
	heading: {
		textAlign: "center",
	},
	products: {
		paddingLeft: "4%",
	},
	addprdct: {
		position: "absolute",
		right: theme.spacing(5),
		paddingTop: "4%",
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
			<h1 className={classes.heading}>Available Products</h1>
			{userService.isLoggedIn() && (
				<div>
					<Fab
						color="black"
						aria-label="add"
						className={classes.addBtn}
						onClick={handleNewProductClick}
					>
						<AddIcon />
					</Fab>
				</div>
			)}
			<br />

			<br />
			<br />
			{products.length == 0 ? (
				<h2 className={classes.heading}>There are no products</h2>
			) : (
				<div className={classes.products}>
					{products.map((product, index) => (
						<SingleProduct key={index} product={product} onDelete={getData} />
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
