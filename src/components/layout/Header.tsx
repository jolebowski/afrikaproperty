import { Heart, Menu, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { LanguageSelector } from "./LanguageSelector";
import { MobileNav } from "./MobileNav";
import { useAuth } from "../../contexts/AuthContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { user, agency, logout } = useAuth();

  // Afficher les favoris uniquement pour les visiteurs (non connectés ou pas agency/promoter)
  const showFavorites = !user || !agency;

  // Check if we are on the home page to handle transparency
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { label: t("nav.buy", { fallback: "Acheter" }), path: "/properties" },
    { label: t("nav.agencies", { fallback: "Agences" }), path: "/agencies" },
    { label: t("nav.invest", { fallback: "Investir" }), path: "/invest" },
    { label: t("nav.promoters", { fallback: "Promoteurs" }), path: "/publish" },
    { label: t("nav.services", { fallback: "Services" }), path: "/services" },
    { label: t("nav.destinations", { fallback: "Destinations" }), path: "/destinations" },
    { label: t("nav.blog", { fallback: "Blog" }), path: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled || !isHomePage
            ? "bg-white shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50">
            <h1
              className={cn(
                "text-2xl font-serif font-bold tracking-tight",
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              )}
            >
              {t("common.brand", { fallback: "Afrika Property" })}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  location.pathname === link.path 
                    ? "text-primary font-semibold"
                    : isScrolled || !isHomePage
                      ? "text-text-secondary"
                      : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector tone={isScrolled || !isHomePage ? "light" : "dark"} />

            {showFavorites && (
              <Link
                to="/favorites"
                className={cn(
                  "relative p-2 rounded-full transition-colors hover:bg-white/10 inline-block",
                  isScrolled || !isHomePage ? "text-text-secondary hover:bg-gray-100" : "text-white"
                )}
              >
                <Heart className="h-5 w-5" />
              </Link>
            )}

            <Link
              to="/profile"
              className={cn(
                "p-2 rounded-full transition-colors hover:bg-white/10 inline-block",
                isScrolled || !isHomePage ? "text-text-secondary hover:bg-gray-100" : "text-white"
              )}
            >
              <User className="h-5 w-5" />
            </Link>

            {user ? (
              <Button
                onClick={logout}
                variant={isScrolled || !isHomePage ? "outline" : "primary"}
                className={cn(
                  !isScrolled && isHomePage && "bg-white text-primary hover:bg-white/90"
                )}
              >
                {t("nav.logout", { fallback: "Déconnexion" })}
              </Button>
            ) : (
              <Link to="/promoter/login">
                <Button
                  variant={isScrolled || !isHomePage ? "outline" : "primary"}
                  className={cn(
                    !isScrolled && isHomePage && "bg-white text-primary hover:bg-white/90"
                  )}
                >
                  {t("nav.promoterSpace", { fallback: "Espace Pro" })}
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu
              className={cn(
                "h-6 w-6",
                isScrolled || !isHomePage ? "text-text-secondary" : "text-white"
              )}
            />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
