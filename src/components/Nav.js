import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styled Components
import styled from "styled-components";
// Icons
import IconBack from "../assets/img/icons/IconBack.svg";
import IconClose from "../assets/img/icons/IconClose.svg";
import IconMap from "../assets/img/icons/IconMap.svg";
import IconProfile from "../assets/img/icons/IconProfile2.svg";
import IconMenu from "../assets/img/icons/IconMenu.svg";
import IconRoulette from "../assets/img/icons/IconRoulette.svg";
import IconSaved from "../assets/img/icons/IconSaved.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideItem, setHideItem] = useState(false);

  return (
    <StyledNav>
      <ul>
        <li className={hideItem ? "active" : "hidden"}>
          <Link to="/home">
            <img src={IconMap} alt="" />
          </Link>
        </li>
        <li className={hideItem ? "active" : "hidden"}>
          <Link to="/saved">
            <img src={IconSaved} alt="" />
          </Link>
        </li>
        <li className={hideItem ? "active" : "hidden"}>
          <Link to="/profile">
            <img src={IconProfile} alt="" />
          </Link>
        </li>
        <li className={hideItem ? "active" : "hidden"}>
          <Link to="/roulette">
            <img src={IconRoulette} alt="" />
          </Link>
        </li>
        <li className={hideItem ? "active" : "hidden"}>
          <Link to="/applogin">
            <img src={IconBack} alt="" />
          </Link>
        </li>
        <li
          className={hideItem ? "closeBtn" : "menuBtn"}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setHideItem(!hideItem);
          }}
        >
          <img src={menuOpen ? IconClose : IconMenu} alt="" />
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: absolute;
  bottom: 1rem;
  right: 0;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    list-style: none;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff7144;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 10rem;
    a {
      display: grid;
      place-items: center;
      height: 100%;
      width: 100%;
    }
    img {
      object-fit: cover;
    }
    :active {
      background-color: #ff9635;
    }
  }
  li.hidden {
    opacity: 0;
  }
  li.closeBtn {
    background-color: rgba(255, 113, 68, 0.6);
  }
`;
