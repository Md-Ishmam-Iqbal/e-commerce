/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchProducts from "../Functions/fetchProducts";
import fetchCategories from "../Functions/fetchCategories";
import removeProblematicProducts from "../Functions/removeProblematicProducts";

import slides from "../Data/carouselData.json";

import ExploreCategories from "../Components/ExploreCategories";
import ProductsSlider from "../Components/ProductsSlider";
import Catalog from "../Components/Catalog";
import Ads from "../Components/Ads";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";

import { useEffect } from "react";

function LandingPage({ getGlobalProducts, getGlobalCategories }) {
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
      getGlobalProducts(products);
      getGlobalCategories(categories);
    }
  }, [getGlobalProducts, products, getGlobalCategories, categories]);

  if (categoriesResults.isLoading || productResults.isLoading) {
    return <Loading />;
  }

  // removed problematic api data elements
  removeProblematicProducts(products);

  return (
    <div>
      <main>
        <section className="hero-image-container">
          <div className="hero-image-text">Check out our new collection</div>
          <Link to={`/products`} className="see-products">
            <div className="see-products-text">See Products</div>
          </Link>
        </section>
        <ProductsSlider products={products} />
        <ExploreCategories categories={categories} />
        <Catalog products={products} categories={categories} />
        <Ads data={slides} />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
