import { PageHero } from "../components/ui/PageHero";
import { useTranslation } from "../i18n/I18nProvider";

export function Legal({ type }: { type: 'privacy' | 'terms' | 'cookies' }) {
  const { t } = useTranslation();

  const title =
    type === "privacy"
      ? t("legal.privacyTitle", { fallback: "Politique de Confidentialité" })
      : type === "terms"
        ? t("legal.termsTitle", { fallback: "Mentions Légales" })
        : t("legal.cookiesTitle", { fallback: "Gestion des Cookies" });

  const text =
    type === "privacy"
      ? t("legal.privacyText", { fallback: "Détails sur la collecte et l'utilisation de vos données..." })
      : type === "terms"
        ? t("legal.termsText", { fallback: "Informations légales sur l'éditeur du site..." })
        : t("legal.cookiesText", { fallback: "Explication sur l'utilisation des cookies..." });

  return (
    <main>
      <PageHero title={title} />
      <section className="py-20">
        <div className="container-custom max-w-4xl prose prose-lg">
          <p>{text}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>
    </main>
  );
}
