import { styled } from "styled-components";
import { tablet } from "src/variables/breakpoints";

export const Container = styled.div`
  position: absolute;
  top: 0;
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

export const NavMenu = styled.nav`
  position: relative;
  height: 100%;
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

export const Line = styled.hr`
  margin: 0 0 16px 0;
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
