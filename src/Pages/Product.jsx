/* eslint-disable react/prop-types */
// Use React Query with id to display page
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import removeProblematicProducts from "../Functions/removeProblematicProducts";

import { useShoppingCart } from "../Context/ShoppingCartContext";

import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";

const Product = ({ products }) => {
  const { getItemQuantity } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);

  function increaseCartQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseCartQuantity() {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }
  function removeFromCart() {
    if (quantity !== 0) setQuantity(0);
  }

  let { product } = useParams();

  removeProblematicProducts(products);

  let productElement = products.find((element) => element.title === product);

  return (
    <div>
      <main>
        <section className="route">
          <Link to={`/`} className="route-label no-txt-decoration box-shadow">
            Home
          </Link>
          &nbsp;{">"}&nbsp;
          <Link
            to={`/products`}
            className="route-label no-txt-decoration box-shadow"
          >
            Products
          </Link>
          &nbsp;{">"}&nbsp;
          <Link
            to={`/${productElement.category}`}
            className="route-label no-txt-decoration box-shadow"
          >
            {`${capitalizeFirstLetter(productElement.category)}`}
          </Link>
          &nbsp;{">"}&nbsp;
          <Link
            to={`/${productElement.category}/${productElement.title}`}
            className="route-label no-txt-decoration box-shadow"
          >
            {`${capitalizeFirstLetter(productElement.title)}`}
          </Link>
        </section>
        <section key={product.id} className="product-block">
          {console.log(productElement)}
          {getItemQuantity(productElement.id)}
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
                quantity === 0
                  ? { visibility: "hidden" }
                  : { visbility: "visible" }
              }
            >
              Quantity:{" "}
              <button
                onClick={decreaseCartQuantity}
                className="quantity-operator"
              >
                -
              </button>{" "}
              <span className="product-page-quantity">{quantity}</span>
              {" in cart "}
              <button
                onClick={increaseCartQuantity}
                className="quantity-operator"
              >
                +
              </button>
            </div>
            {quantity === 0 ? (
              <button
                className="cart-btn product-page-cart-btn"
                onClick={increaseCartQuantity}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="cart-btn product-page-remove-btn"
                onClick={removeFromCart}
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
    </div>
  );
};

export default Product;
