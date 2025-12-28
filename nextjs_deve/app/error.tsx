// nextjs_deve/app/error.tsx
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-4">
          We hit an unexpected issue. Please try again.
        </p>

        {error?.message && (
          <p className="text-sm text-gray-500 mb-2">
            Error: <span className="font-medium">{error.message}</span>
          </p>
        )}

        {error?.digest && (
          <p className="text-xs text-gray-400 mb-4">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = "/"}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
