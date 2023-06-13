/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { Link } from "react-router-dom";

import SearchFilter from "../Components/SearchFilter";
import ExploreCategories from "../Components/ExploreCategories";

function AllProducts({ products, categories }) {
  const handleButtonClick = (event) => {
    // Prevent the click event from propagating to the link
    event.stopPropagation();
  };

  return (
    <div>
      <SearchFilter categories={categories} />
      <ExploreCategories categories={categories} />
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
      </section>
      <section className="products-grid">
        {products.map((product) => {
          let category = product.category;
          category = capitalizeFirstLetter(category);
          return (
            <div key={product.id} className="product-box-container">
              <Link
                to={`/${product.category}/${product.title}`}
                className="product-box"
              >
                <img
                  className="product-image"
                  src={product.image}
                  alt={`Product image of ${product.title}`}
                />
                <div className="product-details">
                  <div className="product-title">{product.title}</div>
                  <div className="product-category">{category}</div>
                  <div className="product-price">{product.price} TK</div>
                </div>
              </Link>
              <button className="cart-btn" onClick={handleButtonClick}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </section>
      <footer>
        <div className="bottom"></div>
      </footer>
    </div>
  );
}

export default AllProducts;
