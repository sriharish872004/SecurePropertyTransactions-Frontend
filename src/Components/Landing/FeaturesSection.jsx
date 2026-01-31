import {
  Blocks,
  FileText,
  Users,
  RefreshCcw,
  ShieldCheck,
  Globe
} from "lucide-react";

const features = [
  {
    icon: <Blocks className="h-6 w-6 text-blue-600" />,
    title: "Blockchain-Based Records",
    description:
      "Land ownership details are stored on a decentralized blockchain, ensuring immutability and transparency."
  },
  {
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    title: "Complete Ownership History",
    description:
      "Every ownership transfer is permanently recorded, allowing users to verify land history instantly."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Verified Owners & Authorities",
    description:
      "Only authenticated landowners and government officials can access or update sensitive records."
  },
  {
    icon: <RefreshCcw className="h-6 w-6 text-blue-600" />,
    title: "Secure Property Transfers",
    description:
      "Land transfers are validated through digital signatures and blockchain confirmation."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: "Fraud Prevention",
    description:
      "Prevents duplicate sales, forged documents, and unauthorized ownership claims."
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "Nationwide Accessibility",
    description:
      "Land records can be accessed securely from anywhere with proper authorization."
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-blue-600">
            PLATFORM FEATURES
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Our System Works
          </h2>
          <p className="mt-4 text-gray-600">
            Designed to modernize land record management with security,
            transparency, and efficiency at its core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
