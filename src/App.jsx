import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import AllProducts from "./Pages/AllProducts";
import ProductByCategory from "./Pages/ProductByCategory";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import Sidebar from "./Components/Sidebar";
import ShoppingCart from "./Components/ShoppingCart";

import { CartProvider } from "./Context/ShoppingCartContext";

import { useState } from "react";

const queryClient = new QueryClient({
  queries: {
    staleTime: Infinity,
  },
});

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const toggleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar
            toggleSideBar={toggleSideBar}
            toggleCartOpen={toggleCartOpen}
          />
          <Sidebar sideBarOpen={sideBarOpen} />
          <ShoppingCart cartOpen={cartOpen} />
          <div className={`content ${sideBarOpen ? "left" : ""}`}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/:category" element={<ProductByCategory />} />
              <Route path="/:category/:product" element={<Product />} />
              <Route
                path="/checkout"
                element={<Checkout sideBarOpen={sideBarOpen} />}
              />
            </Routes>
          </div>
        </QueryClientProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
