import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    return <Dashboard />;
  }
};

export default ProtectedRoute;
