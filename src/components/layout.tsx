import React, { useState } from 'react';
import { Header } from './layout/Header';
import { MobileMenu } from './layout/MobileMenu';
import { Footer } from './layout/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#join", label: "Join Our Team" },
    { href: "#contact", label: "Contact" },
    { href: "#resources", label: "Resources" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Header
        mainNavItems={mainNavItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        mainNavItems={mainNavItems}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
