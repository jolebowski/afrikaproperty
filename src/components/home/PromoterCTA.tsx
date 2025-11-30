import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function PromoterCTA() {
  const { t } = useTranslation();
  const title = t<string>("home.promoter.title", { fallback: "Donnez une envergure" });
  const accent = t<string>("home.promoter.accent", { fallback: "internationale" });
  const suffix = t<string>("home.promoter.suffix", { fallback: "à vos projets" });

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/90" />
        
        {/* Decorative gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          
          <Reveal width="100%">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-sm font-medium tracking-wide uppercase">
                <Building2 className="h-4 w-4 text-primary" />
                <span>{t("home.promoter.tag", { fallback: "Espace Promoteurs" })}</span>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2} width="100%">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {title} <br className="hidden md:block" />
              <span className="text-primary italic">{accent}</span> {suffix}
            </h2>
          </Reveal>
          
          <Reveal delay={0.4} width="100%">
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              {t("home.promoter.description", {
                fallback:
                  "Rejoignez le réseau exclusif Luxe CV. Publiez vos biens, accédez à une clientèle d'investisseurs qualifiés et gérez votre activité depuis un tableau de bord performant.",
              })}
            </p>
          </Reveal>
          
          <Reveal delay={0.6} width="100%">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/publish">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 transition-all hover:scale-105">
                  {t("home.promoter.becomePartner", { fallback: "Devenir Partenaire" })}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/promoter/login">
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black transition-all">
                  {t("home.promoter.login", { fallback: "Se connecter" })}
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
