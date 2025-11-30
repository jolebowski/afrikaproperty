import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
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
            <span className="font-serif text-xl font-bold text-primary">Afrika Property</span>
            <button onClick={onClose} className="p-2 text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col">
              {[
                { label: "Acheter", path: "/properties" },
                { label: "Investir", path: "/invest" },
                { label: "Promoteurs", path: "/publish" },
                { label: "Destinations", path: "/destinations" },
                { label: "Blog", path: "/blog" },
                { label: "Favoris", path: "/favorites" },
                { label: "Mon Profil", path: "/profile" },
                { label: "À propos", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
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
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Langue</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { code: "FR", label: "Français" },
                  { code: "EN", label: "English" },
                  { code: "PT", label: "Português" },
                  { code: "CV", label: "Kabuverdianu" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    className={cn(
                      "flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium border transition-all",
                      lang.code === "FR" 
                        ? "border-black bg-black text-white" 
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t bg-gray-50">
            <Link to="/promoter/login" onClick={onClose}>
              <Button className="w-full mb-3">Espace Promoteur</Button>
            </Link>
            <p className="text-center text-xs text-gray-400">
              © 2024 Afrika Property. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
