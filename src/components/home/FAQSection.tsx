
import { HelpCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Reveal } from "../ui/Reveal";

const FAQS = [
  {
    question: "Peut-on acheter en tant qu’étranger ?",
    answer: "Absolument. Le Cap-Vert garantit la pleine propriété aux investisseurs étrangers, avec exactement les mêmes droits et protections juridiques que les citoyens nationaux. Il n'y a aucune restriction sur l'achat de biens immobiliers."
  },
  {
    question: "Quelles sont les taxes et la fiscalité ?",
    answer: "La fiscalité est très attractive. L'impôt sur les revenus locatifs est un taux forfaitaire unique de 20%. La taxe foncière annuelle (IUP) est d'environ 1.5% de la valeur fiscale du bien. De plus, il existe des conventions fiscales pour éviter la double imposition avec de nombreux pays."
  },
  {
    question: "Comment gérer mon bien à distance ?",
    answer: "C'est notre spécialité. Nous vous mettons en relation avec des sociétés de gestion locative de confiance qui s'occupent de tout : marketing, check-in/out, ménage et maintenance. Vous percevez vos loyers sans avoir à gérer le quotidien."
  },
  {
    question: "Quelles sont les garanties juridiques ?",
    answer: "Le système juridique cap-verdien est basé sur le droit civil (similaire au Portugal et à la France). Toutes les transactions passent par notaire et sont enregistrées au Registre Foncier (Registo Predial), ce qui vous assure un titre de propriété incontestable."
  },
  {
    question: "Je suis promoteur, comment diffuser mes projets ?",
    answer: (
      <span>
        Nous sélectionnons rigoureusement nos partenaires. Si vous proposez des biens d'exception, vous pouvez soumettre votre dossier via notre <Link to="/publish" className="text-primary hover:underline font-medium">Espace Promoteurs</Link>. Une fois validé, vous accéderez à notre clientèle d'investisseurs internationaux.
      </span>
    )
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom max-w-4xl">
        
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                <HelpCircle className="h-4 w-4" />
                <span>Questions Fréquentes</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tout savoir sur <span className="text-primary italic">votre investissement</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 text-lg font-light">
              Des réponses claires pour avancer sereinement dans votre projet.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1 + 0.3} width="100%">
              <div 
                className={cn(
                  "border border-gray-200 rounded-2xl transition-all duration-300 overflow-hidden",
                  openIndex === index ? "bg-gray-50 border-gray-300 shadow-sm" : "bg-white hover:border-gray-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={cn(
                    "font-serif text-xl font-medium transition-colors",
                    openIndex === index ? "text-gray-900" : "text-gray-600"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    openIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  )}>
                    {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 pt-0 text-gray-500 leading-relaxed text-lg font-light border-t border-gray-200/50 mt-2 pt-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
