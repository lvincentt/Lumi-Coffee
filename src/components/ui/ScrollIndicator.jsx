export default function ScrollIndicator() {
  return (
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
  );
}
