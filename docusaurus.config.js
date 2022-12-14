// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XR BLOG',
  tagline: 'Keep learning',
  url: 'https://futurexr.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/myfavicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'futurexr', // Usually your GitHub org/user name.
  projectName: 'futurexr.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XR',
        logo: {
          alt: 'XR Logo',
          src: 'img/xr.jpg',
        },
        items: [
          {
            position: 'left',
            label: 'Project',
            to: '/docs/Project',
          },
          {
            position: 'left',
            label: 'Technology',
            to: '/docs/Technology',
          },
          {
            position: 'left',
            label: 'Life',
            to: '/docs/Life',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/futurexr/futurexr.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Project',
                to: '/docs/Project',
              },
              {
                label: 'Technology',
                to: '/docs/Technology',
              },
              {
                label: 'Life',
                to: '/docs/Life',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Wechat',
                href: 'https://github.com/futurexr/futurexr.github.io',
              },
              {
                label: 'TikTok',
                href: 'https://github.com/futurexr/futurexr.github.io',
              },
              {
                label: 'Taobao',
                href: 'https://shop222930782.taobao.com/?spm=a230r.7195193.1997079397.2.bdc427aaOvDafB',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/futurexr/futurexr.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} XRL. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
