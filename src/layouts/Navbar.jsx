import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menú" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 font-montserrat">
      <div className="bg-gradient-to-r from-red-600/90 to-orange-500/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-white text-xl font-extrabold tracking-wide"
              >
                Tortas El Lechón 🥙
              </Link>
            </div>

            {/* Links Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-white font-medium group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              {/* CTA */}
              <Link
                to="/contacto"
                className="ml-4 bg-white text-red-600 px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Ordena ahora
              </Link>
            </div>

            {/* Botón Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:opacity-80 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-red-600/95 to-orange-950 backdrop-blur-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-lg font-medium hover:pl-2 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="block bg-white text-red-600 px-4 py-2 rounded-full text-center font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Ordena ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
