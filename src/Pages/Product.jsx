/* eslint-disable react/prop-types */
// Use React Query with id to display page
import { useParams } from "react-router-dom";

import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";

import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import Paths from "../Components/Paths";

const Product = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const cart = useContext(CartContext);
  let { product } = useParams();

  let productElement = products.find((element) => element.title === product);

  const productQuantity = cart.getProductQuantity(productElement.id);

  const paths = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    {
      title: `${capitalizeFirstLetter(productElement.category)}`,
      link: `/${productElement.category}`,
    },
    {
      title: `${capitalizeFirstLetter(productElement.title)}`,
      link: `/${productElement.category}/${productElement.title}`,
    },
  ];

  return (
    <main>
      <Paths paths={paths} />
      <section key={product.id} className="product-block">
        <div className="product-image-wrapper">
          <img
            className="product-block-image zoom"
            src={productElement.image}
            alt={`Product image of ${productElement.title}`}
          />
        </div>
        <div className="product-block-order noselect">
          <div
            className="quantity"
            style={
              productQuantity === 0
                ? { visibility: "hidden" }
                : { visbility: "visible" }
            }
          >
            Quantity:{" "}
            <button
              onClick={() => cart.decreaseCartQuantity(productElement.id)}
              className="quantity-operator"
            >
              -
            </button>{" "}
            <span className="product-page-quantity">{productQuantity}</span>
            {" in cart "}
            <button
              onClick={() => cart.increaseCartQuantity(productElement.id)}
              className="quantity-operator"
            >
              +
            </button>
          </div>
          {productQuantity === 0 ? (
            <button
              className="cart-btn product-page-cart-btn"
              onClick={() => cart.increaseCartQuantity(productElement.id)}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="cart-btn product-page-remove-btn"
              onClick={() => cart.removeFromCart(productElement.id)}
            >
              Remove
            </button>
          )}
        </div>
        <div className="product-block-details">
          <div className="product-block-title">{productElement.title}</div>
          <div className="product-block-description">
            {capitalizeFirstLetter(productElement.description)}
          </div>
        </div>
        <div className="product-block-rating">
          {`Rating: ${productElement.rating.rate}⭐️ | 
              ${productElement.rating.count} ratings`}
        </div>
        <div className="product-block-price">{productElement.price} TK</div>
      </section>
    </main>
  );
};

export default Product;
