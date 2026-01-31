import { Navigate } from "react-router-dom";

export default function AuthRedirect({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If logged in, redirect to dashboard
  if (token && role) {
    if (role === "ADMIN") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    if (role === "OWNER") {
      return <Navigate to="/owner/dashboard" replace />;
    }
  }

  // Not logged in → show Home
  return children;
}
