import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 120px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;
