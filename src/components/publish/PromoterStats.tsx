import { BarChart3, Globe2, MousePointerClick, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const STATS = [
  {
    label: "Visiteurs Mensuels",
    value: "15k+",
    icon: Users,
    description: "Une audience qualifiée en croissance constante."
  },
  {
    label: "Pays Touchés",
    value: "12",
    icon: Globe2,
    description: "Une visibilité internationale ciblée (Europe, USA)."
  },
  {
    label: "Taux de Conversion",
    value: "4.8%",
    icon: MousePointerClick,
    description: "Des leads qualifiés prêts à investir."
  },
  {
    label: "Projets Financés",
    value: "120M€",
    icon: BarChart3,
    description: "Volume d'affaires généré via la plateforme."
  }
];

export function PromoterStats() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-300 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
