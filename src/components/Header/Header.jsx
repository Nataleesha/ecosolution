import { useState } from "react";
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
} from "./Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <LogoContainer>
          <Logo /> <LogoName /> <LogoText />
        </LogoContainer>
        <NavContainer>
          <MenuButton type="button" onClick={toggleMenu}>
            <Burger />
          </MenuButton>
        </NavContainer>
        {isOpen ? <Menu toggleMenu={toggleMenu} /> : null}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
