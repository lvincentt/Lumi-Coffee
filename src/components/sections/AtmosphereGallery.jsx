import { useState, useEffect, useRef } from "react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Serene Interior",
    desc: "A quiet corner for reading and reflection",
  },
  {
    url: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Artisanal Process",
    desc: "Carefully sourced beans, roasted in small batches",
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Space",
    desc: "Designed for connection, not just consumption",
  },
];

const statsData = [
  { value: "24+", label: "Coffee Varieties" },
  { value: "2014", label: "Year Established" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "Slow", label: "Service Philosophy" },
];

export default function AtmosphereGallery() {
  const [activeImage, setActiveImage] = useState(0);
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
      className="py-32 px-6 bg-gradient-to-b from-white to-amber-50/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-serif font-normal text-gray-900 mb-8">
            <span className="relative inline-block">
              The Lumi Experience
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            A sanctuary from the city's pace—where light, space, and silence are
            curated with intention.
          </p>
        </div>

        {/* Interactive Gallery */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Main Display */}
          <div
            className={`lg:w-2/3 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <img
                src={galleryImages[activeImage].url}
                alt={galleryImages[activeImage].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {galleryImages[activeImage].title}
                    </h3>
                    <p className="text-white/90">
                      {galleryImages[activeImage].desc}
                    </p>
                  </div>
                  <div className="text-4xl font-serif text-amber-200/80">
                    {String(activeImage + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div
            className={`lg:w-1/3 space-y-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative w-full h-40 rounded-xl overflow-hidden group transition-all duration-500 ${
                  activeImage === index
                    ? "ring-2 ring-amber-600/50 ring-offset-2"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeImage === index
                      ? "bg-amber-900/20"
                      : "bg-black/40 group-hover:bg-black/30"
                  }`}
                />
                <div className="absolute bottom-4 left-4 text-white text-left">
                  <div className="text-sm font-medium">{image.title}</div>
                  <div className="text-xs opacity-90">{image.desc}</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-amber-100 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="text-3xl font-serif text-amber-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
