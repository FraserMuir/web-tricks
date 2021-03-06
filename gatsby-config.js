require("dotenv").config();

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

module.exports = {
  siteMetadata: {
    title: "Web Tricks",
    url: "https://web-tricks.dev",
    siteUrl: "https://web-tricks.dev/",
    blogUrl: "/blog",
    origins: ["https://images.ctfassets.net"],
    titleTemplate: "%s · Web Tricks",
    description: "A collection of web development tips and tricks.",
    image: "logo.webp",
    twitterUsername: "@frasermuir14",
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-robots-txt",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-force-trailing-slashes",
    {
      resolve: "gatsby-plugin-scroll-indicator",
      options: {
        color: "#5ec5ff",
        height: "3px",
        paths: ["/blog/**"],
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 792,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout"),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Web Tricks",
        short_name: "Web Tricks",
        start_url: "/",
        lang: "en",
        background_color: "#20232a",
        theme_color: "#20232a",
        display: "standalone",
        icon: "static/logo.webp",
      },
    },
  ],
};
