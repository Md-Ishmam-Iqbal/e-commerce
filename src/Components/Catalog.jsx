/* eslint-disable react/prop-types */

import filterProductsByCategory from "../Functions/filterProductsByCategory";
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";

import { Link } from "react-router-dom";

const Catalog = ({ products, categories }) => {
  return (
    <section className="catalog">
      <h1 className="catalog-title">Catalog</h1>
      <div className="catalog-grid">
        {categories.map((category, index) => {
          let filteredProducts = filterProductsByCategory(products, category);
          let capitalizedCategory = capitalizeFirstLetter(category);
          return (
            <div key={index} className="catalog-category-wrapper">
              <Link
                to={`/${category}`}
                className="catalog-category-text no-txt-decoration"
              >
                {capitalizedCategory}
              </Link>
              {filteredProducts.map((product) => {
                return (
                  <div key={product.id} className="catalog-products-column">
                    <Link
                      to={`/${category}/${product.title}`}
                      className="catalog-product no-txt-decoration"
                    >
                      {product.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;
