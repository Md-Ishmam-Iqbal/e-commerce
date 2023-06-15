/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { Link } from "react-router-dom";

const ProductsSlider = ({ products }) => {
  return (
    <section className="slider-container">
      <h1 className="slider-title">Featured Products</h1>
      <div className="slider-wrapper noselect">
        <span className="material-symbols-outlined slider-arrow">
          chevron_left
        </span>
        <div id="slider" className="slider">
          {products.map((product) => {
            let capitalizedCategory = capitalizeFirstLetter(product.category);
            return (
              <Link
                className="no-txt-decoration slider-item"
                to={`/${product.category}/${product.title}`}
                key={product.id}
              >
                <img src={product.image} alt="" className="slider-image zoom" />
                <div className="slider-labels">{capitalizedCategory}</div>
              </Link>
            );
          })}
        </div>
        <span className="material-symbols-outlined slider-arrow">
          chevron_right
        </span>
      </div>
    </section>
  );
};
export default ProductsSlider;
