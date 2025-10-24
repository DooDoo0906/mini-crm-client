import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (roles && !roles.includes(user.role)) {
    return <div className="p-6 text-red-600 text-center">
      You don’t have permission to view this page.
    </div>;
  }

  return children;
};

export default PrivateRoute;
