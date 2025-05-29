import React from "react";
import { motion } from "framer-motion"; // ✅ Correct
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import LogoImage from './Assets/logo.png';
const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img src={LogoImage}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          {/* <a
            className="btn PrimaryBtn"
            href="https://github.com/Benjtalkshow/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a> */}
            <a href="/FaheemAshrafResume.pdf" download="Faheem_Ashraf_Resume.pdf">
               <motion.span
  className="btn btn--outline cursor-pointer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Resume
</motion.span>
            {/* <span type='button' className='btn btn--outline cursor-pointer'>
              Resume
            </span> */}
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
