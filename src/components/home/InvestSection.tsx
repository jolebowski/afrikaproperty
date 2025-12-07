import { ArrowRight, Globe, Shield, Sun, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function InvestSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      title: t("home.invest.benefits.yieldTitle", { fallback: "Rendement Locatif" }),
      description: t("home.invest.benefits.yieldDesc", {
        fallback: "Des rendements attractifs entre 5% et 9% portés par une demande touristique croissante.",
      }),
    },
    {
      icon: Shield,
      title: t("home.invest.benefits.safetyTitle", { fallback: "Stabilité & Sécurité" }),
      description: t("home.invest.benefits.safetyDesc", {
        fallback:
          "Un cadre politique stable et une sécurité juridique totale pour les investisseurs étrangers.",
      }),
    },
    {
      icon: Sun,
      title: t("home.invest.benefits.taxTitle", { fallback: "Fiscalité Douce" }),
      description: t("home.invest.benefits.taxDesc", {
        fallback: "Un impôt unique de 20% sur les revenus locatifs et de nombreuses conventions fiscales.",
      }),
    },
    {
      icon: Globe,
      title: t("home.invest.benefits.geoTitle", { fallback: "Position Stratégique" }),
      description: t("home.invest.benefits.geoDesc", {
        fallback: "Un carrefour incontournable entre l'Europe, l'Afrique et les Amériques.",
      }),
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Header Section - Sticky on Desktop */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                <Sun className="h-4 w-4" />
                <span>{t("home.invest.tag", { fallback: "Opportunité" })}</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                {t("home.invest.title", { fallback: "Pourquoi investir" })} <br/>
                <span className="text-primary italic">
                  {t("home.invest.accent", { fallback: "au Cap-Vert ?" })}
                </span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-gray-500 text-xl leading-relaxed max-w-md">
                {t("home.invest.description", {
                  fallback:
                    "Une destination d'exception alliant cadre de vie paradisiaque, stabilité politique et opportunités économiques uniques.",
                })}
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="pt-4">
                <Link to="/invest">
                  <Button size="lg" className="h-14 px-8 text-lg group">
                    {t("home.invest.cta", { fallback: "Découvrir les avantages" })}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Benefits Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {benefits.map((benefit, index) => (
              <Reveal key={index} delay={index * 0.1 + 0.2} width="100%" className="h-full flex flex-col">
                <div 
                  className="group p-10 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-100 h-full flex flex-col"
                >
                  <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
