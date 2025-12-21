/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#fff",
      midori100: "#155b41",
      midori200: "#18433c",
      midori300: "#0f4730",
      murasaki100: "#821d78",
      murasaki200: "#68195d",
      murasaki300: "#631b52",
      shiro100: "#f2f0e4",
      shiro200: "#fff6d9",
      shiro300: "#f9ebb4",

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
