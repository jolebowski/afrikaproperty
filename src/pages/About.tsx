import { PageHero } from "../components/ui/PageHero";
import { useTranslation } from "../i18n/I18nProvider";

export function About() {
  const { t } = useTranslation();
  const values =
    (t("about.values", {
      fallback: [
        {
          title: "Expertise Locale",
          description: "Une connaissance approfondie du marché cap-verdien et de ses spécificités juridiques.",
        },
        {
          title: "Sélection Premium",
          description: "Un catalogue exclusif de biens haut de gamme, vérifiés et validés par nos experts.",
        },
        {
          title: "Accompagnement Global",
          description: "De la recherche du bien à la gestion locative, nous sommes à vos côtés à chaque étape.",
        },
      ],
    }) as Array<{ title: string; description: string }>) || [];

  return (
    <main>
      <PageHero
        title={t("about.title", { fallback: "À Propos de Luxe CV" })}
        subtitle={t("about.subtitle", {
          fallback: "Votre partenaire de confiance pour l'immobilier de prestige au Cap-Vert.",
        })}
        backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">
              {t("about.missionTitle", { fallback: "Notre Mission" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("about.missionCopy", {
                fallback:
                  "Luxe CV est né d'une passion pour le Cap-Vert et d'une volonté d'offrir un service d'excellence aux investisseurs internationaux. Nous sélectionnons rigoureusement les meilleures opportunités immobilières pour vous garantir un investissement sûr et rentable.",
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                <h3 className="font-serif text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
