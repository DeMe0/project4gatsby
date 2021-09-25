import React, { useState, useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import CarouselContainer from "../components/Carousel/Carousel";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { PortfolioProvider } from "../context/context";

export default function App(props) {
  console.log("props =", props);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        return <></>;
      },
    },
  };

  const service = props.data.allContentfulServices.edges[0].node.content;
  const services = props.data.allContentfulServices.edges;

  const output = [];
  services.forEach((service) => {
    const serviceData = renderRichText(service.node.content, options);
    serviceData.forEach((element) => {
      output.push(element);
    });
  });

  return (
    <PortfolioProvider>
      <LogoHeader />
      <CarouselContainer />
      <About output={output} />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export const query = graphql`
  query {
    allContentfulServices {
      edges {
        node {
          content {
            raw
            references {
              __typename
              contentful_id
              title
            }
          }
        }
      }
    }
  }
`;
