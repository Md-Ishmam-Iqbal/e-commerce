import Loading from "./Loading";

import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShoppingCart = ({ cartOpen, products }) => {
  const cart = useContext(CartContext);

  const navigate = useNavigate();

  function getTotalCost() {
    let totalCost = 0;

    let cartProducts = cart.items;

    cartProducts.map((cartItem) => {
      products.map((product) => {
        if (product.id === cartItem.id) {
          totalCost += product.price * cartItem.quantity;
        }
      });
    });

    return totalCost;
  }

  if (!products) {
    return <Loading />;
  }

  return (
    <div className={`shopping-cart ${cartOpen ? "shopping-cart-open" : ""}`}>
      <h1>Shopping Cart</h1>
      {cart.productsCount === 0 ? (
        <h3>You have {cart.productsCount} items in your cart</h3>
      ) : (
        <h3>Total items: {cart.productsCount}</h3>
      )}

      {cart.items.map((item) => {
        return products.map((product) => {
          if (product.id === item.id) {
            return (
              <section key={product.id} className="cart-items">
                <div className="cart-item-container">
                  <Link
                    to={`/${product.category}/${product.title}`}
                    className="cart-item no-txt-decoration"
                  >
                    <h2>{product.title}</h2>
                  </Link>
                  <div className="cart-quantity">
                    <button
                      onClick={() => cart.decreaseCartQuantity(product.id)}
                      className="cart-quantity-operator minus"
                    >
                      -
                    </button>{" "}
                    <span className="item-quantity">{item.quantity}</span>
                    <button
                      onClick={() => cart.increaseCartQuantity(product.id)}
                      className="cart-quantity-operator plus"
                    >
                      +
                    </button>
                  </div>
                  <h3 className="cart-subtotal">
                    <span>Subtotal</span>
                    {product.price * item.quantity} TK
                  </h3>
                </div>
              </section>
            );
          }
        });
      })}
      {cart.productsCount !== 0 ? (
        <div>
          <div className="remove-all-container">
            <button onClick={cart.removeAllFromCart} className="remove-all">
              Remove All
            </button>
          </div>
          <h3 className="total-bill">
            <span>Total</span>
            {getTotalCost().toFixed(2)} TK
          </h3>
          <div className="cart-footer">
            <button
              onClick={() => navigate("/")}
              className="continue-shopping cart-footer-button"
            >
              Back to Shopping
            </button>
            <button className="checkout cart-footer-button">
              Checkout
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
