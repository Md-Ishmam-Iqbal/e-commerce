import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import filterProductsByCategory from "../Functions/filterProductsByCategory";
import capitalizeFirstLetter from "../Functions/capitalizeFirstLetter";

import SearchFilter from "../Components/SearchFilter";
import Footer from "../Components/Footer";
import Paths from "../Components/Paths";

// eslint-disable-next-line react/prop-types
function ProductByCategory({ products, categories }) {
  let { category } = useParams();

  let filteredProducts = filterProductsByCategory(products, category);

  const paths = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    {
      title: `${(category = capitalizeFirstLetter(category))}`,
      link: `/${category}`,
    },
  ];

  return (
    <main>
      <SearchFilter categories={categories} />
      <Paths paths={paths} />
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
