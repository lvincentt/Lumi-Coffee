export default function Footer() {
  const navItems = ["Instagram", "Maps", "Contact"];

  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-white to-amber-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="text-2xl font-serif text-amber-900 mb-2">
              Lumi Coffee
            </div>
            <p className="text-gray-600">A sanctuary in the heart of Jakarta</p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
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

        {/* Bottom Bar */}
        <div className="border-t border-amber-100 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © Lumi Coffee 2024 · Jl. Melati No.12, Menteng, Jakarta 10310
          </p>
          <p className="text-xs text-gray-500 mt-2">Open daily 08.00 – 22.00</p>
        </div>
      </div>
    </footer>
  );
}
