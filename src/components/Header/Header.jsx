import { useState, useEffect } from "react";
import Menu from "src/components/Menu/Menu";

import Logo from "src/assets/icons/logo.svg?react";
import LogoName from "src/assets/icons/logo-name.svg?react";
import LogoText from "src/assets/icons/logo-text.svg?react";
import Burger from "src/assets/icons/menu.svg?react";

import {
  HeaderContainer,
  Container,
  LogoContainer,
  NavContainer,
  MenuButton,
  GetInTouch,
} from "./Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [white, setWhite] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", listenScrollEvent);
    }

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  if (isOpen) {
    document.body.classList.add("no-overflow");
  } else {
    document.body.classList.remove("no-overflow");
  }

  // eslint-disable-next-line no-unused-vars
  function listenScrollEvent(e) {
    if (window.scrollY > 20) {
      setWhite(true);
    } else {
      setWhite(false);
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer className={`${white ? "white" : ""}`}>
      <Container>
        <LogoContainer>
          <Logo /> <LogoName /> <LogoText />
        </LogoContainer>
        <NavContainer>
          <MenuButton type="button" onClick={toggleMenu}>
            <Burger />
          </MenuButton>
          <GetInTouch>
            Get in touch{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <circle cx="7" cy="7.5" r="7" fill="currentColor" />
              <path
                d="M9.27588 8.31006L6.99963 10.3334L4.72338 8.31006"
                stroke="#173D33"
                strokeWidth="0.833607"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.99951 4.66675L6.99951 10.2767"
                stroke="#173D33"
                strokeWidth="0.833607"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </GetInTouch>
        </NavContainer>
        {isOpen ? <Menu toggleMenu={toggleMenu} /> : null}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
