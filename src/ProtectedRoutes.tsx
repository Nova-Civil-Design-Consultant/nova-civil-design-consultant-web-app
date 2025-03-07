import React from "react";
import { Navigate } from "react-router-dom";
import checkSession from "./helper";

interface ProtectedRouteProps {
  role: string;
  component: React.ElementType;
  user: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, component: Component, user }) => {
  const session = checkSession();

  if (!session) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};


export default ProtectedRoute;
