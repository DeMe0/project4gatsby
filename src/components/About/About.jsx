import React, { useContext, useState, useEffect } from "react";
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
