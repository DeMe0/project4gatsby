module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "project4gatsby",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "PqDEx_HJYhQ_k2WqHRF6deEUaZ9xOIihiLZJZhkEhPE",
        spaceId: "lwq18859yao6",
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
