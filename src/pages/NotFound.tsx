import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useTranslation } from "../i18n/I18nProvider";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="font-serif text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
        {t("notFound.title", { fallback: "Page non trouvée" })}
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        {t("notFound.message", {
          fallback: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
        })}
      </p>
      <Link to="/">
        <Button size="lg">{t("notFound.cta", { fallback: "Retour à l'accueil" })}</Button>
      </Link>
    </div>
  );
}
