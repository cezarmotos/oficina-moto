import Carousel, { type CarouselItem } from "@/components/ui/Carousel";

export const metadata = {
  title: "Bobinas | Cezar Motos",
  description: "Rebobinagem e manutenção de estatores.",
};

export default function BobinasPage() {
  const items: CarouselItem[] = [
    { src: "/images/bobinasAll.webp", alt: "Conjunto de bobinas" },
    { src: "/images/bobinas.webp", alt: "Conjunto de bobinas" },
    { src: "/images/bobina.webp", alt: "Detalhe de bobina" },
    {
      src: "/images/bobina2.webp",
      alt: "Rebobinagem em processo",
    },
    { src: "/images/estator1.webp", alt: "Estatores prontos" },
    { src: "/images/estator2.webp", alt: "Estatores prontos" },
    { src: "/images/estator3.webp", alt: "Estatores prontos" },
    { src: "/images/estator4.webp", alt: "Estatores prontos" },
  ];
  return (
    <section className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-goldman text-brand text-center">
        Bobinas e Estatores
      </h1>
      <div className="w-full max-w-[28rem] px-4 md:px-12">
        <Carousel
          items={items}
          autoPlay
          interval={3000}
          heightClassName="h-[12rem] sm:h-[14rem] md:h-[18rem]"
          imageClassName="object-cover"
          showArrows
          showIndicators
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-6 mb-24">
        <ul className="text-base md:text-xl text-dark list-disc pl-6 space-y-2 marker:text-[var(--red-pantone)] max-w-3xl">
          <li className="leading-relaxed">
            Rebobinagem conforme especificação (bitola e número de espiras)
          </li>
          <li className="leading-relaxed">Isolamento, envernizamento e acabamento profissional</li>
          <li className="leading-relaxed">
            Correção de curto/aberto, substituição de conectores e chicote
          </li>
          <li className="leading-relaxed">Testes de resistência, continuidade e carga</li>
          <li className="leading-relaxed">Prazo e garantia combinados</li>
        </ul>
      </div>
    </section>
  );
}
