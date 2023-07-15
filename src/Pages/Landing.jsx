/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchProducts from "../Functions/fetchProducts";
import fetchCategories from "../Functions/fetchCategories";
import removeProblematicProducts from "../Functions/removeProblematicProducts";

import data from "../data/carouselData.json";

import ExploreCategories from "../Components/ExploreCategories";
import ProductsSlider from "../Components/ProductsSlider";
import Catalog from "../Components/Catalog";
import Ads from "../Components/Ads";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

import { useEffect } from "react";

function LandingPage() {
  const productResults = useQuery(["products"], fetchProducts, {
    staleTime: Infinity,
  });
  const categoriesResults = useQuery(["categories"], fetchCategories, {
    staleTime: Infinity,
  });

  const { data: products } = productResults;
  const { data: categories } = categoriesResults;

  useEffect(() => {
    if (products || categories) {
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [products, categories]);

  if (categoriesResults.isLoading || productResults.isLoading) {
    return <Loading />;
  }

  // Removed problematic API data elements
  const filteredProducts = removeProblematicProducts(products);

  return (
    <div>
      <main>
        <section className="hero-image-container">
          <div className="hero-image-text">Check out our new collection</div>
          <Link to={`/products`} className="see-products">
            <div className="see-products-text">See Products</div>
          </Link>
        </section>
        <ProductsSlider products={filteredProducts} />
        <ExploreCategories categories={categories} />
        <Catalog products={filteredProducts} categories={categories} />
        <Ads data={data} />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
