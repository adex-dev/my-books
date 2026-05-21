import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const docsDir = path.join(process.cwd(), "docs");

const folders = fs
  .readdirSync(docsDir)
  .filter((file) => fs.statSync(path.join(docsDir, file)).isDirectory());

const navbarItems = folders
  .map((dir) => {
    const dirPath = path.join(docsDir, dir);

    const files = fs
      .readdirSync(dirPath)
      .filter((file) => /\.(md|mdx)$/.test(file))
      .sort();

    if (files.length === 0) return null;

    const firstDoc = files[0].replace(/^\d+-/, "").replace(/\.(md|mdx)$/, "");

    return {
      to: `/docs/${dir}/${firstDoc}`,
      label: dir.charAt(0).toUpperCase() + dir.slice(1),
      position: "left" as const,
    };
  })
  .filter(Boolean);

const config: Config = {
  title: "My Books",
  tagline: "Modern developer documentation",
  favicon: "img/logo.svg",

  markdown: {
    mermaid: true,
  },
  future: {
    v4: true,
  },

  url: "https://adex-dev.github.io",
  baseUrl: "/my-books/",
  organizationName: "adex-dev",
  projectName: "my-books",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",

          routeBasePath: "docs",

          sidebarPath: "./sidebars.ts",
          numberPrefixParser: true,
        },

        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [],
  themes: ["@docusaurus/theme-mermaid"],
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "robots",
        content: "noindex, nofollow, noarchive, nosnippet",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "googlebot",
        content: "noindex, nofollow, noarchive, nosnippet",
      },
    },
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
      options: {
        securityLevel: "loose",
        treeView: {
          rowIndent: 20,
        },
      },
    },
    navbar: {
      title: "My Books",
      logo: {
        alt: ` Modern documentation`,
        src: "img/logo.svg",
      },
      items: [
        ...navbarItems,
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/adex-dev/my-books",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `${new Date().getFullYear()} | Maintained by Akmad Nudin`,
    },
    // prism: {
    //   theme: lightCodeTheme,
    //   darkTheme: darkCodeTheme,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "rust",
        "python",
        "toml",
        "yaml",
        "log",
        "hcl",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
