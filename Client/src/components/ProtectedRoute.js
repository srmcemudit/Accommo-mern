import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({isAuthenticated}) => {
  if(!isAuthenticated){
      return <Navigate to="/" replace />;
  }
    return <Outlet />   // Replace with your authentication logic
};

export default ProtectedRoute;