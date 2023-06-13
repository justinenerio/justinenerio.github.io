// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Justin Enerio',
  tagline: 'I am a Software Developer',
  favicon: 'img/favicon.ico',
  url: 'https://justinenerio.dev',
  baseUrl: '/',
  organizationName: 'justinenerio',
  projectName: 'justinenerio.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-V2KC8E90V1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'personal, blog, software, development, justinenerio, justin, enerio, philippines' }],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'justinenerio',
        hideOnScroll: true,
        items: [
          { to: '/projects', label: 'projects', position: 'right' },
          { to: '/blog', label: 'blog', position: 'right' },
          { to: '/about', label: 'about', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'contact@justinenerio.dev',
                href: 'mailto:contact@justinenerio.dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/justinenerio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Justin Enerio`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins:    [
      async function tailwindPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
};

module.exports = config;
