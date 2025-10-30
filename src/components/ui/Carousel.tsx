"use client";

import React from "react";
import Image from "next/image";

export type CarouselItem = {
  src: string;
  alt?: string;
};

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  heightClassName?: string;
  imageClassName?: string;
  showArrows?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number; // ms
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  className = "",
  heightClassName = "h-64 md:h-96",
  imageClassName = "object-cover",
  showArrows = true,
  showIndicators = true,
  autoPlay = false,
  interval = 5000,
}) => {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = React.useState(0);

  // Atualiza o índice conforme scroll
  const handleScroll = React.useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(i);
  }, []);

  // AutoPlay
  React.useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    const el = viewportRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const next = (index + 1) % items.length;
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, index, items.length]);

  const goTo = (i: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const bounded = Math.max(0, Math.min(items.length - 1, i));
    el.scrollTo({ left: bounded * el.clientWidth, behavior: "smooth" });
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  if (!items || items.length === 0) return null;

  return (
    <div className={["relative w-full", className].filter(Boolean).join(" ")}>
      {/* Viewport com snap e scrollbar oculto */}
      <div
        ref={viewportRef}
        onScroll={handleScroll}
        className={[
          "w-full overflow-x-auto snap-x snap-mandatory scroll-smooth",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        <div className="flex w-full">
          {items.map((item, i) => (
            <figure
              className={[
                "relative flex-shrink-0 w-full snap-start overflow-hidden rounded-xl",
                heightClassName,
                "shadow-xl hover:shadow-2xl transition-shadow duration-300",
              ].join(" ")}
              key={`${item.src}-${i}`}
            >
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                className={imageClassName}
                sizes="100vw"
                priority={i === 0}
              />
            </figure>
          ))}
        </div>
      </div>

      {/* Controles */}
      {showArrows && items.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            ›
          </button>
        </>
      )}

      {/* Indicadores */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={[
                "w-2.5 h-2.5 rounded-full",
                i === index ? "bg-white" : "bg-white/50 hover:bg-white/80",
                "transition-colors",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
