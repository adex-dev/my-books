import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'docs');

const folders = fs
  .readdirSync(docsDir)
  .filter((file) =>
    fs.statSync(path.join(docsDir, file)).isDirectory()
  );

// const dynamicDocsPlugins = folders.map((dir) => [
//   '@docusaurus/plugin-content-docs',
//   {
//     id: dir,
//     path: `docs/${dir}`,
//     routeBasePath: dir,
//       sidebarPath: undefined,
//       includeCurrentVersion: true,
//   },
// ]);


const navbarItems = folders.map((dir) => {
  const files = fs
    .readdirSync(path.join(docsDir, dir))
    .filter((file) => file.endsWith('.md'));

  const firstDoc = files[0]?.replace('.md', '');

  return {
    to: `/docs/${dir}/${firstDoc}`,
    label: dir.charAt(0).toUpperCase() + dir.slice(1),
    position: 'left' as const,
  };
});


const config: Config = {
  title: 'My Books',
  tagline: 'Modern documentation',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://adex-dev.github.io',
  baseUrl: '/',

  organizationName: 'adex-dev',
  projectName: 'my-books',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',

          routeBasePath: 'docs',

          sidebarPath: './sidebars.ts',
        },

        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // plugins: dynamicDocsPlugins,

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'My Books',

      logo: {
        alt: `My Books - Modern documentation`,
        src: 'img/logo.svg',
      },

      items: [
       ...navbarItems, 
        {
          href: 'https://github.com/adex-dev/my-books',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
      footer: {
          style: 'dark',
          links: [ ],
          copyright: `${new Date().getFullYear()} | Maintained by Akmad Nudin`,
        },
        // prism: {
        //   theme: lightCodeTheme,
        //   darkTheme: darkCodeTheme,
        // },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          additionalLanguages: ['bash', 'rust', 'python', 'toml', 'yaml', 'log', 'hcl'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;