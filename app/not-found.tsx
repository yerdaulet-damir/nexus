import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nexus-blue to-blue-700 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          This page will be available soon. We're working hard to bring you amazing content!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-white text-nexus-blue px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Return Back Home
        </Link>
      </div>
    </div>
  );
}

