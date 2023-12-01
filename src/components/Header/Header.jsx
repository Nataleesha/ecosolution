import { useState, useEffect } from "react";
import Menu from "src/components/Menu/Menu";
import ContactButton from "src/components/ContactButton/ContactButton";

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
            <ContactButton>Get in touch</ContactButton>
          </GetInTouch>
        </NavContainer>
        {isOpen ? <Menu toggleMenu={toggleMenu} /> : null}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
