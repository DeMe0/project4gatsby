import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const About = (props) => {
  console.log("props.output =", props.output);
  return <div className="propClass">{props.output}</div>;
};

export default About;
