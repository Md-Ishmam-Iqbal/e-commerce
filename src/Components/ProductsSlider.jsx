/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useRef } from "react";

const scrollDistance = 1000;

const ProductsSlider = ({ products }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= scrollDistance;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += scrollDistance;
  };

  const sliderRef = useRef(null);
  const [isLeftScrollPossible, setIsLeftScrollPossible] = useState(false);
  const [isRightScrollPossible, setIsRightScrollPossible] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      setIsLeftScrollPossible(slider.scrollLeft > 0);
      setIsRightScrollPossible(
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth
      );
    };

    slider.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="slider-container">
      <h1 className="slider-title">Featured Products</h1>
      <div className="slider-wrapper noselect">
        <span
          className={`material-symbols-outlined slider-icon ${
            isLeftScrollPossible ? "slider-arrow" : "slider-block"
          }`}
          onClick={slideLeft}
        >
          {isLeftScrollPossible ? "chevron_left" : "block"}
        </span>
        <div id="slider" className="slider" ref={sliderRef}>
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
        <span
          className={`material-symbols-outlined slider-icon ${
            isRightScrollPossible ? "slider-arrow" : "slider-block"
          }`}
          onClick={slideRight}
        >
          {isRightScrollPossible ? "chevron_right" : "block"}
        </span>
      </div>
    </section>
  );
};
export default ProductsSlider;
