import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50
  bg-white/70
  dark:bg-slate-900/70
  backdrop-blur-xl
  border-b
  border-pink-100
  dark:border-slate-700">

      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">

        <h1 className="text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Naila Araelna
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 text-2xl font-medium">

          <a href="#about" className="hover:text-pink-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-pink-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-pink-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-pink-500 transition">
            Contact
          </a>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden flex 
        flex-col
        gap-4
        px-6
        py-5
        bg-white
        dark:bg-slate-900
        dark:text-white">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
}