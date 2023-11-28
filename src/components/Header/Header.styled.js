import { styled } from "styled-components";
import { mobile, tablet, desktop } from "src/variables/breakpoints";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 36px;
`;

export const Container = styled.div`
  position: relative;
  min-width: 360px;
  max-width: ${mobile};
  margin: 0 auto;
  padding: 0 20px;

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

export const LogoContainer = styled.div`
  color: var(--primary-dark-color);
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    color: var(--primary-color);
  }
`;

export const NavContainer = styled.div``;

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
