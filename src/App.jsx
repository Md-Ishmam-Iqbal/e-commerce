import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import AllProducts from "./Pages/AllProducts";
import ProductByCategory from "./Pages/ProductByCategory";
import Product from "./Pages/Product";

import { useState } from "react";

const queryClient = new QueryClient({
  queries: {
    staleTime: Infinity,
  },
});

function App() {
  const [globalCategories, setGlobalCategories] = useState([]);
  const [globalProducts, setGlobalProducts] = useState([]);

  const getGlobalCategories = (categories) => {
    setGlobalCategories(categories);
  };

  const getGlobalProducts = (products) => {
    setGlobalProducts(products);
  };
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  getGlobalCategories={getGlobalCategories}
                  getGlobalProducts={getGlobalProducts}
                />
              }
            />
            <Route
              path="/products"
              element={
                <AllProducts
                  products={globalProducts}
                  categories={globalCategories}
                />
              }
            />
            <Route
              path="/:category"
              element={
                <ProductByCategory
                  products={globalProducts}
                  categories={globalCategories}
                />
              }
            />
            <Route
              path="/:category/:product"
              element={<Product products={globalProducts} />}
            />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
