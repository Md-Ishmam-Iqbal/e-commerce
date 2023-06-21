import Loading from "./Loading";

import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";

/* eslint-disable react/prop-types */
const ShoppingCart = ({ cartOpen, products }) => {
  const cart = useContext(CartContext);

  if (!products) {
    return <Loading />;
  }

  return (
    <section
      className={`shopping-cart ${cartOpen ? "shopping-cart-open" : ""}`}
    >
      <h1>Shopping Cart</h1>
      <h3>You have {cart.productsCount} items in your cart</h3>
      {/* {products.map((product) => {
        return (
          <div className="shopping-cart-item" key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
          </div>
        );
      })} */}
    </section>
  );
};

export default ShoppingCart;
