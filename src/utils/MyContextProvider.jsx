import React, { createContext } from "react";
import useFilterLayer from "./useFilterLayer";
import useCartItems from "./useCartItems";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [filterLayer, updateFilterLayer] = useFilterLayer();
  const [
    items,
    totalCharge,
    setItems,
    updateCartItems,
    incrementItemCount,
    decrementItemCount,
    removeItem,
    setTotalCharge,
  ] = useCartItems();

  return (
    <MyContext.Provider
      value={{
        filterLayer,
        updateFilterLayer,
        items,
        totalCharge,
        setItems,
        updateCartItems,
        incrementItemCount,
        decrementItemCount,
        removeItem,
        setTotalCharge,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
