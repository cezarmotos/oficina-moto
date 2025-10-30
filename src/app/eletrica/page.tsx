import Carousel, { type CarouselItem } from "@/components/ui/Carousel";

export const metadata = {
  title: "Elétrica | Cezar Motos",
  description: "Diagnóstico e reparos elétricos completos.",
};

const items: CarouselItem[] = [
  { src: "/images/cdi.webp", alt: "CDI" },
  {
    src: "/images/regulador_voltagem.webp",
    alt: "Regulador de voltagem",
  },
  { src: "/images/arranque.webp", alt: "Motor de arranque" },
  { src: "/images/painel_digital.webp", alt: "Painel digital" },
  {
    src: "/images/componentes_eletricos.webp",
    alt: "Componentes elétricos",
  },
];

export default function EletricaPage() {
  return (
    <section className="flex flex-col items-center w-full gap-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-goldman text-brand text-center">
        Elétrica e Eletrônica Embarcada
      </h1>
      <div className="w-full max-w-[28rem] px-4 md:px-0 mb-4">
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

      <p className="text-2xl sm:text-3xl text-dark font-semibold text-center">
        TROCA E MANUTENÇÃO DE COMPONENTES
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mb-8">
        <div className="flex flex-col items-start justify-center w-full h-auto p-6 bg-white rounded-md border border-gray-100 hover:border-brand">
          <p className="text-xl text-dark font-bold">CDI (ignição)</p>
          <p className="mt-2 text-base text-paynes-gray">
            Testes de pulso de disparo, sensor de rotação (pick-up), bobina de ignição e
            aterramentos. Quando necessário, fazemos a <em>substituição</em> por peça compatível e
            revisamos conexões e cabos de vela.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-auto p-6 bg-white rounded-md border border-gray-100 hover:border-brand">
          <p className="text-xl text-dark font-bold">Módulos de injeção eletrônica (ECU/ECM)</p>
          <p className="mt-2 text-base text-paynes-gray">
            Verificação de alimentação, sinais de sensores (TPS, MAP, IAT, ECT), atuadores e
            comunicação. Correção de chicote e troca do módulo quando indicado.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-auto p-6 bg-white rounded-md border border-gray-100 hover:border-brand">
          <p className="text-xl text-dark font-bold">Reguladores/retificadores de voltagem</p>
          <p className="mt-2 text-base text-paynes-gray">
            Medição de corrente e tensão em regime, checagem do estator/alternador e substituição do
            regulador com validação de carga dentro da faixa do fabricante.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-auto p-6 bg-white rounded-md border border-gray-100 hover:border-brand">
          <p className="text-xl text-dark font-bold">Arranque (motor de partida)</p>
          <p className="mt-2 text-base text-paynes-gray">
            Inspeção de relé de partida, botão de start, bendix, escovas, induzido e aterramentos.
            Limpeza, troca de escovas e componentes, ou substituição do conjunto quando necessário.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-auto p-6 bg-white rounded-md border border-gray-100 hover:border-brand md:col-span-2">
          <p className="text-xl text-dark font-bold">Outros componentes elétricos</p>
          <p className="mt-2 text-base text-paynes-gray">
            Sensores, chicote, conectores, relés, comutadores, fusíveis, bobinas e painéis.
            Padronizamos emendas, isolamos e protegemos o sistema contra umidade e vibração.
          </p>
        </div>
      </div>
    </section>
  );
}
