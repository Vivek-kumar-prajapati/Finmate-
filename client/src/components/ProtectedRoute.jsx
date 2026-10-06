import { Navigate,Outlet } from "react-router-dom";

function ProtectedRoute({ login }) {
  if (!login) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
