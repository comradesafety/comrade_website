import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navLinks } from '../data/navigation.js';
import { useScrollPosition } from '../hooks/useScrollPosition.js';
import MobileMenu from './MobileMenu.jsx';
import PrimaryButton from './PrimaryButton.jsx';

export default function Navbar() {
  const { isScrolled } = useScrollPosition(32);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-premium ${
          isScrolled
            ? 'border-b border-ink-900/[0.06] bg-cream-100/85 py-2.5 shadow-[0_1px_0_rgba(21,18,14,0.02)] backdrop-blur-lg'
            : 'border-b border-transparent bg-transparent py-3.5'
        }`}
      >
        <div className="container-comrade flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine-500"
          >
            <img
              src="/assets/logo/comrade-logo.png"
              alt="Comrade — Comrades Born to Defy"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24 md:h-28'
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1.5 text-sm font-medium tracking-wideish transition-colors duration-300 ${
                    isActive ? 'text-wine-600' : 'text-ink-700 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-wine-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <PrimaryButton to="/contact" variant="secondary" showIcon={false} className="px-6 py-2.5 text-xs">
              Coming Soon
            </PrimaryButton>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 transition-colors hover:border-wine-500 hover:text-wine-600 md:hidden"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        activePath={pathname}
        triggerRef={triggerRef}
      />
    </>
  );
}
