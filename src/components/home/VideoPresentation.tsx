import { Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";

export function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-[600px] md:h-[800px] bg-black overflow-hidden group">
      {/* Background Image / Video Placeholder */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <img 
          src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop" 
          alt="Cape Verde Landscape" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ${isPlaying ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <Reveal>
          <span className="inline-block px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-6">
            Découverte
          </span>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-4xl leading-tight">
            L'âme du <span className="text-primary italic">Cap-Vert</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <button 
            onClick={() => setIsPlaying(true)}
            className="group/btn relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20" />
            <Play className="h-10 w-10 md:h-12 md:w-12 text-white group-hover/btn:text-primary fill-current ml-2 transition-colors" />
          </button>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-white/80 text-lg font-light tracking-wide">
            Regarder le film
          </p>
        </Reveal>
      </div>

      {/* Video Player (Simulated) */}
      {isPlaying && (
        <div className="absolute inset-0 z-20 bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&controls=0&rel=0" 
            title="Cape Verde Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
          />
          <button 
            onClick={() => setIsPlaying(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4"
          >
            Fermer
          </button>
        </div>
      )}
    </section>
  );
}
