import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
	<div>
		<h1>Welcome to My Shop</h1>
		<p>
			Explore our collection of products. To start Shopping, click here{" "}
			<Link
				to="/MyShop/shop"
				style={{
					color: "white",
					textDecoration: "none",
					marginRight: "15px",
					backgroundColor: "#007bff", // Optional: Adds background color for better visibility
					padding: "5px 10px", // Optional: Adds padding for better button-like appearance
					borderRadius: "5px", // Optional: Rounds the corners of the button
				}}
			>
				Shop
			</Link>{" "}
		</p>
	</div>
);

export default Home;
