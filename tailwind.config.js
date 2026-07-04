module.exports = {
  theme: {
    extend: {
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-x": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(-10px)" },
        },
        "scroll-dot": {
          "0%": { transform: "translateX(-50%) translateY(0)", opacity: "1" },
          "100%": {
            transform: "translateX(-50%) translateY(20px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "ken-burns": "ken-burns 20s ease-in-out infinite alternate",
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "scale-x": "scale-x 1s ease-out forwards",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.5s ease-in-out infinite",
      },
    },
  },
};
