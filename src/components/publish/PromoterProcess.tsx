import { ArrowRight, CheckCircle2, FileText, Rocket, Search } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  {
    step: 1,
    title: "Création du Compte",
    description: "Inscrivez-vous en tant que professionnel et validez votre identité (K-bis, Licence).",
    icon: FileText
  },
  {
    step: 2,
    title: "Publication des Biens",
    description: "Utilisez notre interface intuitive pour créer des annonces riches (Photos HD, Plans, Visites 3D).",
    icon: Rocket
  },
  {
    step: 3,
    title: "Validation & Diffusion",
    description: "Notre équipe valide la qualité de l'annonce avant de la diffuser à notre réseau international.",
    icon: CheckCircle2
  },
  {
    step: 4,
    title: "Réception des Leads",
    description: "Recevez les demandes qualifiées directement sur votre tableau de bord et par email.",
    icon: Search
  }
];

export function PromoterProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Comment ça marche ?
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Publiez vos projets en <span className="text-primary italic">4 étapes simples</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((step, index) => (
              <Reveal key={index} delay={index * 0.1 + 0.2} width="100%">
                <div className="relative bg-white pt-4 group">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <div className="text-center px-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-gray-50 text-xs font-bold text-gray-500 mb-4">
                      Étape 0{step.step}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile/tablet flow */}
                  {index < STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 text-gray-300">
                      <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
