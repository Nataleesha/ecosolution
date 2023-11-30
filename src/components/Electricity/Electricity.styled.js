import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
    line-height: 36px;
    width: 368px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 48px;
    line-height: 48px;
    width: 491px;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 48px;
  border-right: 1px solid var(--primary-color);
  margin-bottom: 24px;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & h3 {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    color: var(--primary-color);

    @media screen and (min-width: ${tablet}) {
      font-size: 100px;
      line-height: 100px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 164px;
      line-height: 164px;
    }
  }

  & p {
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    line-height: 24px;

    @media screen and (min-width: ${tablet}) {
      font-size: 28px;
      line-height: 48px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 48px;
    }
  }
`;
