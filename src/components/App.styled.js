import { styled } from "styled-components";
import { mobile, tablet, desktop } from "src/variables/breakpoints";

export const Container = styled.div`
  min-width: 360px;
  max-width: ${mobile};
  height: 100vh;
  border: 1px solid red;
  margin: 0 auto;
  padding: 36px 20px 0;

  @media screen and (min-width: ${tablet}) {
    max-width: none;
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
