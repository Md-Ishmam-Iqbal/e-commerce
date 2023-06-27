import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import filterProductsByCategory from "../Functions/filterProductsByCategory";
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";

import SearchFilter from "../Components/SearchFilter";
import Footer from "../Components/Footer";

// eslint-disable-next-line react/prop-types
function ProductByCategory({ products }) {
  let { category } = useParams();

  let filteredProducts = filterProductsByCategory(products, category);

  return (
    <main>
      <SearchFilter />
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
        &nbsp;{">"}&nbsp;
        <Link
          to={`/${category}`}
          className="route-label no-txt-decoration box-shadow"
        >
          {`${(category = capitalizeFirstLetter(category))}`}
        </Link>
      </section>
      <section className="products-grid">
        {filteredProducts.map((product) => {
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

export default ProductByCategory;
