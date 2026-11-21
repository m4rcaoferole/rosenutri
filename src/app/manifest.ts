import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rose Azuma Nutri",
    short_name: "Rose Nutri",
    description:
      "Método Sakura: programa de 90 dias de emagrecimento para brasileiras e latinas no Japão. Plano alimentar adaptado ao seu turno, com acompanhamento online.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
