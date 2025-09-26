import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © 2025 Tortas El Lechón. Todos los derechos reservados.
        </p>
        <p className="text-sm mt-2">
          Creado por{' '}
          <a
            href="https://cortes-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline"
          >
            Cortes Dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;