import { X, HelpCircle, Mail, Phone } from "lucide-react";

export default function NeedHelp({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Login Assistance
          </h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm text-gray-700">

          <div className="flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <p>
              Ensure your email and password are entered correctly. Passwords
              are case-sensitive.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
            <p>
              If you forgot your password, use the <b>Forgot</b> option or
              contact support.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
            <p>
              Government administrators must contact the registry office for
              account recovery.
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
