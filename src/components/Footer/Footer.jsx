import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../../styles/footer.sass";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <p>
        Created by{" "}
        <a href="https://www.linkedin.com/in/tony-demeo/">Tony DeMeo</a>
      </p>
    </div>
  );
};

export default Footer;
