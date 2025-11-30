import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

interface ModernPageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  tag?: string;
  className?: string;
}

export function ModernPageHero({ title, subtitle, image, tag, className }: ModernPageHeroProps) {
  return (
    <div className={cn("relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden", className)}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <Reveal>
              {tag && (
                <span className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                  {tag}
                </span>
              )}
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
                {title}
              </h1>
            </Reveal>
            
            {subtitle && (
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full">
            <Reveal delay={0.3} width="100%">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </div>
  );
}
