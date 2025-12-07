import { cn } from "../../lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string; // mapping description to subtitle in usage or just adding it
  backgroundImage?: string;
  className?: string;
}

export function PageHero({ title, subtitle, description, backgroundImage, className }: PageHeroProps) {
  return (
    <div className={cn("relative h-[40vh] min-h-[400px] flex items-center justify-center", className)}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-in slide-in-from-bottom-4 duration-700">
          {title}
        </h1>
        {(subtitle || description) && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-150">
            {subtitle || description}
          </p>
        )}
      </div>
    </div>
  );
}
