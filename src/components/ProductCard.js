import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
	const [quantity, setQuantity] = useState(1);

	const increment = () => setQuantity(quantity + 1);
	const decrement = () => quantity > 1 && setQuantity(quantity - 1);

	return (
		<div className="product-card">
			<h3>{product.title}</h3>
			<p>{product.price} $</p>
			<input
				type="number"
				value={quantity}
				onChange={(e) => setQuantity(parseInt(e.target.value))}
				min="1"
			/>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={() => addToCart(product, quantity)}>
				Add To Cart
			</button>
		</div>
	);
};

export default ProductCard;
