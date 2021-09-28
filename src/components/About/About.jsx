import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../../styles/about.sass";

const About = (props) => {
  const abouts = props.data.allContentfulAbout.edges;

  const aboutOutput = [];
  abouts.forEach((about) => {
    console.log("about -", about);
    const aboutData = renderRichText(about.node.about);
    aboutData.forEach((element) => {
      aboutOutput.push(element);
    });
  });
  return <div className="about">{aboutOutput}</div>;
};

export default About;
