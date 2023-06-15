/* eslint-disable react/prop-types */
import { useState } from "react";

const Ads = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    if (slide === 0) {
      setSlide(data.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  return (
    <section className="ads">
      <div className="carousel">
        <span
          className="material-symbols-outlined arrow arrow-left noselect"
          onClick={previousSlide}
        >
          arrow_left_alt
        </span>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={slide === index ? "slide" : "slide slide-hidden"}
            >
              <img src={item.src} alt={item.alt} className="slide-image" />
            </div>
          );
        })}
        <span
          className="material-symbols-outlined arrow arrow-right noselect"
          onClick={nextSlide}
        >
          arrow_right_alt
        </span>
        <span className="indicators">
          {data.map((__, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
};

export default Ads;
