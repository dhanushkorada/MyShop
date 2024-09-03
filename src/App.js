import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "./assets/styles.css";

const App = () => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product, quantity) => {
		const existingItem = cartItems.find((item) => item.id === product.id);
		if (existingItem) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity }]);
		}
	};

	return (
		<Router>
			<Navbar cartItemCount={cartItems.length} />
			<div className="container">
				<Routes>
					<Route path="/MyShop/" element={<Home />} />
					<Route
						path="/MyShop/shop"
						element={<Shop addToCart={addToCart} />}
					/>
					<Route
						path="/MyShop/cart"
						element={<Cart cartItems={cartItems} />}
					/>
					<Route path="/MyShop/*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
