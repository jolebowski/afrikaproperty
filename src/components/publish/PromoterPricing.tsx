import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const PLANS = [
  {
    name: "Gratuit",
    price: "0€",
    period: "/ mois",
    description: "Idéal pour tester la plateforme.",
    features: [
      "2 annonces maximum",
      "Visibilité standard",
      "Pas de mise en avant",
      "Pas de statistiques avancées"
    ],
    cta: "Commencer gratuitement",
    popular: false
  },
  {
    name: "Standard",
    price: "39€",
    period: "/ mois",
    description: "Pour les promoteurs réguliers.",
    features: [
      "Jusqu'à 10 annonces",
      "Mise en avant légère",
      "Badge \"Standard\"",
      "Statistiques basiques",
      "Accès Dashboard complet"
    ],
    cta: "Choisir Standard",
    popular: false
  },
  {
    name: "Premium",
    price: "79€",
    period: "/ mois",
    description: "La solution ultime pour une visibilité maximale.",
    features: [
      "Annonces illimitées",
      "Mise en avant forte (Homepage)",
      "Badge \"Premium\"",
      "Statistiques avancées",
      "Accès prioritaire aux leads",
      "Support prioritaire 24/7"
    ],
    cta: "Devenir Premium",
    popular: true
  }
];

export function PromoterPricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Des formules adaptées à <span className="text-primary italic">vos besoins</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choisissez l'offre qui correspond le mieux à votre volume de projets et vos objectifs de vente.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1 + 0.3} width="100%">
              <div className={`relative p-8 rounded-3xl bg-white border transition-all duration-300 h-full flex flex-col ${plan.popular ? 'border-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'}`}>
                
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    Le plus populaire
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 font-medium">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-primary' : 'text-gray-400'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  className={`w-full ${plan.popular ? 'shadow-lg shadow-primary/25' : ''}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
