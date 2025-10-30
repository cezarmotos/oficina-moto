import type { Metadata } from "next";

import Banner from "@/components/Banner";
import ListCategory from "@/components/Category/ListCategory";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Cezar Motos | Manutenção, Elétrica e Serviços",
  description:
    "Excelência em manutenção, elétrica, bobinas e soluções especializadas para sua moto. Performance e confiança.",
};

export default function Home() {
  return (
    <main className="w-full bg-light ">
      <Banner />
      <ListCategory />
      <Contact />
    </main>
  );
}
