import { LogoContainer } from "./MainLogo.styled";

import Logo from "src/assets/icons/logo.svg?react";
import LogoName from "src/assets/icons/logo-name.svg?react";
import LogoText from "src/assets/icons/logo-text.svg?react";

const MainLogo = () => {
  return (
    <LogoContainer>
      <Logo /> <LogoName /> <LogoText />
    </LogoContainer>
  );
};

export default MainLogo;
