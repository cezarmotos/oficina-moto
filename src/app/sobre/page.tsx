import Image from "next/image";

export const metadata = {
  title: "História | Cezar Motos",
  description: "Conheça a trajetória da Cezar Motos.",
};

export default function HistoriaPage() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-6xl font-goldman text-brand text-center">Nossa História</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-6 w-full max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-center w-full max-w-[22.5rem]">
          <figure className="group relative overflow-hidden rounded-xl w-full">
            <Image
              src="/images/cezar2.webp"
              alt="Profissional em atividade na bancada"
              width={600}
              height={600}
              className="object-cover"
              priority={false}
            />
          </figure>
        </div>
        <div className="flex h-full items-center justify-center w-full max-w-[22.5rem] p-4 bg-white rounded-lg">
          <div className="flex flex-col text-justify">
            <p className="text-[16px] sm:text-xl text-paynes-gray">
              Desde 1990, atuamos no conserto de componentes elétricos e eletrônicos, com foco em
              motos nacionais e importadas, também em barcos, quadriciclos e jet skis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
