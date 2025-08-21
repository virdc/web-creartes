import React, { useState, useEffect } from 'react';

function Logo({ imgSrc, title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotras', href: '#nosotras' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  // Mostrar/ocultar navbar según scroll
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Scroll suave al hacer click
  const handleItemClick = (item, e) => {
    e.preventDefault();

    if (item.href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(item.href);
      section?.scrollIntoView({ behavior: 'smooth' });
    }

    handleNavClick();
  };

  // Hacer que el logo también navegue al Portfolio
  const handleLogoClick = () => {
    const section = document.querySelector('#portfolio');
    section?.scrollIntoView({ behavior: 'smooth' });
    handleNavClick();
  };

  return (
    <header className={`header-navigation ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div
          className="logo-section cursor-pointer"
          onClick={handleLogoClick}
        >
          {imgSrc && <img src={imgSrc} alt={title} className="logo-img" />}
          <h1 className="logo-text">{title}</h1>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className={`menu-hamburger ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navegación Principal */}
        <nav className={`main-navigation ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => handleItemClick(item, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Logo;
