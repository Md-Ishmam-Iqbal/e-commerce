/* eslint-disable react/prop-types */
import { useContext, createContext } from "react";

const ShoppingCartContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  // const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {
    console.log(id, "get item quant");
  }

  function increaseCartQuantity(id) {
    console.log(id, "increase quant");
  }

  function decreaseCartQuantity(id) {
    console.log(id, "decrease quant");
  }

  function removeFromCart(id) {
    console.log(id, "remove from cart");
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
