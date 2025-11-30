import { useTranslation } from "../../i18n/I18nProvider";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-serif text-xl font-bold mb-4">
        {t("property.contact.title", { fallback: "Intéressé par ce bien ?" })}
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        {t("property.contact.subtitle", {
          fallback: "Laissez-nous vos coordonnées, un conseiller vous recontactera sous 24h.",
        })}
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder={t("property.contact.placeholders.firstName", { fallback: "Prénom" })} />
          <Input placeholder={t("property.contact.placeholders.lastName", { fallback: "Nom" })} />
        </div>
        <Input placeholder={t("property.contact.placeholders.email", { fallback: "Email" })} type="email" />
        <Input placeholder={t("property.contact.placeholders.phone", { fallback: "Téléphone" })} type="tel" />
        <textarea
          className="w-full min-h-[100px] rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={t("property.contact.placeholders.message", {
            fallback: "Bonjour, je souhaiterais avoir plus d'informations sur ce bien...",
          })}
        />
        <Button className="w-full">
          {t("property.contact.submit", { fallback: "Envoyer la demande" })}
        </Button>
      </form>

      <p className="text-xs text-gray-400 mt-4 text-center">
        {t("property.contact.consent", {
          fallback: "En envoyant ce formulaire, vous acceptez notre politique de confidentialité.",
        })}
      </p>
    </div>
  );
}
