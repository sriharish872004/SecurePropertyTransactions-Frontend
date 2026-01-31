import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white rounded-4xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-600" />
            <span className="text-base font-semibold text-gray-900">
              Secure Land Registry
            </span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Statistics
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              FAQ
            </Link>
          </div>

          {/* RIGHT ACTION */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Login
            </Link>

            {/* Profile Avatar (optional) */}
            {/* <div className="h-9 w-9 rounded-full bg-gray-200" /> */}
          </div>

        </div>
      </nav>
    </header>
  );
}
