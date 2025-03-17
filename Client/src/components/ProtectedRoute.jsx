import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux"

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(children,isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    return <Dashboard />;
  }
};

export default ProtectedRoute;
