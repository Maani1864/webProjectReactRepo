import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
	heading: {
		textAlign: "center",
		paddingTop: "2%",
	},
	pFonts: {
		paddingLeft: "28%",
		fontSize: "14px",
	},
}));

const ContactUs = () => {
	const classes = useStyles();
	return (
		<div>
			<h1 className={classes.heading}>Contact Us</h1>
			<br />
			<br />
			<br />
			<p className={classes.pFonts}>Contact No: +92xxx xxxxxxx</p>
			<br />
			<hr style={{ width: "15%", marginLeft: 0 }} />
			<br />
			<p className={classes.pFonts}>Gmail: xxxxxxx@gmail.com</p>
			<br />
			<p className={classes.pFonts}>Yahoo: xxxxxxx@yahoo.com</p>
		</div>
	);
};

export default ContactUs;
