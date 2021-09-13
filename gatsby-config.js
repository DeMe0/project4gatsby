module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "project4gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "lwq18859yao6",
      },
    },
  ],
};
