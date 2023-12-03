import MainLogo from "src/components/MainLogo/MainLogo";
import Socials from "src/components/Socials/Socials";

import Up from "src/assets/icons/arrow-up.svg?react";
import UpHover from "src/assets/icons/arrow-up-hover.svg?react";
import {
  FooterSection,
  InnerContainer,
  LeftContainer,
  ButtonUp,
  RightContainer,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      <InnerContainer>
        <LeftContainer>
          <MainLogo />
          <ButtonUp className="small">
            <Up className="up" />
            <UpHover className="up-hover" />
          </ButtonUp>
        </LeftContainer>
        <RightContainer>
          <Socials />
          <ButtonUp
            className="big"
            onClick={() => {
              window.scroll({
                top: document.getElementById("main").offsetTop - 120,
                behavior: "smooth",
              });
            }}
          >
            <Up className="up" />
            <UpHover className="up-hover" />
          </ButtonUp>
        </RightContainer>
      </InnerContainer>
      <InnerContainer>
        <LeftContainer>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        </LeftContainer>
        <RightContainer>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </RightContainer>
      </InnerContainer>
    </FooterSection>
  );
};

export default Footer;
