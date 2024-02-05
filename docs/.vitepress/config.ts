import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "AIAA DEIC Digital Thread",
  description:
    "A documentation site for the AIAA DEIC Digital Thread Subcommittee",
  lastUpdated: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "196x196",
        href: "https://www.aiaa.org/ResourcePackages/AIAA/assets/images/favicon-196x196.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "128x128",
        href: "https://www.aiaa.org/ResourcePackages/AIAA/assets/images/favicon-128.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "https://www.aiaa.org/ResourcePackages/AIAA/assets/images/favicon-96x96.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://www.aiaa.org/ResourcePackages/AIAA/assets/images/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "https://www.aiaa.org/ResourcePackages/AIAA/assets/images/favicon-16x16.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "AIAA-DEIC Digital Thread",
    editLink: {
      pattern: "https://github.com/aiaa-deic/digthread/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
    },
    logo: {
      light: "/img/darkLogoSmall.png",
      dark: "/img/lightLogoSmall.png",
      alt: "AIAA DEIC - Digital Thread",
    },
    nav: [
      { text: "About", link: "/about/org" },
      {
        text: "Contact Us",
        link: "https://github.com/aiaa-deic/digthread/issues",
      },
    ],
    sidebar: {
      "/about/": [
        {
          text: "About Us",
          items: [
            { text: "The Organization", link: "/about/org" },
            { text: "The Committee", link: "/about/committee" },
            { text: "Our Subcommittee", link: "/about/digthread" },
            { text: "Contributing", link: "/about/contributing" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/aiaa-deic/digthread" },
    ],
    footer: {
      message:
        'AIAA DEIC Digital Thread Subcommittee.  Site and content licensed under <a href="https://github.com/aiaa-deic/digthread/blob/main/LICENSE">MIT</a>.',
      copyright:
        "© 2023-present American Institute of Aeronautics and Astronautics",
    },
  },
})
