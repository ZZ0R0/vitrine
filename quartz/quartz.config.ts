import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "vitrine.zz0r0.fr",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff", // --color-base-00:contentReference[oaicite:5]{index=5}
          lightgray: "#f6f6f6", // --color-base-20:contentReference[oaicite:6]{index=6}
          gray: "#e0e0e0", // --color-base-30:contentReference[oaicite:7]{index=7}
          darkgray: "#5c5c5c", // --color-base-70:contentReference[oaicite:8]{index=8}
          dark: "#222222", // --color-base-100:contentReference[oaicite:9]{index=9}

          // accent Obsidian (hsl(258,88%,66%)):contentReference[oaicite:10]{index=10}
          secondary: "#8a5cf5",
          // variante légèrement plus claire (équivalent “accent-1” light)
          tertiary: "#9873f7",

          // hover soft = rgba(var(--mono-rgb-100), 0.067) avec mono-rgb-100=0,0,0 en light:contentReference[oaicite:11]{index=11}
          highlight: "rgba(0, 0, 0, 0.067)",
          textHighlight: "hsla(258, 88%, 66%, 0.20)",
        },

        darkMode: {
          light: "#1e1e1e", // --color-base-00:contentReference[oaicite:12]{index=12}
          lightgray: "#242424", // --color-base-10:contentReference[oaicite:13]{index=13}
          gray: "#363636", // --color-base-30:contentReference[oaicite:14]{index=14}
          darkgray: "#b3b3b3", // --color-base-70:contentReference[oaicite:15]{index=15}
          dark: "#dadada", // --color-base-100:contentReference[oaicite:16]{index=16}

          // text-accent en dark = accent-1 (plus doux que l’accent brut):contentReference[oaicite:17]{index=17}
          secondary: "#a68af9",
          tertiary: "#c5b6fc",

          // hover soft = rgba(var(--mono-rgb-100), 0.067) avec mono-rgb-100=255,255,255 en dark:contentReference[oaicite:18]{index=18}:contentReference[oaicite:19]{index=19}
          highlight: "rgba(255, 255, 255, 0.067)",
          textHighlight: "hsla(258, 88%, 66%, 0.20)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
