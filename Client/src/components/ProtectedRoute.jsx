import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux"

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    const role = useSelector((state) => state.user.user.role);
    console.log(role);
    if (role == 'client'){
      return <Dashboard />;
    }
    if(role == 'admin'){
      return <Navigate to='/admin'/>
    }
  }
};

export default ProtectedRoute;
