/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { Link } from "react-router-dom";

import SearchFilter from "../Components/SearchFilter";
import ExploreCategories from "../Components/ExploreCategories";
import Footer from "../Components/Footer";
import Paths from "../Components/Paths";

function AllProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  const paths = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
  ];

  return (
    <main>
      <SearchFilter categories={categories} />
      <ExploreCategories categories={categories} />
      <Paths paths={paths} />
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
                  <div className="product-title no-txt-decoration">
                    {product.title}
                  </div>
                  <div className="product-category">{category}</div>
                  <div className="product-price no-txt-decoration">
                    {product.price} TK
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}

export default AllProducts;
