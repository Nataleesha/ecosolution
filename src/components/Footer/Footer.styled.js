import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const FooterSection = styled.footer`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${tablet}) {
    padding: 40px 0;
    gap: 16px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${desktop}) {
    gap: 48px;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: ${tablet}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonUp = styled.button`
  border: none;
  background-color: transparent;
  height: 32px;
  padding: 0;

  & .up-hover {
    display: none;
  }

  &:hover {
    & .up {
      display: none;
    }
    & .up-hover {
      display: inline;
    }
  }

  &.big {
    display: none;
  }

  @media screen and (min-width: ${tablet}) {
    &.big {
      display: inline;
    }

    &.small {
      display: none;
    }
  }
`;
