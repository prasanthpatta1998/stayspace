import React, { createContext, useState } from "react";
import useFilterLayer from "./useFilterLayer";
import useCartItems from "./useCartItems";
import Login from "../components/Login";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  console.log("Is Authenticated ===>", isAuthenticated);

  return (
    <MyContext.Provider
      value={{
        isAuthenticated,
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
        login,
        logout,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
