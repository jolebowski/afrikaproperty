import { Check, MapPin, TrendingUp, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const ISLANDS = [
  {
    name: "Sal",
    tagline: "Tourisme de Masse",
    price: "1 800 - 2 500 €",
    yield: "6 - 8%",
    profile: "Investisseur pur (Rendement)",
    strengths: ["Forte demande locative", "Aéroport international", "Infrastructures matures"],
    color: "bg-blue-50 text-blue-900"
  },
  {
    name: "Boa Vista",
    tagline: "Luxe & Nature",
    price: "1 500 - 2 200 €",
    yield: "5 - 7%",
    profile: "Résidence secondaire / Mixte",
    strengths: ["Plages exceptionnelles", "Haut de gamme", "Potentiel de plus-value"],
    color: "bg-amber-50 text-amber-900"
  },
  {
    name: "Santiago",
    tagline: "Business & Capitale",
    price: "1 200 - 1 800 €",
    yield: "5 - 6%",
    profile: "Patrimonial / Long terme",
    strengths: ["Stabilité locative (Expats)", "Centre économique", "Vie locale riche"],
    color: "bg-emerald-50 text-emerald-900"
  },
  {
    name: "São Vicente",
    tagline: "Culture & Charme",
    price: "1 400 - 2 000 €",
    yield: "4 - 6%",
    profile: "Coup de cœur / Retraite",
    strengths: ["Ambiance unique", "Marina internationale", "Tourisme culturel"],
    color: "bg-rose-50 text-rose-900"
  }
];

export function IslandComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quelle île correspond à <span className="text-primary italic">votre profil ?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Chaque île offre une dynamique d'investissement différente. Comparez les indicateurs clés pour faire le meilleur choix.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ISLANDS.map((island, index) => (
            <Reveal key={island.name} delay={index * 0.1 + 0.3} width="100%">
              <div className="h-full border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 bg-white group hover:-translate-y-1">
                {/* Header */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${island.color}`}>
                  {island.tagline}
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8">{island.name}</h3>

                {/* Metrics */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>Prix moyen / m²</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{island.price}</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>Rentabilité estimée</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{island.yield}</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <Users className="h-4 w-4" />
                      <span>Profil acheteur</span>
                    </div>
                    <div className="text-sm font-medium text-gray-700">{island.profile}</div>
                  </div>
                </div>

                {/* Strengths */}
                <div className="pt-6 border-t border-gray-100">
                  <ul className="space-y-3">
                    {island.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
