import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import AllProducts from "./Pages/AllProducts";
import ProductByCategory from "./Pages/ProductByCategory";
import Product from "./Pages/Product";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";

import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import ShoppingCart from "./Components/ShoppingCart";

const queryClient = new QueryClient({
  queries: {
    staleTime: Infinity,
  },
});

function App() {
  const [globalCategories, setGlobalCategories] = useState([]);
  const [globalProducts, setGlobalProducts] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const toggleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const getGlobalCategories = (categories) => {
    setGlobalCategories(categories);
  };

  const getGlobalProducts = (products) => {
    setGlobalProducts(products);
  };
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ShoppingCartProvider>
          <Navbar
            toggleSideBar={toggleSideBar}
            toggleCartOpen={toggleCartOpen}
          />
          <Sidebar
            products={globalProducts}
            categories={globalCategories}
            sideBarOpen={sideBarOpen}
          />
          <ShoppingCart cartOpen={cartOpen} products={globalProducts} />
          <div className={`content ${sideBarOpen ? "left" : ""}`}>
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
          </div>
        </ShoppingCartProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
