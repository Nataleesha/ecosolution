import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const Section = styled.section`
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 122px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 28px;

  @media screen and (min-width: ${tablet}) {
    width: 272px;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const InfoHolder = styled.div`
  @media screen and (min-width: ${tablet}) {
    width: 354px;
    padding-left: 11px;
    border-left: 1px solid var(--primary-color);
  }

  @media screen and (min-width: ${desktop}) {
    width: 621px;
    padding-left: 161px;
  }
`;

export const Info = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.64px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;

  @media screen and (min-width: ${tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${desktop}) {
    gap: 48px;
  }
`;

export const GridItem = styled.div`
  height: 197px;

  background-color: var(--bg-section-color);
  padding: 12px;

  @media screen and (min-width: ${desktop}) {
    height: 339px;
    padding: 48px 24px;
  }

  &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  &:nth-child(3) {
    display: none;
    padding: 0;

    @media screen and (min-width: ${tablet}) {
      display: block;
      grid-area: 1 / 3 / 2 / 5;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &:nth-child(4) {
    display: none;
    padding: 0;

    @media screen and (min-width: ${tablet}) {
      display: block;
      grid-area: 2 / 1 / 3 / 3;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &:nth-child(5) {
    grid-area: 2 / 1 / 3 / 2;
    @media screen and (min-width: ${tablet}) {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
  &:nth-child(6) {
    grid-area: 2 / 2 / 3 / 3;
    @media screen and (min-width: ${tablet}) {
      grid-area: 2 / 4 / 3 / 5;
    }
  }
`;

export const ItemName = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 33px;

  & .svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 51px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 94px;
    & .svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Name = styled.h3`
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const ItemText = styled.div`
  padding-top: 12px;
  border-top: 1px solid var(--primary-color);

  & p {
    text-align: justify;
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 24px;

    & p {
      font-size: 16px;
    }
  }
`;
