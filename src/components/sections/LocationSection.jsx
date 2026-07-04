import { useEffect, useRef, useState } from "react";

export default function LocationSection() {
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
    <section
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-br from-white to-amber-50/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <div className="relative">
            {/* Decorative Blur */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200/20 rounded-full blur-xl" />

            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              {/* Heading */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-4xl font-serif font-normal text-gray-900 mb-8">
                  Find Our
                  <br />
                  <span className="text-amber-700">Sanctuary</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-10" />
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 tracking-widest mb-2">
                      ADDRESS
                    </h3>
                    <p className="text-gray-800 text-lg">
                      Jl. Melati No.12, Menteng
                      <br />
                      Jakarta 10310
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 tracking-widest mb-2">
                      HOURS
                    </h3>
                    <p className="text-gray-800 text-lg">
                      Monday – Sunday
                      <br />
                      08.00 – 22.00
                    </p>
                  </div>
                </div>

                {/* Status Card */}
                <div
                  className={`p-6 bg-amber-50/50 rounded-xl border border-amber-100 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: "0.6s" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-sm font-medium text-amber-800">
                      Current Status
                    </span>
                  </div>
                  <p className="text-gray-700 italic">
                    "Now open · A quiet street, just far enough from the rush."
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={`transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.8s" }}
              >
                <button className="mt-12 w-full px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-full text-sm font-medium tracking-wider hover:shadow-lg hover:shadow-amber-700/30 hover:scale-[1.02] transition-all duration-300 group">
                  <span className="flex items-center justify-center gap-3">
                    Open in Maps
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Lumi Coffee exterior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Interactive Overlay - Search Icon */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-300/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
