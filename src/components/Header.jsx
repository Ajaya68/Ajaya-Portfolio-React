import { useEffect, useState } from "react";
import navigation from "../data/navigation";
import personal from "../data/personal";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    function onScroll() {
      setScrolled(window.scrollY > 20);

      let current = sections.length ? sections[0].id : null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActive(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pills = navigation.filter((item) => item.id !== "contact");

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header id="nav" className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between py-3 gap-3">
        <a href="#home" className="brand" onClick={closeMenu}>
          {personal.name.toUpperCase()}
        </a>
        <nav className="pill-nav d-none d-md-flex" aria-label="Primary">
          {pills.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`pill ${active === item.id ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="d-flex align-items-center gap-2">
          <a href="#contact" className="btn-ghost d-none d-md-inline-flex">
            Contact Me
          </a>
          <button
            className="menu-toggle d-md-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </div>
      <div className={`mobile-menu d-md-none ${menuOpen ? "open" : ""}`}>
        <nav aria-label="Mobile">
          {pills.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-link ${active === item.id ? "active" : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary-cyan mobile-contact"
            onClick={closeMenu}
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
