import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const el = navRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [isMenuOpen]);

  const links: Array<{ to: string; label: string; end?: boolean }> = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav ref={navRef} className="navbar" aria-label="Primary">
      <div className="navbar__inner container">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logoLink" aria-label="Go to home page">
            <img
              src="/H&APaintinglogo.png"
              alt="H&A Painting Logo - Licensed, Insured, LLC"
              className="navbar__logo"
            />
          </Link>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="navbar__toggleLine" />
          <span className="navbar__toggleLine" />
          <span className="navbar__toggleLine" />
        </button>

        <div
          id="primary-navigation"
          className={`navbar__links ${isMenuOpen ? 'is-open' : ''}`}
        >
          <ul className="navbar__list" role="list">
            {links.map((l) => (
              <li key={l.to} className="navbar__item">
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' is-active' : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}