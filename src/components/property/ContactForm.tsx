import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function ContactForm() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-serif text-xl font-bold mb-4">Intéressé par ce bien ?</h3>
      <p className="text-gray-500 text-sm mb-6">
        Laissez-nous vos coordonnées, un conseiller vous recontactera sous 24h.
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Prénom" />
          <Input placeholder="Nom" />
        </div>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Téléphone" type="tel" />
        <textarea
          className="w-full min-h-[100px] rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Bonjour, je souhaiterais avoir plus d'informations sur ce bien..."
        />
        <Button className="w-full">Envoyer la demande</Button>
      </form>

      <p className="text-xs text-gray-400 mt-4 text-center">
        En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
      </p>
    </div>
  );
}
