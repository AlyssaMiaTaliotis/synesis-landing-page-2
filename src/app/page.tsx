"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F8F6F3] to-[#F0EDE8] text-[#1A1A1A] font-['Inter']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E3DC]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-lg tracking-[0.25em] text-[#2C3D4D] font-light" style={{ fontFamily: 'system-ui' }}>
            SYNESIS INTELLIGENCE
          </h1>
          <Link 
            href="mailto:alyssamiataliotis@gmail.com" 
            className="px-6 py-2 text-sm tracking-wide text-[#2C3D4D] border border-[#2C3D4D] hover:bg-[#2C3D4D] hover:text-white transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E3DC]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-extralight tracking-wide text-[#556B7B] mb-8 leading-tight">
              Revolutionizing Healthcare Through Advanced Intelligence
            </h2>
            <p className="text-xl text-[#4A4A4A] leading-relaxed mb-12 font-light">
              Pioneering AI solutions that bridge the gap between medical specialties, enabling precise, data-driven healthcare decisions for complex patient care.
            </p>
            <div className="flex gap-6">
              <Link 
                href="#approach" 
                className="px-8 py-4 text-sm tracking-wide text-white bg-[#2C3D4D] hover:bg-[#1A1A1A] transition-all"
              >
                Explore Our Approach
              </Link>
              <Link 
                href="mailto:alyssamiataliotis@gmail.com" 
                className="px-8 py-4 text-sm tracking-wide text-[#2C3D4D] border border-[#2C3D4D] hover:bg-[#2C3D4D] hover:text-white transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 px-6 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
            <p className="text-5xl font-thin text-[#2C3D4D] mb-4">42%</p>
            <p className="text-[#4A4A4A] font-light">of US adults manage multiple chronic conditions, creating complex treatment scenarios</p>
          </div>
          <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
            <p className="text-5xl font-thin text-[#2C3D4D] mb-4">$200B</p>
            <p className="text-[#4A4A4A] font-light">annual cost to healthcare due to fragmented treatment approaches</p>
          </div>
          <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
            <p className="text-5xl font-thin text-[#2C3D4D] mb-4">70%</p>
            <p className="text-[#4A4A4A] font-light">reduction in treatment conflicts through our AI-powered solution</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-thin text-[#2C3D4D] mb-16">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#F8F6F3] flex items-center justify-center mb-6 group-hover:bg-[#E8E3DC] transition-all">
                <div className="w-6 h-6 rounded-full bg-[#2C3D4D]"></div>
              </div>
              <h3 className="text-xl font-light text-[#2C3D4D] mb-4">Advanced AI Engine</h3>
              <p className="text-[#4A4A4A] font-light leading-relaxed">
                Our system continuously analyzes clinical data and physician decisions to provide evidence-based recommendations in real-time.
              </p>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#F8F6F3] flex items-center justify-center mb-6 group-hover:bg-[#E8E3DC] transition-all">
                <div className="w-6 h-6 rounded-full bg-[#2C3D4D]"></div>
              </div>
              <h3 className="text-xl font-light text-[#2C3D4D] mb-4">Cross-Specialty Integration</h3>
              <p className="text-[#4A4A4A] font-light leading-relaxed">
                Breaking down silos between medical specialties to enable comprehensive, coordinated patient care solutions.
              </p>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#F8F6F3] flex items-center justify-center mb-6 group-hover:bg-[#E8E3DC] transition-all">
                <div className="w-6 h-6 rounded-full bg-[#2C3D4D]"></div>
              </div>
              <h3 className="text-xl font-light text-[#2C3D4D] mb-4">Adaptive Learning</h3>
              <p className="text-[#4A4A4A] font-light leading-relaxed">
                Our AI refines its insights through reinforcement learning, adapting to new drug interactions and treatment patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-thin text-[#2C3D4D] mb-16">Strategic Partner</h2>
          <div className="max-w-4xl mx-auto">
            <div className="p-12 border border-[#E8E3DC] flex flex-col items-center justify-center space-y-6">
              <p className="text-[#2C3D4D] font-light text-xl">Mitsubishi Electric Innovation Center</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <p className="text-[#2C3D4D] font-medium">Zafer Sahinoglu</p>
                  <p className="text-[#4A4A4A] font-light">VP Innovation</p>
                  <Link 
                    href="https://www.linkedin.com/in/zafer-sahinoglu/" 
                    target="_blank"
                    className="text-sm text-[#2C3D4D] hover:underline mt-2 inline-block"
                  >
                    View Profile →
                  </Link>
                </div>
                <div className="text-center">
                  <p className="text-[#2C3D4D] font-medium">Murat Varinli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-thin text-[#2C3D4D] mb-16">Research Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Alyssa Mia Taliotis</h3>
              <p className="text-[#4A4A4A] font-light mb-1">AI & ML for Medical Innovation Researcher, Harvard SEAS, MIT</p>
              <p className="text-[#4A4A4A] font-light mb-4">Mathematician</p>
              <Link 
                href="https://www.linkedin.com/in/alyssa-mia-taliotis/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Zulal Akarsu</h3>
              <p className="text-[#4A4A4A] font-light mb-1">AI Product & GTM Strategist</p>
              <p className="text-[#4A4A4A] font-light mb-4">Oxford MBA</p>
              <Link 
                href="https://www.linkedin.com/in/zulalakarsu/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Serge Vasylechko</h3>
              <p className="text-[#4A4A4A] font-light mb-4">AI Researcher, Harvard Medical School</p>
              <Link 
                href="https://www.linkedin.com/in/sergeicu/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Shiv Redhu</h3>
              <p className="text-[#4A4A4A] font-light mb-4">AI & ML for Healthcare Innovations, MIT Sloan</p>
              <Link 
                href="https://www.linkedin.com/in/shivredhu/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Jing Lin Lee</h3>
              <p className="text-[#4A4A4A] font-light mb-1">AI for Healthcare, Harvard Business School MBA</p>
              <p className="text-[#4A4A4A] font-light mb-4">Actuarial Scientist</p>
              <Link 
                href="https://www.linkedin.com/in/jinglinlee/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Rebecca Sostek</h3>
              <p className="text-[#4A4A4A] font-light mb-4">Provider Strategy and Operations, MIT Sloan</p>
              <Link 
                href="https://www.linkedin.com/in/rsostek/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Alissia Di Maria</h3>
              <p className="text-[#4A4A4A] font-light mb-1">Data Scientist, Harvard SEAS, MIT</p>
              <p className="text-[#4A4A4A] font-light mb-4">Neuroscientist</p>
              <Link 
                href="https://www.linkedin.com/in/alissiadimaria/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
            <div className="p-8 border border-[#E8E3DC] hover:border-[#2C3D4D] transition-all">
              <h3 className="text-xl font-light text-[#2C3D4D] mb-2">Rahul Aggarwal, MD</h3>
              <p className="text-[#4A4A4A] font-light mb-4">Physician & Cardiology Specialist, Harvard Medical School</p>
              <Link 
                href="https://www.linkedin.com/in/rahul-aggarwal-md/" 
                target="_blank"
                className="text-sm text-[#2C3D4D] hover:underline"
              >
                View Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl font-thin text-[#2C3D4D] mb-6">Shape the Future of Healthcare</h2>
          <p className="text-xl text-[#4A4A4A] font-light mb-12">
            Join us in revolutionizing healthcare through AI-powered medical intelligence.
          </p>
          <Link 
            href="mailto:alyssamiataliotis@gmail.com" 
            className="inline-block px-12 py-4 text-sm tracking-wide text-white bg-[#2C3D4D] hover:bg-[#1A1A1A] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#E8E3DC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-[#4A4A4A] font-light">
            &copy; {new Date().getFullYear()} Synesis Intelligence. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
