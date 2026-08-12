import { useEffect, useState } from "react";
import navigation from "../data/navigation";
import personal from "../data/personal";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

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

  return (
    <header
      id="nav"
      className={`site-nav ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container d-flex align-items-center justify-content-between py-3 gap-3">
        <a href="#home" className="brand">
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
        <a href="#contact" className="btn-ghost">
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header;
