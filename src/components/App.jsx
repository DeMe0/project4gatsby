// import React, { useState, useEffect } from "react";
// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Footer from "./Footer/Footer";
// import LogoHeader from "./LogoHeader/LogoHeader";
// import { graphql } from "gatsby";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";
// import { renderRichText } from "gatsby-source-contentful/rich-text";

// import { PortfolioProvider } from "../context/context";

// export default function App(props) {
//   console.log("props =", props);

//   const options = {
//     renderNode: {
//       [BLOCKS.EMBEDDED_ASSET]: (node) => {
//         console.log(node);
//         return <img src={node.data.target.fixed.src} alt="image" />;
//       },
//     },
//   };
//   return (
//     <PortfolioProvider>
//       <LogoHeader />
//       <About />
//       <Contact />
//       <Footer />
//     </PortfolioProvider>
//   );
// }

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         siteUrl
//         title
//         description
//       }
//     }
//   }
// `;
