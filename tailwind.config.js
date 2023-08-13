module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // Asegúrate de listar todos tus componentes y páginas aquí.
  theme: {
    extend: {
      // Aquí puedes agregar tus propias personalizaciones al tema por defecto.
      // Por ejemplo:
      // colors: {
      //   'brand-blue': '#1DA1F2',
      // },
    },
  },
  variants: {
    extend: {
      // Aquí puedes agregar variantes adicionales si las necesitas.
      // Por ejemplo:
      // backgroundColor: ['active'],
    },
  },
  plugins: [
    // Aquí puedes añadir plugins de Tailwind CSS si decides usar alguno.
  ],
};
