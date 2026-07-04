import { useEffect, useRef, useState } from "react";

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 px-6 overflow-hidden">
      {/* Background dengan subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-amber-100/20" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-block px-6 py-2 bg-amber-100/50 rounded-full backdrop-blur-sm mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <span className="text-sm text-amber-800 font-medium tracking-widest">
            PAUSE • REFLECT • CONNECT
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className={`text-5xl font-serif font-normal text-gray-900 mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Come by when you
          <br />
          <span className="text-amber-700 relative">
            need to pause
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />
          </span>
        </h2>

        {/* Divider */}
        <div
          className={`w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "0.2s" }}
        />

        {/* Description */}
        <div className="space-y-8 mb-16">
          <p
            className={`text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-light transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            We believe in the ritual of coffee—the steam rising, the first sip,
            the quiet moment before the day begins.
          </p>

          {/* Values */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {["No rushing", "No loud music", "Just good coffee"].map(
              (text, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            <button className="group px-12 py-5 bg-gradient-to-r from-amber-800 to-amber-700 text-white rounded-full text-sm tracking-wider font-medium hover:shadow-2xl hover:shadow-amber-700/40 hover:scale-[1.02] transition-all duration-500">
              <span className="flex items-center justify-center gap-3">
                View Full Menu
                <svg
                  className="w-5 h-5 transform group-hover:rotate-12 transition-transform"
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
              </span>
            </button>
          </div>

          {/* Secondary Button */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button className="group px-12 py-5 bg-white/80 backdrop-blur-sm border border-amber-200 text-amber-800 rounded-full text-sm tracking-wider font-medium hover:bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-500">
              <span className="flex items-center justify-center gap-3">
                Contact Us
                <svg
                  className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
