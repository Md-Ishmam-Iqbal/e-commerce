import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [];

  return (
    <section className="testimonials">
      <div className="carousel">
        <div className="inner">
          <div className="carousel-item">
            <div></div>
            <img src="" alt="" className="carousel-img" />
            <div className="carousel-item-text">description</div>
          </div>
        </div>
      </div>
      <h1>Testimonials Carousel</h1>
      <h1>Wow amazing site</h1>
    </section>
  );
};

export default Testimonials;
