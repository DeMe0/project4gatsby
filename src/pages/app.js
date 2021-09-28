import React, { useState, useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import LogoHeader from "../components/LogoHeader/LogoHeader";
import CarouselContainer from "../components/Carousel/Carousel";
import Reviews from "../components/Reviews/Reviews";
import ServicesList from "../components/ServicesList/Services";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { PortfolioProvider } from "../context/context";
import { render } from "react-dom";

export default function App(props) {
  console.log("props =", props);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log("node =", node);
        return <></>;
      },
    },
  };

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
      <CarouselContainer {...props} />
      <About {...props} />
      <ServicesList {...props} />
      <Reviews {...props} />
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
          }
        }
      }
    }
    allContentfulCarouselImages {
      edges {
        node {
          image {
            description
          }
        }
      }
    }
    allContentfulReviews {
      edges {
        node {
          reviews {
            raw
          }
          contentful_id
        }
      }
    }
    allContentfulAbout {
      edges {
        node {
          about {
            raw
          }
          contentful_id
        }
      }
    }
  }
`;
