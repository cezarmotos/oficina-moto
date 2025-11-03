"use client";

import Image from "next/image";
import Button from "./ui/Button";

const Banner: React.FC = () => {
  const startYear = 1990;
  const years = new Date().getFullYear() - startYear;
  const label = years === 1 ? "ano" : "anos";
  return (
    <div
      className={`relative w-full min-h-[280px] sm:min-h-[420px] md:min-h-[640px] overflow-hidden border-b border-black/10`}
    >
      <Image
        src="/images/banner.webp"
        alt={"Cezar Motos - Rebobinagem e Elétrica de Motos, Quadriciclos, Barcos e Jet Skis"}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay com opacidade configurável */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: `rgba(0,0,0,0.0)` }}
        aria-hidden
      />

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 z-20 flex justify-center items-center pt-12 md:pt-24 text-center md:justify-start md:items-start md:text-left">
        <div className="w-full px-6 max-w-3xl mx-auto md:mx-0">
          <p className="text-light text-lg sm:text-xl px-2">
            {years} {label} de experiência
          </p>
          <div className="text-light text-[32px] sm:text-5xl md:text-7xl tracking-tight font-goldman leading-tight">
            <p>Elétrica, Eletrônica &</p>
            <p>Rebobinagem</p>
          </div>
          <p className="text-light text-md sm:text-lg md:text-xl px-2">
            De Motos, Quadriciclos, Barcos e Jet Skis
          </p>
          <Button
            className="mt-8 sm:mt-12 text-lg sm:text-2xl"
            onClick={() =>
              window.open("https://web.whatsapp.com/send?phone=5553984228290", "_blank")
            }
          >
            Entre em contato agora
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
