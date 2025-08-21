import { useEffect } from 'react';
import CertificaTusConocimientos from "./creartes/CertificaTusConocimientos";
import GarantiaDeAprendizaje from "./creartes/GarantiaDeAprendizaje";
import Header from "./creartes/Header";
import Logo from "./creartes/Logo";
import PlataformaCreartes from "./creartes/PlataformaCreartes";
import Nosotras from "./creartes/Nosotras";
import Footer from "./creartes/Footer";
import Portfolio from './creartes/Portfolio'

// Menú actualizado con scroll suave
const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotras', href: '#nosotras' },
  {
    label: 'Servicios',
    href: '#servicios',
    dropdown: [
      { label: 'Cursos', href: '#cursos' },
      { label: 'Fotoproducto', href: '#fotoproducto' },
      { label: 'Talleres', href: '#talleres' },
      { label: 'Consultoría', href: '#consultoria' }
    ]
  },
  { label: 'Contacto', href: '#contacto' }
];

function App() {
  // Scroll suave para todos los enlaces del menú
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <>
      <Logo imgSrc="/images/logo.jpeg" title="Creartes" menuItems={menuItems} />
      <Header />
      <main>
        
        <CertificaTusConocimientos />
        <GarantiaDeAprendizaje />
        <PlataformaCreartes />
        <Nosotras />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;