import { ShieldCheck, Github, Globe } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                Secure Land Registry
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              Modernizing land ownership through secure, transparent, and
              immutable blockchain technology.
            </p>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>User Guide</li>
              <li>API Documentation</li>
              <li>System Architecture</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Data Protection</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Registry Office</li>
              <li>Support Desk</li>
              <li>Help Center</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t" />

        {/* BOTTOM */}
      <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-end">

  {/* CENTER COPYRIGHT */}
  <p className="text-center text-sm text-gray-500 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
    © 2026 Secure Land Registry. All rights reserved.
  </p>

  {/* RIGHT CONTENT */}
  <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500">
    <Github className="h-5 w-5 cursor-pointer hover:text-gray-700" />
    <Globe className="h-5 w-5 cursor-pointer hover:text-gray-700" />
    <span className="rounded-full border px-3 py-1 text-xs">
      Mainnet v2.4.1
    </span>
  </div>

</div>


      </div>
    </footer>
  );
}
