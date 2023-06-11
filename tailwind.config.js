// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind reset to avoid overriding Docusaurus styles
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  
};
