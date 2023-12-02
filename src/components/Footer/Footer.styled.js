import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const FooterSection = styled.footer`
  padding: 24px 0;

  @media screen and (min-width: ${tablet}) {
    padding: 40px 0;
  }
`;
