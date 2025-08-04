import React from "react";
import { Navigate } from "react-router-dom";
import checkSession from "./helper";
import { ProtectedRouteProps } from "./types";

// Using the imported type interface

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const session = checkSession();

  if (!session) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};


export default ProtectedRoute;
