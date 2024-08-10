import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "./MyContextProvider";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(MyContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
