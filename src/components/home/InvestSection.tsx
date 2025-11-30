import { ArrowRight, Globe, Shield, Sun, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Rendement Locatif",
    description: "Des rendements attractifs entre 5% et 9% portés par une demande touristique croissante."
  },
  {
    icon: Shield,
    title: "Stabilité & Sécurité",
    description: "Un cadre politique stable et une sécurité juridique totale pour les investisseurs étrangers."
  },
  {
    icon: Sun,
    title: "Fiscalité Douce",
    description: "Un impôt unique de 20% sur les revenus locatifs et de nombreuses conventions fiscales."
  },
  {
    icon: Globe,
    title: "Position Stratégique",
    description: "Un carrefour incontournable entre l'Europe, l'Afrique et les Amériques."
  }
];

export function InvestSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Header Section - Sticky on Desktop */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                <Sun className="h-4 w-4" />
                <span>Opportunité</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
                Pourquoi investir <br/>
                <span className="text-primary italic">au Cap-Vert ?</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-gray-500 text-xl leading-relaxed max-w-md">
                Une destination d'exception alliant cadre de vie paradisiaque, stabilité politique et opportunités économiques uniques.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="pt-4">
                <Link to="/invest">
                  <Button size="lg" className="h-14 px-8 text-lg group">
                    Découvrir les avantages
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Benefits Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={index} delay={index * 0.1 + 0.2} width="100%">
                <div 
                  className="group p-10 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 border border-transparent hover:border-gray-100"
                >
                  <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
