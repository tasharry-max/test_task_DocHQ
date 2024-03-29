import React, { useState } from "react";
import MobileNavItem from "./MobileNavItem";
import Image from "next/image";
import logo from "../public/doc-logo.jpg";
import styled from "styled-components";
import {Menu} from '@styled-icons/entypo/Menu'

const MenuList = [
  { text: "COVID TEST", href: "/covid-test" },
  { text: "HEALTH APP", href: "/health-app" },
  { text: "SUPPLEMENTS", href: "/supplements" },
];

const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
`

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        ><Menu width={24}/></div>
       <StyledImage><Image src={logo} width={170} height={46} alt="logo" /></StyledImage>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MenuList.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <MobileNavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;