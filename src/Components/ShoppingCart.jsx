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
                  <div key={product.id} className="cart-item-container">
                    <Link
                      to={`/${product.category}/${product.title}`}
                      className="cart-item no-txt-decoration"
                    >
                      <h2>{product.title}</h2>
                      <h3>{product.price} TK</h3>
                    </Link>
                    <div className="cart-quantity">
                      <button
                        onClick={() => cart.decreaseCartQuantity(product.id)}
                        className="cart-quantity-operator plus"
                      >
                        -
                      </button>{" "}
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        onClick={() => cart.increaseCartQuantity(product.id)}
                        className="cart-quantity-operator minus"
                      >
                        +
                      </button>
                    </div>
                  </div>
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
