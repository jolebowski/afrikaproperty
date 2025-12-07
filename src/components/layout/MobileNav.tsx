import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { useAuth } from "../../contexts/AuthContext";
import { useFavorites } from "../../contexts/FavoritesContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { t, language, setLanguage, languages } = useTranslation();
  const { user, agency, logout } = useAuth();
  const { unreadCount } = useFavorites();

  // Afficher les favoris uniquement pour les visiteurs (non connectés ou pas agency/promoter)
  const showFavorites = !user || !agency;

  const navLinks = [
    { label: t("nav.buy", { fallback: "Acheter" }), path: "/properties" },
    { label: t("nav.invest", { fallback: "Investir" }), path: "/invest" },
    { label: t("nav.promoters", { fallback: "Promoteurs" }), path: "/publish" },
    { label: t("nav.destinations", { fallback: "Destinations" }), path: "/destinations" },
    { label: t("nav.blog", { fallback: "Blog" }), path: "/blog" },
    ...(showFavorites ? [{
      label: `${t("nav.favorites", { fallback: "Favoris" })}${unreadCount > 0 ? ` (${unreadCount})` : ''}`,
      path: "/favorites"
    }] : []),
    { label: t("nav.profile", { fallback: "Mon Profil" }), path: "/profile" },
    { label: t("nav.about", { fallback: "À propos" }), path: "/about" },
    { label: t("nav.contact", { fallback: "Contact" }), path: "/contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b">
            <span className="font-serif text-xl font-bold text-primary">
              {t("common.brand", { fallback: "Afrika Property" })}
            </span>
            <button onClick={onClose} className="p-2 text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center justify-between px-6 py-4 text-lg font-medium text-text-secondary border-b border-gray-50 hover:bg-gray-50"
                >
                  {link.label}
                  <ChevronRight className="h-5 w-5 text-gray-300" />
                </Link>
              ))}
            </nav>

            <div className="mt-8 px-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                {t("common.language", { fallback: "Langue" })}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(languages) as Array<keyof typeof languages>).map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLanguage(code);
                      onClose();
                    }}
                    className={cn(
                      "flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium border transition-all",
                      code === language
                        ? "border-black bg-black text-white" 
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    )}
                  >
                    {languages[code].label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50">
            {user ? (
              <Button
                className="w-full mb-3"
                onClick={() => {
                  logout();
                  onClose();
                }}
              >
                {t("nav.logout", { fallback: "Déconnexion" })}
              </Button>
            ) : (
              <Link to="/promoter/login" onClick={onClose}>
                <Button className="w-full mb-3">
                  {t("nav.promoterSpace", { fallback: "Espace Pro" })}
                </Button>
              </Link>
            )}
            <p className="text-center text-xs text-gray-400">
              © 2024 {t("common.brand", { fallback: "Afrika Property" })}.{" "}
              {t("footer.rights", { fallback: "Tous droits réservés." })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
