import { styled } from "styled-components";
import { mobile, tablet, desktop } from "src/variables/breakpoints";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding-top: 36px;
  background-color: var(--body-background);

  &.white {
    background-color: #fff;
  }
`;

export const Container = styled.div`
  position: relative;
  min-width: 360px;
  max-width: ${mobile};
  margin: 0 auto;
  padding: 0 20px 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    max-width: none;
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const MenuButton = styled.button`
  background-color: var(--primary-light-color);
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    background-color: var(--primary-color);
  }
`;

export const GetInTouch = styled.div`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: inline-flex;
  }
`;
