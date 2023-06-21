/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";

const ShoppingCartContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(item) {
    console.log(`ID: ${item.id}`, "get item quant");
  }

  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
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
        cartItems,
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
