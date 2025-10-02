import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Member - Join Our Community",
  description: "Join NU Nexus Club and become part of Central Asia's leading student entrepreneurship community. Get access to exclusive events, mentorship from successful entrepreneurs, networking opportunities, and investor connections.",
  keywords: [
    "join entrepreneurship club",
    "student membership Kazakhstan",
    "NU clubs membership",
    "business community Astana",
    "startup community Central Asia"
  ],
  openGraph: {
    title: "Become a Member of NU Nexus Club",
    description: "Join the leading entrepreneurship community at Nazarbayev University and connect with mentors, investors, and fellow entrepreneurs.",
  },
};

export default function BecomeMemberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nexus-blue to-blue-700 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-white mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Membership Registration
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Our membership portal will be available soon. We're building an amazing experience for our community!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          
          <a
            href="https://www.instagram.com/nunexusclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

