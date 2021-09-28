import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import "../../styles/services.sass";

const ServicesList = (props) => {
  const services = props.data.allContentfulServices.edges;

  const servicesOutput = [];
  services.forEach((service) => {
    console.log("service -", service);
    const serviceData = renderRichText(service.node.content);
    serviceData.forEach((element) => {
      servicesOutput.push(element);
    });
  });
  return (
    <div className="services">
      <h2>Services Offered</h2>
      <div className="lists">{servicesOutput}</div>
    </div>
  );
};

export default ServicesList;
