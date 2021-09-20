import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../../styles/navbar.sass'

const LogoHeader = () => {
  return (
    <div className="logoNavBar">
        <img src="https://res.cloudinary.com/ademeo/image/upload/v1631563905/project4/father-and-son-logo_lb1l4o.png" alt="logo_img"/>
        <ul>
          <a href=""> 
            <div class="link">Home</div> 
          </a>
          <a href=""> 
            <div class="link">Services</div> 
          </a>
          <a href=""> 
            <div class="link">Reviews</div>
          </a>
          <a href="">
            <div class="link">Contact Me</div>
          </a>
        </ul>
    </div>
  );
};

export default LogoHeader;
