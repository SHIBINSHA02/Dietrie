// nextjs_deve/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-green-700 mb-2">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
