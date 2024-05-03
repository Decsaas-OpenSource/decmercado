import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      'default': '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      "primario-100": "#B5CADB",
      "primario-200": "#92B0CA",
      "primario-300": "#608CB2",
      "primario-500": "#11538C",
      "secundario-100": "#BDB9CC",
      "secundario-200": "#9D97B3",
      "secundario-300": "#706790",
      "secundario-500": "#291C59",
      "neutro-300": "#5D5E6E",
      "neutro-400": "#3D3E51",
      "neutro-500": "#0D0E26",
      "neutro-800": "#070815",
      "perigo-200": "#F78A8A",
      "perigo-300": "#F45454",
      "alerta-200": "#FFED8B",
      "carrinho-000-gradiente": "#092E4D",
      "carrinho-056-gradiente": "#0E4473",
      "carrinho-100-gradiente": "#11538C",
      "lista-000-gradiente": "#E7EEF4",
      "lista-012-gradiente": "#D3DFEA",
      "lista-056-gradiente": "#A5BED4",
      "lista-100-gradiente": "#608CB2",
      "receita-000-gradiente": "#9D97B3",
      "receita-067-gradiente": "#9791AE",
      "receita-100-gradiente": "#706790",
      branco: "#FFFFFF",
      preto: "#000000"
    },
    fontFamily: {
      'body': ['"Roboto"']
    },
    fontSize: {
      "bold-titulo": ["24px" , {
        fontWeight: 'bold'
      }],
      "bold-sub-titulo": ["18px" , {
        fontWeight: 'bold'
      }],
      "bold-paragrafo": ["14px" , {
        fontWeight: 'bold'
      }],
      "bold-label": ["12px" , {
        fontWeight: 'bold'
      }],
      "regular-paragrafo": "14px",
      "regular-label": "12px",
    }
  },
  plugins: [],
};
export default config;
