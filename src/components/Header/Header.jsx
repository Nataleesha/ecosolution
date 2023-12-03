import { useState, useEffect } from "react";
import Menu from "src/components/Menu/Menu";
import ContactButton from "src/components/ContactButton/ContactButton";
import MainLogo from "src/components/MainLogo/MainLogo";

import Burger from "src/assets/icons/menu.svg?react";

import {
  HeaderContainer,
  Container,
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
        <MainLogo />
        <NavContainer>
          <MenuButton type="button" onClick={toggleMenu}>
            <Burger />
          </MenuButton>
          <GetInTouch
            onClick={() => {
              window.scroll({
                top: document.getElementById("contact").offsetTop - 120,
                behavior: "smooth",
              });
            }}
          >
            <ContactButton>Get in touch</ContactButton>
          </GetInTouch>
        </NavContainer>
        {isOpen ? <Menu toggleMenu={toggleMenu} /> : null}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
