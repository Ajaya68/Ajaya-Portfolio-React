import { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      id="toTop"
      className={`to-top ${visible ? "show" : ""}`}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}

export default BackToTop;
