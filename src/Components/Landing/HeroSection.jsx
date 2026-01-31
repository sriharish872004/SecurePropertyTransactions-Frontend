import { Search, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-14 items-center lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start items-center gap-2 text-sm font-semibold text-blue-600">
              <ShieldCheck className="h-4 w-4" />
              GOVERNMENT VERIFIED
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              The Future of Land <br />
              Ownership:{" "}
              <span className="text-blue-600">Secure</span> &{" "}
              <span className="text-blue-600">Immutable.</span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-600">
              Eliminate fraud and streamline property transfers with our
              national, blockchain-backed registry system. Transparent,
              efficient, and permanent.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700">
                <Search className="h-4 w-4" />
                Search Land Records
              </button>

              <button className="rounded-lg bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-200">
                About System
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE / PLACEHOLDER */}
          <div className="flex justify-center lg:justify-end">
            <div className="
              flex items-center justify-center 
              h-48 w-80
              sm:h-56 sm:w-96
              md:h-64 md:w-[28rem]
              lg:h-72 lg:w-[32rem]
              rounded-xl border border-gray-300 
              bg-gray-200 shadow-lg
            ">
              <span className="text-gray-500">300 × 300</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
