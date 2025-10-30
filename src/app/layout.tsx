import type { Metadata } from "next";
import { goldman, roboto } from "@/styles/fonts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Cezar Motos | Rebobinagem e Elétrica de Motos",
  description:
    "Especialista em rebobinagem de estatores, consertos elétricos de motos e serviços para todo o Brasil.",
  metadataBase: new URL("https://cezarmotos.com.br"),
  openGraph: {
    title: "Cezar Motos | Rebobinagem e Elétrica de Motos",
    description:
      "Rebobinagem de bobinas, diagnósticos e serviços elétricos para motos em todo o país.",
    type: "website",
    locale: "pt_BR",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${goldman.variable} ${roboto.variable}`}>
      <body className="antialiased bg-light">
        <Header />
        <main className="w-full md:px-0 sm:px-6  ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
