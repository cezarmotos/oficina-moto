import Contact from "@/components/Contact/Contact";

export const metadata = {
  title: "Contato | Cezar Motos",
  description: "Fale com a gente e peça um orçamento.",
};

export default function ContatoPage() {
  return (
    <section className="flex flex-col items-center w-full">
      <Contact />
    </section>
  );
}
