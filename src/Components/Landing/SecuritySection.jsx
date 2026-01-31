import {
    ShieldCheck,
    LockKeyhole,
    FileKey,
    UserCheck,
    Database,
    Fingerprint,
    Shield
} from "lucide-react";

const securityFeatures = [
    {
        icon: <Database className="h-6 w-6 text-blue-600" />,
        title: "Blockchain Ledger",
        description:
        "All land records are stored on a distributed blockchain ledger, making data tamper-proof and permanently auditable."
    },
  {
    icon: <LockKeyhole className="h-6 w-6 text-blue-600" />,
    title: "Cryptographic Hashing",
    description:
      "Each land record is secured using cryptographic hash functions, ensuring even the smallest change is immediately detected."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-blue-600" />,
    title: "Role-Based Access Control",
    description:
      "Only authorized users such as government officials and verified owners can initiate ownership transfers."
  },
  {
    icon: <FileKey className="h-6 w-6 text-blue-600" />,
    title: "Digital Signatures",
    description:
      "Property transfers require digital signatures from both buyer and seller, preventing impersonation and fraud."
  },
  {
    icon: <Fingerprint className="h-6 w-6 text-blue-600" />,
    title: "Owner Identity Verification",
    description:
      "Each owner is linked to a unique identity, ensuring lands cannot be sold multiple times or by unauthorized parties."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: "End-to-End Security",
    description:
      "From frontend authentication to backend validation and blockchain confirmation, every step is secured."
  }
];

export default function SecuritySection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
           <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-semibold tracking-wide text-blue-600">
                SYSTEM SECURITY
            </p>
            </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Secure Land Ownership
          </h2>
          <p className="mt-4 text-gray-600">
            Our platform is designed with multiple layers of security to prevent
            fraud, duplicate sales, and unauthorized ownership transfers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
