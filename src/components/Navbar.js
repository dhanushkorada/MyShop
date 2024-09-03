import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItemCount }) => (
	<nav>
		<Link to="/MyShop/">Home</Link>
		<Link to="/MyShop/shop">Shop</Link>
		<Link to="/MyShop/cart">
			<span>Cart ({cartItemCount})</span>
		</Link>
	</nav>
);

export default Navbar;
