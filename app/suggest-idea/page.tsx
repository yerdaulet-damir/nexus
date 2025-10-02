import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suggest an Idea - Share Your Innovation",
  description:
    "Have an innovative business idea or event suggestion for NU Nexus Club? Share your entrepreneurial vision with us. We connect brilliant minds with mentors and investors to turn ideas into successful ventures.",
  keywords: [
    "submit business idea",
    "startup pitch Kazakhstan",
    "entrepreneurship event ideas",
    "innovation submission",
    "student startup ideas",
  ],
  openGraph: {
    title: "Suggest Your Idea to NU Nexus Club",
    description:
      "Share your innovative ideas with the leading entrepreneurship community at Nazarbayev University.",
  },
};

export default function SuggestIdeaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Floating Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 bg-white hover:bg-gray-50 text-nexus-blue p-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
        aria-label="Back to home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform group-hover:-translate-x-1"
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
      </Link>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-nexus-blue/10 p-4 rounded-2xl">
                <svg
                  className="w-16 h-16 text-nexus-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Share Your Vision
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have an innovative idea? Let's turn it into reality together.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-2 border border-gray-200/50">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div
                data-fillout-id="mbQ9s1RpVyus"
                data-fillout-embed-type="standard"
                data-fillout-inherit-parameters
                data-fillout-dynamic-resize
                style={{ width: "100%", minHeight: "700px" }}
              ></div>
              <Script
                src="https://server.fillout.com/embed/v1/"
                strategy="afterInteractive"
              />
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Powered by NU Nexus Club © 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
