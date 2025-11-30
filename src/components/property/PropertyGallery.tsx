import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 group">
        <img
          src={images[currentImage]}
          alt={`Vue ${currentImage + 1}`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm">
          <Maximize2 className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={cn(
                "relative aspect-video overflow-hidden rounded-lg bg-gray-100 transition-all",
                currentImage === idx ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
              )}
            >
              <img
                src={image}
                alt={`Miniature ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
