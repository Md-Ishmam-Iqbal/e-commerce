/* eslint-disable react/prop-types */

import filterProductsByCategory from "../Functions/filterProductsByCategory";
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";

import { Link } from "react-router-dom";

const Sidebar = ({ products, categories, sideBarOpen }) => {
  if (!categories || !products) return null;
  else
    return (
      <section className={`sidebar ${sideBarOpen ? "open" : ""}`}>
        {categories.map((category, index) => {
          let filteredProducts = filterProductsByCategory(products, category);
          let capitalizedCategory = capitalizeFirstLetter(category);
          return (
            <div key={index} className="sidebar-category-wrapper">
              <Link
                to={`/${category}`}
                className="sidebar-category no-txt-decoration sidebar-text"
              >
                {capitalizedCategory}
              </Link>
              <div className="sidebar-products-column">
                {filteredProducts.map((product) => {
                  return (
                    <Link
                      key={product.id}
                      to={`/${category}/${product.title}`}
                      className="sidebar-product no-txt-decoration sidebar-text"
                    >
                      {product.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
};

export default Sidebar;
