import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "../../styles/navbar.sass";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }`;

const MenuIcon = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 120px;
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

  ul {
    list-style-type: none;
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin-left: -20%;
  }

  li {
    margin-top: 1rem;
  }
  .link {
    border: 1px black solid;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 6px;
  }

  .link a {
    font-size: 0.8em;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;
    cursor: pointer;

    :hover {
      color: #6ab4ff;
    }
  }
`;

const LogoHeader = () => {
  const [nav, showNav] = useState(false);

  return (
    <div className="logoNavBar" id="logoNavBar">
      <img
        src="https://res.cloudinary.com/ademeo/image/upload/v1631563905/project4/father-and-son-logo_lb1l4o.png"
        alt="logo_img"
      />
      <Global />
      <MenuIcon onClick={() => showNav(!nav)} nav={nav}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <div class="link">
              {" "}
              <a href="#logoNavBar">Home</a>
            </div>
          </li>
          <li>
            <div class="link">
              {" "}
              <a href="#about">About</a>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#services">Services</a>
            </div>
          </li>
          <li>
            <div class="link">
              {" "}
              <a href="#reviews">Reviews</a>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#contact">Contact Me</a>
            </div>
          </li>
        </ul>
      </MenuLinks>
    </div>
  );
};

export default LogoHeader;
