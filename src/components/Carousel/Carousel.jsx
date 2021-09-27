import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Img from "gatsby-image";
import { Carousel } from "bootstrap";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { renderRichText, renderNode } from "gatsby-source-contentful/rich-text";
import "../../styles/carousel.sass";
// import "bootstrap/dist/css/bootstrap.min.css";

const CarouselContainer = (props) => {
  console.log("props =", props);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        return <></>;
      },
    },
  };

  return (
    <div className="carouselContainer">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={
                props.data.allContentfulCarouselImages.edges[0].node.image[0]
                  .description
              }
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={
                props.data.allContentfulCarouselImages.edges[0].node.image[1]
                  .description
              }
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={
                props.data.allContentfulCarouselImages.edges[0].node.image[2]
                  .description
              }
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselContainer;
