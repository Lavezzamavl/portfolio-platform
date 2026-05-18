import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          <div className="text-emerald-400 font-bold text-xl">
            karanja.dev
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href=\"#about\" className=\"hover:text-emerald-400 transition\">
              About
            </a>

            <a href=\"#projects\" className=\"hover:text-emerald-400 transition\">
              Projects
            </a>

            <a href=\"#stack\" className=\"hover:text-emerald-400 transition\">
              Stack
            </a>

            <a href=\"#contact\" className=\"hover:text-emerald-400 transition\">
              Contact
            </a>
          </div>

          <button className=\"hidden md:flex bg-emerald-400 text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition\">
            Hire Me
          </button>

          <button className=\"md:hidden text-white\">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}