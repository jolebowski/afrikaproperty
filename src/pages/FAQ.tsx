import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { PageHero } from "../components/ui/PageHero";
import { useTranslation } from "../i18n/I18nProvider";
import { cn } from "../lib/utils";

const FAQS = [
  {
    question: "Est-il possible d'acheter un bien au Cap-Vert en tant qu'étranger ?",
    answer: "Oui, absolument. Le Cap-Vert est très ouvert aux investisseurs étrangers. Les droits de propriété sont garantis et le processus est similaire à celui des pays européens."
  },
  {
    question: "Quels sont les frais d'acquisition ?",
    answer: "Les frais d'acquisition (notaire, enregistrement, taxes) s'élèvent généralement à environ 3-5% du prix du bien."
  },
  {
    question: "Comment se déroule la gestion locative ?",
    answer: "Nous proposons un service de gestion locative complet. Nous nous occupons de tout : recherche de locataires, check-in/out, ménage, maintenance. Vous recevez vos revenus locatifs trimestriellement."
  },
  {
    question: "Quelle est la fiscalité sur les revenus locatifs ?",
    answer: "La fiscalité est avantageuse avec un impôt unique sur les revenus locatifs (IUR) de 20%, après déduction des charges d'entretien (jusqu'à 30% des revenus)."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();
  const faqs =
    (t("faqPage.items", {
      fallback: FAQS,
    }) as typeof FAQS) || FAQS;

  return (
    <main>
      <PageHero
        title={t("faqPage.title", { fallback: "Questions Fréquentes" })}
        subtitle={t("faqPage.subtitle", {
          fallback: "Tout ce que vous devez savoir sur l'investissement immobilier au Cap-Vert.",
        })}
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div
                  className={cn(
                    "px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden",
                    openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
