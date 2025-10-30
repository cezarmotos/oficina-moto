import React from "react";
import Image from "next/image";

interface GalleryItemProps {
  src: string;
  alt: string;
  caption?: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, caption }) => {
  return (
    <figure className="group relative overflow-hidden rounded-xl">
      {/* Wrapper quadrado (1:1) para padronizar os tiles da galeria */}
      <div className="relative w-full pb-[100%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover rounded-xl"
        />
      </div>
      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 text-xs md:text-sm text-white/90 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default GalleryItem;
