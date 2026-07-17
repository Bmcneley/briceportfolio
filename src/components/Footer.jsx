import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="text-lg font-semibold text-white">
              Brice.McNeley
            </span>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Aerospace engineering student building new stuff since 2005.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/60">
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
                <a
                  href="#experience"
                  className="transition-colors hover:text-white"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-white"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/60">
              <li>
                <a
                  href="https://www.linkedin.com/in/brice-mcneley-061150332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/btmbrice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FaInstagram size={16} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Brice McNeley. All rights
            reserved.
          </p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
