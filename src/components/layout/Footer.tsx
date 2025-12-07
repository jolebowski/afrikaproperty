import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("footer.links.properties", { fallback: "Propriétés à vendre" }), path: "/properties" },
    { label: t("footer.links.agencies", { fallback: "Nos agences" }), path: "/agencies" },
    { label: t("footer.links.invest", { fallback: "Investir au Cap-Vert" }), path: "/invest" },
    { label: t("footer.links.destinations", { fallback: "Nos destinations" }), path: "/destinations" },
    { label: t("footer.links.blog", { fallback: "Le Blog" }), path: "/blog" },
  ];

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              {t("common.brand", { fallback: "Afrika Property" })}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer.description", {
                fallback:
                  "Le premier portail immobilier premium dédié au Cap-Vert. Découvrez des propriétés d'exception et des opportunités d'investissement uniques.",
              })}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              {t("footer.navigation", { fallback: "Navigation" })}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              {t("footer.contact", { fallback: "Contact" })}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{t("footer.address", { fallback: "Av. Amílcar Cabral, Praia, Santiago, Cap-Vert" })}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>{t("footer.phone", { fallback: "+238 999 99 99" })}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>{t("footer.email", { fallback: "contact@luxecv.com" })}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; 2024 {t("common.brand", { fallback: "Afrika Property" })}.{" "}
            {t("footer.rights", { fallback: "Tous droits réservés." })}
          </p>
          <div className="flex gap-6">
            <Link to="/legal" className="hover:text-white">
              {t("footer.legal", { fallback: "Mentions légales" })}
            </Link>
            <Link to="/privacy" className="hover:text-white">
              {t("footer.privacy", { fallback: "Confidentialité" })}
            </Link>
            <Link to="/cookies" className="hover:text-white">
              {t("footer.cookies", { fallback: "Cookies" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
