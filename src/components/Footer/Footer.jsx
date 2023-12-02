import MainLogo from "src/components/MainLogo/MainLogo";
import Socials from "src/components/Socials/Socials";

import { FooterSection } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      <MainLogo />
      <Socials />
    </FooterSection>
  );
};

export default Footer;
