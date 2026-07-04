import { useState, useEffect, useRef } from "react";

const menuItems = [
  { name: "Espresso", price: "IDR 28.000", desc: "Rich and intense" },
  { name: "Latte", price: "IDR 32.000", desc: "Smooth with steamed milk" },
  { name: "Cold Brew", price: "IDR 35.000", desc: "Slow-steeped overnight" },
  { name: "Butter Croissant", price: "IDR 22.000", desc: "Flaky and golden" },
  {
    name: "Pour Over",
    price: "IDR 30.000",
    desc: "Single origin, hand-brewed",
  },
  { name: "Matcha Latte", price: "IDR 34.000", desc: "Ceremonial grade" },
];

const tags = ["Single Origin", "House-made", "Organic", "Sustainable"];

export default function MenuSection() {
  const [hoveredItem, setHoveredItem] = useState(null);
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
    <section ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Deskripsi */}
          <div>
            <div className="sticky top-32">
              {/* Badge */}
              <span
                className={`inline-block px-4 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                }`}
              >
                SEASONAL SELECTION
              </span>

              {/* Heading */}
              <h2
                className={`text-4xl font-serif font-normal text-gray-900 mb-6 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                Curated for
                <br />
                <span className="text-amber-700">discerning taste</span>
              </h2>

              {/* Divider */}
              <div
                className={`w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-8 transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              />

              {/* Description */}
              <p
                className={`text-gray-700 leading-relaxed text-lg mb-10 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                Each ingredient chosen for its quality, each preparation method
                refined over time. We believe in doing a few things
                exceptionally well.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 bg-amber-50/50 border border-amber-100 rounded-full text-sm text-amber-800 transition-all duration-700 ease-out ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div
                  className={`flex items-center gap-2 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "0.7s" }}
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Freshly roasted daily</span>
                </div>
                <div
                  className={`flex items-center gap-2 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: "0.8s" }}
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Plant-based options</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Menu Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`group bg-white border border-amber-100 rounded-2xl p-6 hover:shadow-xl hover:border-amber-200 transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${0.5 + Math.floor(index / 2) * 0.15 + (index % 2) * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <div className="text-lg font-bold text-amber-800">
                    {item.price}
                  </div>
                </div>

                {/* Animated Underline */}
                <div
                  className={`h-px bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 transition-all duration-500 ${
                    hoveredItem === index ? "w-full" : "w-0"
                  }`}
                />

                {/* Footer */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-gray-500">Recommended</span>
                  <button className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-100">
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Note */}
        <div
          className={`mt-16 pt-8 border-t border-amber-100 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <p className="text-gray-600 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-pulse mr-2" />
            Menu changes seasonally · Dietary accommodations available
            <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-pulse ml-2" />
          </p>
        </div>
      </div>
    </section>
  );
}
