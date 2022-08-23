module.exports = {
  siteMetadata: {
    title: `LingDocs`,
    tagline: `language, linguistics, learning`,
    author: {
      name: `lingdocs.com`,
    },
    description: `Language, linguistics, learning. Making language simple, accessible, and understandable for everyone.`,
    siteUrl: `https://www.lingdocs.com/`,
    commentoUrl: `https://commento.lingdocs.com/`,
    disqusShortname: `lingdocs`,
    social: {
      twitter: `lingdocs`,
      github: `lingdocs`,
      disqus: `lingdocs`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'c5ba0f61-f546-4122-919f-7f02bfa2191d',
        srcUrl: 'https://ua.lingdocs.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<i class="fas fa-link mr-1"></i>`,
            },
          },
          `gatsby-plugin-postcss`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`, // TODO: Get feed working with mdx
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LingDocs`,
        short_name: `LingDocs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#808387`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-FNB8658Z2J",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
}
