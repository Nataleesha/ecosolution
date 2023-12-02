import Facebook from "src/assets/icons/facebook.svg?react";
import Instagram from "src/assets/icons/instagram.svg?react";

import { SocialLinks } from "./Socials.styled";

const Socials = () => {
  return (
    <SocialLinks>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>{" "}
    </SocialLinks>
  );
};

export default Socials;
