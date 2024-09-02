import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Shop = ({ addToCart }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<h2>Shop</h2>
			<div className="product-list">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))}
			</div>
		</div>
	);
};

export default Shop;
