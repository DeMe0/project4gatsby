import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer navbar-static-bottom">
      <h1>Footer Component</h1>
    </div>
  );
};

export default Footer;

// import React, { useContext } from "react";
// import { Container } from "react-bootstrap";
// import { Link } from "react-scroll";
// import { Nav, NavItem } from "reactstrap";
// import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTable,
//   faWallet,
//   faStore,
//   faUsers,
//   faCartArrowDown,
//   faPhone,
//   faWrench,
//   faHome,
// } from "@fortawesome/free-solid-svg-icons";

// const tabs = [
//   {
//     route: "/home",
//     icon: faTable,
//     label: "Menu",
//   },
//   {
//     route: "/services",
//     icon: faWrench,
//     label: "Services",
//   },
//   {
//     route: "/",
//     icon: faHome,
//     label: "Home",
//   },
//   {
//     route: "/reviews",
//     icon: faUsers,
//     label: "Reviews",
//   },
//   {
//     route: "/contactme",
//     icon: faPhone,
//     label: "Contact",
//   },
// ];

// const Footer = () => {
//   return (
//     <div className="nav">
//       <nav
//         className="navbar fixed-bottom navbar-light bottom-tab-nav"
//         role="navigation"
//       >
//         <Nav className="w-100">
//           <div className="d-flex flex-row justify-content-around w-100">
//             {tabs.map((tab, index) => (
//               <NavItem key={`tab-${index}`}>
//                 <NavLink
//                   to={tab.route}
//                   className="nav-link"
//                   activeClassName="active"
//                 >
//                   <div className="row d-flex flex-column justify-content-center align-items-center">
//                     <div className="navicons">
//                       <FontAwesomeIcon className="icon" icon={tab.icon} />
//                       {tab.label}
//                     </div>
//                   </div>
//                 </NavLink>
//               </NavItem>
//             ))}
//           </div>
//         </Nav>
//       </nav>
//     </div>
//   );
// };

// export default Footer;
