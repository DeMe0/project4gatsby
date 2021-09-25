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
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "PqDEx_HJYhQ_k2WqHRF6deEUaZ9xOIihiLZJZhkEhPE",
        spaceId: "lwq18859yao6",
      },
    },
  ],
};
