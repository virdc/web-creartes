import React, { useState, useEffect } from 'react';

function Logo({ imgSrc, title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotras', href: '#nosotras' },
    {
      label: 'Portfolio',
      href: 'https://drive.google.com/drive/folders/13EVxj70O79F2bVDAR8cXzi-J0E8l3LFt',
      external: true
    }
  ];

  // Para controlar scroll y mostrar/ocultar barra
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY < 0) return;

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

  const handleItemClick = (item, e) => {
    if (item.label === 'Inicio') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.external) {
      // Permitir el comportamiento por defecto (ya que tiene target="_blank")
      // O si prefieres: window.open(item.href, '_blank');
      return;
    }

    handleNavClick();
  };

  return (
    <header className={`header-navigation ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
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
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
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