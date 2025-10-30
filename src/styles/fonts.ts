import localFont from "next/font/local";

// Roboto local (variável normal e itálica) — fonte padrão do site
export const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

// Goldman local (Regular e Bold) — para uso pontual com a classe .font-goldman
export const goldman = localFont({
  src: [
    {
      path: "../../public/fonts/Goldman/Goldman-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Goldman/Goldman-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-goldman",
  display: "swap",
});

// removed duplicate goldman declaration
