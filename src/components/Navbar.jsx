import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"} bg-primary text-white shadow-md`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Dhafin</h1>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          ☰
        </button>

        <ul className="hidden md:flex gap-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="flex flex-col px-4 pb-3 md:hidden gap-2 text-sm">
          <li><a href="#home" className="block py-1">Home</a></li>
          <li><a href="#about" className="block py-1">About</a></li>
          <li><a href="#contact" className="block py-1">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
