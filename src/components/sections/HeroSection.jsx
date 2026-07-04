import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import ScrollIndicator from "../ui/ScrollIndicator";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background dengan Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Coffee being poured in morning light"
            className="w-full h-full object-cover transform scale-105 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Logo/Text Entrance */}
        <div
          className={`mb-10 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-amber-200 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-sm tracking-[0.3em] text-white/90 font-medium">
              EST. 2024 · JAKARTA
            </span>
          </div>
        </div>

        {/* Main Heading dengan Stagger Animation */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.05] tracking-tight text-white">
            <span
              className={`block transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              Coffee for slow
            </span>
            <span
              className={`block transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              mornings and
            </span>
            <span
              className={`block text-amber-50/90 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              meaningful talks.
            </span>
          </h1>
        </div>

        {/* Animated Divider */}
        <div
          className={`w-32 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent mx-auto my-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "0.6s" }}
        />

        {/* Description */}
        <p
          className={`text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-12 font-light transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          A neighborhood sanctuary where time moves gently, and every cup is
          poured with intention.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <Button variant="hero">Plan Your Visit</Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
