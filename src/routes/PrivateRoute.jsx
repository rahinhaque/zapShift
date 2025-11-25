import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading/Loading";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();

  if (loader) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
