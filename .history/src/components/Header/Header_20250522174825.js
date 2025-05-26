import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src="https://i.ibb.co/yWXQ09C/logo.png"
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
            <span type='button' className='btn btn--outline cursor-pointer'>
              Resume
            </span>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
