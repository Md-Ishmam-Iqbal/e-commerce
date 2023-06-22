import Loading from "./Loading";

import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
      {cart.items.map((item) => {
        return (
          <div key={item.id}>
            {products.map((product) => {
              if (product.id === item.id) {
                return (
                  <Link
                    to={`/${product.category}/${product.title}`}
                    key={product.id}
                    className="cart-item no-txt-decoration"
                  >
                    <h2>{product.title}</h2>
                    <h3>{product.price} TK</h3>
                    <h3>Quantity: {item.quantity}</h3>
                  </Link>
                );
              }
            })}
          </div>
        );
      })}
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
