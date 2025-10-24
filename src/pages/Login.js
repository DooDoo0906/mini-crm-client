import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../auth/roles";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role === "admin" ? "Admin" : "Staff", role);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold mb-4">Mini CRM Login</h1>
      <button
        onClick={() => handleLogin(ROLES.ADMIN)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login as Admin
      </button>
      <button
        onClick={() => handleLogin(ROLES.STAFF)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Login as Staff
      </button>
    </div>
  );
}
