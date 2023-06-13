/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";
import { Link } from "react-router-dom";

const ExploreCategories = ({ categories }) => {
  return (
    <section className="explore-categories">
      <h1 className="categories-title">Shop by Category</h1>
      <div className="categories-grid">
        {categories.map((category, index) => {
          let categoryCapitalized = capitalizeFirstLetter(category);
          return (
            <Link
              to={`/${category}`}
              key={index}
              className="category-button no-txt-decoration"
            >
              {categoryCapitalized}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreCategories;
