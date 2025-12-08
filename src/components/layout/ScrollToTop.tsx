import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll vers le haut de la page à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Utilise "instant" au lieu de "smooth" pour un changement immédiat
    });
  }, [pathname]);

  return null;
}