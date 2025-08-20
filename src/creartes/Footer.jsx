import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Creartes. Todos los derechos reservados.</p>
      <a
        href="https://instagram.com/creartes.fotografia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Creartes Fotografía"
        className="instagram-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 2.75a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
