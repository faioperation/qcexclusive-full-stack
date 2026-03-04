"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center mt-20">
      <div className="bg-red-50 text-red-500 p-4 rounded-full mb-4">
        <AlertCircle size={32} />
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Something went wrong!
      </h2>
      <p className="mb-6 max-w-md text-gray-500">
        We encountered an unexpected error while loading this page. Our team has been notified.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-[#00A651] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#009345] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A651] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
