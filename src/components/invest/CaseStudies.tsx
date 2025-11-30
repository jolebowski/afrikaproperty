import { CheckCircle2, User } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const CASE_STUDY = {
  title: "L'investissement Patrimonial de Marc & Sophie",
  profile: "Couple, 45 ans, Paris",
  goal: "Diversification & Revenus complémentaires",
  steps: [
    {
      step: 1,
      title: "Le Budget",
      content: "Marc et Sophie disposaient d'un apport de 80 000€ et souhaitaient investir sans dépasser 200 000€ au total.",
      icon: "💰"
    },
    {
      step: 2,
      title: "La Sélection",
      content: "Nous les avons orientés vers un T2 à Santa Maria (Sal), dans une résidence avec piscine, à 5min de la plage. Prix : 165 000€.",
      icon: "🏡"
    },
    {
      step: 3,
      title: "La Gestion",
      content: "Mise en location saisonnière via notre partenaire local. Taux d'occupation moyen la première année : 72%.",
      icon: "🔑"
    },
    {
      step: 4,
      title: "Le Résultat",
      content: "Revenus nets annuels : 11 800€ (après charges et impôts). Rentabilité nette : 7.1%. Plus-value latente : +15% en 2 ans.",
      icon: "📈"
    }
  ]
};

export function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/3">
            <Reveal>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Étude de cas
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Du projet à la <span className="text-primary italic">réalité</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Découvrez comment nous accompagnons nos clients, étape par étape, vers la réussite de leur investissement.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900">{CASE_STUDY.profile}</h4>
                    <p className="text-sm text-gray-500">{CASE_STUDY.goal}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Projet réalisé en 3 mois</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Steps Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_STUDY.steps.map((step, index) => (
                <Reveal key={step.step} delay={index * 0.1 + 0.4} width="100%">
                  <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
                    <div className="absolute top-8 right-8 text-4xl opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                      {step.icon}
                    </div>
                    <div className="text-6xl font-serif font-bold text-gray-100 mb-4 group-hover:text-primary/10 transition-colors">
                      0{step.step}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
