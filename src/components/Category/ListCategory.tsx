import CardCategory from "./CardCategory";

const ListCategory: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:flex md:justify-center sm:mt-[100px] md:my-[-100px] px-4 z-5 mb-24">
      <div className="flex justify-center p-2">
        <CardCategory
          imageSrc="/images/bobinas.webp"
          imageAlt="Rebobinagem"
          title="Rebobinagem"
          description="Rebobinagem de todo tipo de estatores e bobinas de motos, quadriciclos, barcos e jet skis, nacionais e importadas."
        />
      </div>

      <div className="flex justify-center p-2">
        <CardCategory
          imageSrc="/images/componentes_eletricos.webp"
          imageAlt="CDI"
          title="Injeção Eletrônica"
          description="Troca e manutenção de CDI, módulos de injeção eletrônica, reguladores de voltagem, arranques e outros componentes eletrônicos."
        />
      </div>

      <div className="flex justify-center p-2">
        <CardCategory
          imageSrc="/images/painel_digital.webp"
          imageAlt="Paineis Digitais"
          title="Painéis Digitais"
          description="Troca e manutenção completa de painéis digitais e analógicos, nacionais e importados."
        />
      </div>

      <div className="flex justify-center p-2">
        <CardCategory
          imageSrc="/images/veiculos.png"
          imageAlt="Veículos Nacionais e Importados"
          title="Veículos Nacionais e Importados"
          description="Trabalhamos com veículos nacionais e importados, oferecendo serviços especializados em elétrica e eletrônica para garantir o melhor desempenho."
        />
      </div>
    </div>
  );
};

export default ListCategory;
