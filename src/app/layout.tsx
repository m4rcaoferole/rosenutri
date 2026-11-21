import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";

import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["500", "600", "700"],
});

const SITE_TITLE =
  "Rose Azuma Nutri | Nutricionista online para mulheres 40+ no Japão";
const SITE_DESCRIPTION =
  "Método Sakura: programa de 90 dias de emagrecimento para brasileiras e latinas no Japão. Plano alimentar adaptado ao seu turno, com acompanhamento online.";

export const metadata: Metadata = {
  metadataBase: new URL("https://roseazumanutri.com.br"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "nutrição",
    "nutricionista",
    "nutricionista online Japão",
    "Método Sakura",
    "emagrecimento mulheres 40+",
    "Rosemary Azuma",
  ],
  authors: [{ name: "Rosemary Azuma" }],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://roseazumanutri.com.br",
    siteName: "Rose Azuma Nutri",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${lora.variable} scroll-smooth motion-reduce:scroll-auto antialiased`}
    >
      <body className="bg-white font-sans text-base text-gray700">
        {children}
      </body>
    </html>
  );
}
