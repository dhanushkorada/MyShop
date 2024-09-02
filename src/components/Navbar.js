import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItemCount }) => (
	<nav>
		<Link to="/">Home</Link>
		<Link to="/shop">Shop</Link>
		<Link to="/cart">
			<span>Cart ({cartItemCount})</span>
		</Link>
	</nav>
);

export default Navbar;
