import { Globe, Heart, Menu, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the home page to handle transparency
  const isHomePage = location.pathname === "/";

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
              Afrika Property
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Acheter", path: "/properties" },
              { label: "Investir", path: "/invest" },
              { label: "Promoteurs", path: "/publish" },
              { label: "Destinations", path: "/destinations" },
              { label: "Blog", path: "/blog" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isScrolled || !isHomePage
                    ? "text-text-secondary"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative group">
              <button 
                className={cn(
                  "p-2 rounded-full transition-colors hover:bg-white/10 flex items-center gap-1",
                  isScrolled || !isHomePage ? "text-text-secondary hover:bg-gray-100" : "text-white"
                )}
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs font-medium uppercase">FR</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                {[
                  { code: "FR", label: "Français" },
                  { code: "EN", label: "English" },
                  { code: "PT", label: "Português" },
                  { code: "CV", label: "Kabuverdianu" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-between group/item"
                  >
                    <span>{lang.label}</span>
                    {lang.code === "FR" && <span className="w-1.5 h-1.5 rounded-full bg-[#C7A86A]" />}
                  </button>
                ))}
              </div>
            </div>

            <Link to="/favorites">
              <button 
                className={cn(
                  "p-2 rounded-full transition-colors hover:bg-white/10",
                  isScrolled || !isHomePage ? "text-text-secondary hover:bg-gray-100" : "text-white"
                )}
              >
                <Heart className="h-5 w-5" />
              </button>
            </Link>

            <Link to="/profile">
              <button 
                className={cn(
                  "p-2 rounded-full transition-colors hover:bg-white/10",
                  isScrolled || !isHomePage ? "text-text-secondary hover:bg-gray-100" : "text-white"
                )}
              >
                <User className="h-5 w-5" />
              </button>
            </Link>

            <Link to="/promoter/login">
              <Button
                variant={isScrolled || !isHomePage ? "outline" : "primary"}
                className={cn(
                  !isScrolled && isHomePage && "bg-white text-primary hover:bg-white/90"
                )}
              >
                Espace Promoteur
              </Button>
            </Link>
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
