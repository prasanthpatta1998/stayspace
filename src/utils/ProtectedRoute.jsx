import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "./MyContextProvider";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
