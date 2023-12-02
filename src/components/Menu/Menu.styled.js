import { styled } from "styled-components";
import { mobile, tablet, desktop } from "src/variables/breakpoints";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 2;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(23, 61, 51, 0.25);

  &::before {
    content: "";
    backdrop-filter: blur(2px);
  }
`;

export const OuterContainer = styled.div`
  z-index: 3;
  position: relative;
  height: 100%;
  min-width: 360px;
  max-width: ${mobile};
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${tablet}) {
    max-width: none;
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    max-height: 875px;
    width: ${desktop};
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 4;
  top: 36px;
  right: 20px;
  width: calc(100% - 40px);
  height: calc(100vh - 60px);
  padding: 24px;

  background-color: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  border-radius: 25px;

  @media screen and (min-width: ${tablet}) {
    width: 320px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`;

export const MenuList = styled.ul`
  border-top: 1px solid #fff;
  padding-top: 24px;
`;

export const MenuItem = styled.li`
  margin-bottom: 8px;
`;

export const Link = styled.a`
  display: inline-block;
  width: 100%;
  color: rgba(255, 255, 255, 0.25);
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    color: var(--white-text);
  }
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: bottom;
  justify-content: left;
  padding: 0;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  color: var(--white-text);
  background-color: transparent;
  border: none;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    color: var(--primary-color);
  }
`;

export const SocialHolder = styled.div`
  & a {
    color: #fff;
  }
`;

export const Socials = styled.ul`
  position: absolute;
  display: flex;
  bottom: -8px;
`;

export const SocialItem = styled.li`
  margin-right: 8px;
`;

export const SocialLink = styled.a`
  color: var(--white-text);
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    color: var(--primary-color);
  }
`;
