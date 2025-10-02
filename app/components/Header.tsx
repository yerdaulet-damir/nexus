"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-nexus-blue text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">NU Nexus Club</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:opacity-80 transition">
            home
          </Link>
          <Link href="#education" className="hover:opacity-80 transition">
            education
          </Link>
        </nav>

        <button className="flex items-center gap-2 hover:opacity-80 transition">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>login</span>
        </button>
      </div>
    </header>
  );
}

