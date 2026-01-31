import {
  Quote,
  ShieldCheck,
  UserCheck,
  Building2,
  BookOpenCheck
} from "lucide-react";

const testimonials = [
  {
    name: "District Revenue Officer",
    role: "Government Authority",
    icon: ShieldCheck,
    message:
      "The blockchain-backed registry ensures land records cannot be altered or duplicated, significantly reducing document forgery and ownership disputes."
  },
  {
    name: "Verified Land Owner",
    role: "Citizen User",
    icon: UserCheck,
    message:
      "Property verification and ownership history are now available online, eliminating the need for repeated office visits and manual paperwork."
  },
  {
    name: "Registrar Office",
    role: "Property Registration Department",
    icon: Building2,
    message:
      "Automated verification and immutable ownership records have improved processing efficiency and transparency in land transfer approvals."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-semibold tracking-wide text-blue-600">
                TRUST & FEEDBACK
            </p>
    </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Authorities & Citizens
          </h2>
          <p className="mt-4 text-gray-600">
            Practical feedback from stakeholders who benefit directly from
            secure, transparent land record management.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Accent Bar */}
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-blue-600" />

                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <Quote className="h-5 w-5 text-gray-300" />
                </div>

                {/* Message */}
                <p className="text-sm leading-relaxed text-gray-700">
                  “{item.message}”
                </p>

                {/* Author */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
