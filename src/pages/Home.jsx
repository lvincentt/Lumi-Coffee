import { useState } from "react";

export default function LumiCoffeeHome() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

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

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* HERO - Modern dengan Animasi */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="mb-10 animate-fade-in-down">
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
              <span className="block animate-slide-up opacity-0 [animation-delay:0.1s]">
                Coffee for slow
              </span>
              <span className="block animate-slide-up opacity-0 [animation-delay:0.3s]">
                mornings and
              </span>
              <span className="block text-amber-50/90 animate-slide-up opacity-0 [animation-delay:0.5s]">
                meaningful talks.
              </span>
            </h1>
          </div>

          {/* Animated Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent mx-auto my-12 animate-scale-x" />

          {/* Description dengan Typewriter Effect */}
          <p className="text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-12 font-light animate-fade-in-up [animation-delay:0.7s] opacity-0">
            A neighborhood sanctuary where time moves gently, and every cup is
            poured with intention.
          </p>

          {/* Modern Button dengan Hover Effects */}
          <button className="group px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm tracking-wider font-medium hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/20 animate-fade-in-up [animation-delay:0.9s] opacity-0">
            <span className="flex items-center justify-center gap-4">
              <span className="relative">
                Plan Your Visit
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-200 group-hover:w-full transition-all duration-500" />
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center">
            <div className="relative w-6 h-10 border-2 border-white/30 rounded-full">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white/60 rounded-full animate-scroll-dot" />
            </div>
            <span className="text-xs text-white/60 tracking-widest mt-3">
              EXPLORE
            </span>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE GALLERY - Interactive */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-normal text-gray-900 mb-8">
              <span className="relative inline-block">
                The Lumi Experience
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
              A sanctuary from the city's pace—where light, space, and silence
              are curated with intention.
            </p>
          </div>

          {/* Interactive Gallery */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Main Display */}
            <div className="lg:w-2/3">
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
            <div className="lg:w-1/3 space-y-4">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-amber-100">
            {[
              { value: "24+", label: "Coffee Varieties" },
              { value: "2014", label: "Year Established" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "Slow", label: "Service Philosophy" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
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

      {/* MENU - Modern Cards Layout */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="sticky top-32">
                <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium mb-6">
                  SEASONAL SELECTION
                </span>
                <h2 className="text-4xl font-serif font-normal text-gray-900 mb-6">
                  Curated for
                  <br />
                  <span className="text-amber-700">discerning taste</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-8" />
                <p className="text-gray-700 leading-relaxed text-lg mb-10">
                  Each ingredient chosen for its quality, each preparation
                  method refined over time. We believe in doing a few things
                  exceptionally well.
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {[
                    "Single Origin",
                    "House-made",
                    "Organic",
                    "Sustainable",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-amber-50/50 border border-amber-100 rounded-full text-sm text-amber-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Freshly roasted daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Plant-based options</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-amber-100 rounded-2xl p-6 hover:shadow-xl hover:border-amber-200 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
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
                  <div
                    className={`h-px bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 transition-all duration-500 ${
                      hoveredItem === index ? "w-full" : "w-0"
                    }`}
                  />
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
          <div className="mt-16 pt-8 border-t border-amber-100 text-center">
            <p className="text-gray-600 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-pulse mr-2" />
              Menu changes seasonally · Dietary accommodations available
              <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-pulse ml-2" />
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION - Modern Map Style */}
      <section className="py-32 px-6 bg-gradient-to-br from-white to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200/20 rounded-full blur-xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-4xl font-serif font-normal text-gray-900 mb-8">
                  Find Our
                  <br />
                  <span className="text-amber-700">Sanctuary</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-10" />

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
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

                  <div className="flex items-start gap-4">
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

                  <div className="p-6 bg-amber-50/50 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-sm font-medium text-amber-800">
                        Current Status
                      </span>
                    </div>
                    <p className="text-gray-700 italic">
                      "Now open · A quiet street, just far enough from the
                      rush."
                    </p>
                  </div>
                </div>

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

            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Lumi Coffee exterior"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Interactive Overlay Elements */}
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

      {/* FINAL CTA - Modern dengan Parallax */}
      <section className="relative py-40 px-6 overflow-hidden">
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
          <div className="inline-block px-6 py-2 bg-amber-100/50 rounded-full backdrop-blur-sm mb-12">
            <span className="text-sm text-amber-800 font-medium tracking-widest">
              PAUSE • REFLECT • CONNECT
            </span>
          </div>

          <h2 className="text-5xl font-serif font-normal text-gray-900 mb-12">
            Come by when you
            <br />
            <span className="text-amber-700 relative">
              need to pause
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />
            </span>
          </h2>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />

          <div className="space-y-8 mb-16">
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-light">
              We believe in the ritual of coffee—the steam rising, the first
              sip, the quiet moment before the day begins.
            </p>

            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-gray-600">No rushing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-gray-600">No loud music</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-gray-600">Just good coffee</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* FOOTER - Modern */}
      <footer className="py-16 px-6 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-serif text-amber-900 mb-2">
                Lumi Coffee
              </div>
              <p className="text-gray-600">
                A sanctuary in the heart of Jakarta
              </p>
            </div>

            <div className="flex items-center gap-6">
              {["Instagram", "Maps", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group relative text-gray-700 hover:text-amber-700 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-amber-100 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © Lumi Coffee 2024 · Jl. Melati No.12, Menteng, Jakarta 10310
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Open daily 08.00 – 22.00
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
