/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faChevronLeft, faChevronRight);

const ProductsSlider = ({ products }) => {
  return (
    <section className="slider-container">
      <h1 className="slider-title">Featured Products</h1>
      <div className="slider-wrapper noselect">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => {
            console.log("left");
          }}
          className="slider-arrow"
        />
        <div id="slider" className="slider">
          {products.map((product) => {
            let capitalizedCategory = capitalizeFirstLetter(product.category);
            return (
              <Link
                className="no-txt-decoration"
                to={`/${product.category}/${product.title}`}
                key={product.id}
              >
                <img src={product.image} alt="" className="slider-image zoom" />
                <div className="slider-labels">{capitalizedCategory}</div>
              </Link>
            );
          })}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => {
            console.log("right");
          }}
          className="slider-arrow"
        />
      </div>
    </section>
  );
};
export default ProductsSlider;
