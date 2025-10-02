import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "./components/Header";
import EventCarousel from "./components/EventCarousel";
import TeamCarousel from "./components/TeamCarousel";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Home - Together We Turn Ambition Into Action",
  description: "NU Nexus Club is the premier entrepreneurship community at Nazarbayev University. Get access to knowledge, networking, and mentoring from successful entrepreneurs, investors, and industry leaders in Kazakhstan and Central Asia.",
  openGraph: {
    title: "NU Nexus Club - Together We Turn Ambition Into Action",
    description: "Join the leading entrepreneurship community at Nazarbayev University. Connect with brilliant minds, mentors, and investors.",
    images: ["/hero.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative" aria-label="Hero banner">
        <div className="relative h-[500px] lg:h-[700px]">
          <Image
            src="/hero.png"
            alt="NU Nexus Club members collaborating in modern office - entrepreneurship community at Nazarbayev University"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nexus-blue/80 via-nexus-blue/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  together, we
                  <br />
                  turn ambition
                  <br />
                  into action
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-nexus-blue text-white py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-base lg:text-lg">
              big results require knowledge, networking and mentoring – get everything in Nexus Club
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-40" aria-hidden="true">
          <Image
            src="/under-who-we-are.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-start gap-3">
                <div className="w-1 h-24 bg-nexus-blue flex-shrink-0 rounded-full" aria-hidden="true" />
                <h2 id="about-heading" className="text-4xl lg:text-5xl font-bold">who we are</h2>
              </div>
            </div>
            
            <div className="lg:col-span-9">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 mb-6">
                our ambition is to bring the culture of <strong>entrepreneurship among Nazarbayev University students</strong> and turn it into <strong>"Innovation Hub" of Central Asia</strong>, by connecting brilliant minds and ideas with thoughtful <strong>mentors and investors</strong>
              </p>
              <a
                href="#"
                className="text-nexus-blue font-medium hover:underline inline-flex items-center gap-2"
                aria-label="Download NU Nexus Club whitepaper PDF"
              >
                download whitepaper
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden" aria-labelledby="events-heading">
        <div className="absolute right-0 top-0 w-1/4 h-1/3 opacity-30" aria-hidden="true">
          <Image
            src="/events-left.png"
            alt=""
            fill
            className="object-contain object-right-top"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-1 h-20 bg-nexus-blue flex-shrink-0 rounded-full" aria-hidden="true" />
              <h2 id="events-heading" className="text-4xl lg:text-5xl font-bold">events we made</h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl">
              we always try to make interesting and useful <strong>entrepreneurship events for students community</strong>, so everyone will get valuable insights from <strong>well-known entrepreneurs</strong> and industry leaders
            </p>
          </div>
          
          <EventCarousel />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden" aria-labelledby="team-heading">
        <div className="absolute right-0 bottom-0 w-1/3 h-2/3 opacity-30 pointer-events-none" aria-hidden="true">
          <Image
            src="/teams-star.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-1 h-16 bg-nexus-blue flex-shrink-0 rounded-full" aria-hidden="true" />
              <h2 id="team-heading" className="text-4xl lg:text-5xl font-bold">team</h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl">
              the <strong>leadership backbone of Nexus Team</strong> who is working relentlessly to deliver <strong>high impactful ideas into actions</strong>
            </p>
          </div>
          
          <TeamCarousel />
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="py-20 lg:py-32 bg-gray-50" aria-labelledby="join-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-1 h-20 bg-nexus-blue flex-shrink-0 rounded-full" aria-hidden="true" />
              <h2 id="join-heading" className="text-4xl lg:text-5xl font-bold">join the Community</h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl">
              become part of <strong>Central Asia's leading entrepreneurship community</strong> and connect with mentors, investors, and fellow student entrepreneurs
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
            <Link
              href="/become-member"
              className="flex-1 bg-nexus-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition shadow-lg hover:shadow-xl text-center"
            >
              become a member
            </Link>
            <Link
              href="/suggest-idea"
              className="flex-1 bg-white hover:bg-gray-50 text-nexus-blue border-2 border-nexus-blue px-8 py-4 rounded-xl text-lg font-medium transition shadow-lg hover:shadow-xl text-center"
            >
              suggest an idea
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

