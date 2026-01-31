import { useState } from "react";
import { ShieldCheck, User, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import NeedHelp from "../../Components/NeedHelp.jsx";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios.js";
import { apiEndpoints } from "../../Util/apiEndpoints.js";
import { toast } from "react-toastify";


export default function Login() {
  const [role, setRole] = useState("OWNER"); // OWNER | ADMIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const res = await api.post(apiEndpoints.LOGIN, {
    email,
    password,
    role
  });

  // ✅ Store JWT & role
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("role", res.data.role);

  toast.success("Login successful ✅");

  // ✅ Redirect based on role
  if (res.data.role === "ADMIN") {
    navigate("/admin/dashboard");
  } else {
    navigate("/owner/dashboard");
  }

} catch (err) {
  toast.error(
    err.response?.data || "Login failed ❌"
  );
}
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* TOP BAR */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b rounded-4xl">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-gray-900">
            Secure Land Registry
          </span>
        </div>

        <button
          onClick={() => setShowHelp(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Need Help?
        </button>
      </header>

      {/* LOGIN CARD */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">

          <h2 className="text-center text-2xl font-bold text-gray-900">
            System Authentication
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Secure Access to Blockchain Land Registry
          </p>

          {/* ROLE SWITCH */}
          <div className="mt-6 flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setRole("ADMIN")}
              className={`flex-1 rounded-md py-2 text-sm font-semibold ${
                role === "ADMIN"
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-600"
              }`}
            >
              Government Admin
            </button>

            <button
              onClick={() => setRole("OWNER")}
              className={`flex-1 rounded-md py-2 text-sm font-semibold ${
                role === "OWNER"
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-600"
              }`}
            >
              Land Owner
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Identification
              </label>
              <div className="mt-1 flex items-center rounded-lg border px-3">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email or Username"
                  className="w-full px-3 py-2 text-sm outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Security Key / Password
                </label>
                <span className="text-sm text-blue-600 cursor-pointer">
                  Forgot?
                </span>
              </div>

              <div className="mt-1 flex items-center rounded-lg border px-3">
                <Lock className="h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
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
              Secure Login
            </button>
          </form>

          {/* SIGNUP ONLY FOR OWNER */}
          {role === "OWNER" && (
            <p className="mt-6 text-center text-sm text-gray-600">
              New to the registry?{" "}
              <span className="font-semibold text-blue-600 cursor-pointer">
                <Link
                to="/create-account"
                className="font-semibold text-blue-600 hover:underline"
                >
                    Create an Account
                </Link>

              </span>
            </p>
          )}

          {/* ADMIN NOTE */}
          {role === "ADMIN" && (
            <p className="mt-6 text-center text-xs text-gray-500">
              Government administrator accounts are provisioned by the system.
            </p>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="pb-6 text-center text-xs text-gray-500">
        AES-256 Encrypted · Hyperledger Fabric <br />
        © 2026 Secure Land Registry. All records are immutable.
      </footer>

      {/* NEED HELP MODAL */}
      {showHelp && <NeedHelp onClose={() => setShowHelp(false)} />}
    </div>
  );
}
