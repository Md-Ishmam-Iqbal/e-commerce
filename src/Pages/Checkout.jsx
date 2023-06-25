/* eslint-disable react/prop-types */
import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";

function Checkout({ products }) {
  const cart = useContext(CartContext);
  const items = cart.items;

  return (
    <div>
      <h1>Checkout</h1>
      {items.map((item) => {
        return products.map((product) => {
          if (product.id === item.id) {
            return (
              <section key={product.id}>
                <h2>Product Name: {product.title}</h2>
                <h2>Quantity: {item.quantity}</h2>
              </section>
            );
          }
        });
      })}
    </div>
  );
}

export default Checkout;
