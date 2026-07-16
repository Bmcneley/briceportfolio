import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-4 mt-4 flex items-center justify-between gap-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md sm:mx-6 sm:px-6 sm:py-3 lg:mx-auto lg:max-w-3xl">
      <span className="text-base font-semibold tracking-wide text-white sm:text-lg cursor-pointer">
        Brice.McNeley
      </span>
      <div className="flex items-center gap-8">
        <ul className="lg:flex items-center gap-4 text-xs text-white/80 sm:gap-6 sm:text-sm hidden">
          <li>
            <a href="#home" className="transition-colors hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="transition-colors hover:text-white">
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition-colors hover:text-white">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/brice-mcneley-061150332"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition-colors hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/btmbrice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 transition-colors hover:text-white"
          >
            <FaInstagram size={18} />
          </a>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="text-white lg:hidden cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute inset-x-0 top-full mt-2 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-black/70 py-4 text-sm text-white/80 backdrop-blur-md lg:hidden">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="transition-colors hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="transition-colors hover:text-white"
          >
            Experience
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="transition-colors hover:text-white"
          >
            Portfolio
          </a>
        </div>
      )}
    </nav>
  );
}
