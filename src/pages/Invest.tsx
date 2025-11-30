import { Link } from "react-router-dom";
import { CaseStudies } from "../components/invest/CaseStudies";
import { CurrentOpportunities } from "../components/invest/CurrentOpportunities";
import { IslandComparison } from "../components/invest/IslandComparison";
import { Timeline } from "../components/invest/Timeline";
import { Button } from "../components/ui/Button";
import { ModernPageHero } from "../components/ui/ModernPageHero";
import { Reveal } from "../components/ui/Reveal";
import { useTranslation } from "../i18n/I18nProvider";

export function Invest() {
  const { t } = useTranslation();

  return (
    <main>
      <ModernPageHero
        tag={t("investPage.tag", { fallback: "Investissement" })}
        title={t("investPage.title", { fallback: "Votre Patrimoine, Horizon Océan" })}
        subtitle={t("investPage.subtitle", {
          fallback:
            "Alliez rentabilité et art de vivre dans une destination d'avenir. Le Cap-Vert, votre nouvelle terre d'opportunités.",
        })}
        image="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop"
      />
      
      <IslandComparison />

      <CurrentOpportunities />

      <CaseStudies />
      
      <Timeline />

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container-custom">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              {t("investPage.ctaTitle", { fallback: "Prêt à lancer votre projet ?" })}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              {t("investPage.ctaText", {
                fallback:
                  "Nos conseillers sont à votre disposition pour étudier votre projet et vous proposer les meilleures opportunités.",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                {t("investPage.ctaButton", { fallback: "Demander une consultation gratuite" })}
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
