import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/property/ContactForm";
import { PageHero } from "../components/ui/PageHero";

export function Contact() {
  return (
    <main>
      <PageHero
        title="Contactez-nous"
        subtitle="Notre équipe est à votre écoute pour concrétiser votre projet."
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Parlons de votre projet</h2>
              <p className="text-gray-600 mb-12">
                Que vous souhaitiez acheter, vendre ou investir, nos conseillers sont là pour répondre à toutes vos questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Nos Bureaux</h3>
                    <p className="text-gray-600">Av. Amílcar Cabral<br />Praia, Santiago, Cap-Vert</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-600">+238 999 99 99</p>
                    <p className="text-sm text-gray-500">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">contact@luxecv.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
