import { useState } from "react";
import { ShieldCheck, User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios.js";
import { apiEndpoints } from "../../Util/apiEndpoints.js";
import { toast } from "react-toastify";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post(apiEndpoints.SIGNUP, {
      name,
      email,
      password
    });

    toast.success("Account created successfully 🎉");
    navigate("/login");

  } catch (err) {
    toast.error(
      err.response?.data || "Signup failed ❌"
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* HEADER */}
      <header className="flex items-center gap-2 px-6 py-4 bg-white border-b rounded-4xl">
        <ShieldCheck className="h-6 w-6 text-blue-600" />
        <span className="font-semibold text-gray-900">
          Secure Land Registry
        </span>
      </header>

      {/* SIGNUP CARD */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">

          <h2 className="text-center text-2xl font-bold text-gray-900">
            Create Land Owner Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Register to access and manage your land records securely
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 flex items-center rounded-lg border px-3">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 text-sm outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 flex items-center rounded-lg border px-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 flex items-center rounded-lg border px-3">
                <Lock className="h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-3 py-2 text-sm outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <ShieldCheck className="h-4 w-4" />
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-blue-600">
              Login
            </a>
          </p>
        </div>
      </main>

      {/* FOOT NOTE */}
      <footer className="pb-6 text-center text-xs text-gray-500">
        Only verified land owners are allowed to register. <br />
        © 2026 Secure Land Registry.
      </footer>
    </div>
  );
}
