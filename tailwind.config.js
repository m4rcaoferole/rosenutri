/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#fff",
      green700: "#155b41",
      green800: "#18433c",
      green900: "#0f4730",
      purple700: "#821d78",
      purple800: "#68195d",
      purple900: "#631b52",
      cream100: "#f2f0e4",
      cream200: "#fff6d9",
      cream300: "#f9ebb4",

      // Novas cores auxiliares
      black: "#111111", // Títulos fortes
      gray50: "#f9fafb", // Background ultra claro
      gray100: "#f3f4f6", // Background light
      gray300: "#d1d5db", // Bordas suaves
      gray500: "#6b7280", // Texto secundário
      gray700: "#374151", // Texto principal
      success: "#22c55e", // Mensagens de sucesso (verde vibrante)
      warning: "#facc15", // Atenção/alertas (amarelo)
      error: "#ef4444", // Erros e validações (vermelho)
    },
  },
  plugins: [require("tailwindcss-animate")],
};
