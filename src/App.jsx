import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FooterSection from "./Components/Landing/FooterSection"
import HeroSection from "./Components/Landing/HeroSection"
import Navbar from "./Components/Landing/Navbar"
import SecuritySection from "./Components/Landing/SecuritySection"
import TestimonialsSection from "./Components/Landing/TestimonialsSection"
import Login from "./Pages/SignUp/Login.jsx";
import CreateAccount from "./Pages/SignUp/CreateAccount.jsx";
import OwnerDashboard from "./Pages/OwnerDashboard/OwnerDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import AuthRedirect from "./routes/AuthRedirect.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecuritySection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      
    <Routes>
      {/* Home route with auto redirect */}
      <Route
        path="/"
        element={
          <AuthRedirect>
            <Home />
          </AuthRedirect>
        }
      />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />

      {/* Owner dashboard */}
      <Route
        path="/owner/dashboard"
        element={
          <ProtectedRoute role="OWNER">
            <OwnerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    </>
  );
}

export default App;