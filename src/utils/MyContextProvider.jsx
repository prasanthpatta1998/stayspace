import React, { createContext, useState } from "react";
import useFilterLayer from "./useFilterLayer";
import useCartItems from "./useCartItems";
import Login from "../components/Login";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [filterLayer, updateFilterLayer] = useFilterLayer();
  const [shimmer, setShimmer] = useState(true);
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
        shimmer,
        setShimmer,
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
