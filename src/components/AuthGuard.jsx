import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserCtx } from "../context/UserContext";
const useAuth = () => {
  const { user } = useContext(UserCtx);
  return user;
};

const AuthGuard = () => {
  const isUser = useAuth();
  return isUser ? <Outlet /> : <Navigate to="/signup" />;
};

export default AuthGuard;