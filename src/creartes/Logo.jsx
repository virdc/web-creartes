import React, { useState } from 'react'

const Logo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-navigation">
            <div className="nav-container">
                {/* Logo */}
                <div className="logo-section">
                    <img 
                        src="/images/logo.jpeg" 
                        alt="Creartes" 
                        className="logo-img"
                    />
                    <span className="logo-text">Creartes</span>
                </div>

                {/* Botón hamburguesa para móviles */}
                <button 
                    className="menu-hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Menú de navegación */}
                <nav className={`main-navigation ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="#inicio" className="nav-link active">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#sobre-nosotros" className="nav-link">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#servicios" className="nav-link">
                                Servicios <span className="dropdown-arrow">▼</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#cursos" className="dropdown-link">Cursos</a></li>
                                <li><a href="#fotoproducto" className="dropdown-link">Fotoproducto</a></li>
                                <li><a href="#talleres" className="dropdown-link">Talleres</a></li>
                                <li><a href="#consultoria" className="dropdown-link">Consultoría</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Logo