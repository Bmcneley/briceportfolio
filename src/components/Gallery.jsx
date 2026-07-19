import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images = [], count = images.length || 4 }) {
  const [index, setIndex] = useState(0);
  const slides = Array.from({ length: count }, (_, i) => i);

  const goTo = (i) => setIndex((i + count) % count);

  return (
    <div className="mt-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((i) =>
            images[i] ? (
              <div
                key={i}
                className="flex h-80 w-full shrink-0 items-center justify-center bg-black sm:h-[28rem]"
              >
                <img
                  src={images[i]}
                  alt={`Gallery image ${i + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div
                key={i}
                className="flex h-80 w-full shrink-0 items-center justify-center bg-white/5 text-sm text-white/30 sm:h-[28rem]"
              >
                Placeholder Image {i + 1}
              </div>
            ),
          )}
        </div>

        <button
          onClick={() => goTo(index - 1)}
          className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
          aria-label="Previous image"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
          aria-label="Next image"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/20"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
