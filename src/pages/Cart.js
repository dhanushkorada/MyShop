import React from "react";

const Cart = ({ cartItems }) => (
	<div>
		<h2>Shopping Cart</h2>
		{cartItems.map((item) => (
			<div key={item.id}>
				<h4>{item.title}</h4>
				<p>
					{item.quantity} x {item.price} $
				</p>
			</div>
		))}
		<button>Proceed to Checkout</button>
	</div>
);

export default Cart;
