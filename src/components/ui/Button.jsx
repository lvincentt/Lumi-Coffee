export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    hero: "px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm tracking-wider font-medium hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/20",
    primary:
      "px-12 py-5 bg-gradient-to-r from-amber-800 to-amber-700 text-white rounded-full text-sm tracking-wider font-medium hover:shadow-2xl hover:shadow-amber-700/40 hover:scale-[1.02] transition-all duration-500",
    secondary:
      "px-12 py-5 bg-white/80 backdrop-blur-sm border border-amber-200 text-amber-800 rounded-full text-sm tracking-wider font-medium hover:bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-500",
    location:
      "w-full px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-full text-sm font-medium tracking-wider hover:shadow-lg hover:shadow-amber-700/30 hover:scale-[1.02] transition-all duration-300 group",
  };

  return (
    <button className={`group ${variants[variant]} ${className}`} {...props}>
      <span className="flex items-center justify-center gap-4">
        <span className="relative">
          {children}
          {variant === "hero" && (
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-200 group-hover:w-full transition-all duration-500" />
          )}
        </span>
        <ArrowIcon />
      </span>
    </button>
  );
}

function ArrowIcon() {
  return (
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
  );
}
