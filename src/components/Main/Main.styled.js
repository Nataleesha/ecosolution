import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const Section = styled.section`
  margin-top: 222px;
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 240px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 264px;
    margin-bottom: 120px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--primary-color);

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${desktop}) {
    justify-content: left;
    gap: 296px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    width: 300px;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${desktop}) {
    width: 485px;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Info = styled.div`
  @media screen and (min-width: ${tablet}) {
    width: 342px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.64px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 43px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 20px;
  }
`;

export const LinkHolder = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${tablet}) {
    justify-content: left;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.64px;

  border-radius: 500px;
  color: var(--primary-dark-color);
  border: 1px solid var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background-color: var(--primary-dark-color);
    color: var(--primary-color);
    border-color: var(--primary-dark-color);
  }
`;

export const Contacts = styled.ul`
  margin-top: 24px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 12px;
  }
`;

export const ContactItem = styled.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  margin-bottom: 8px;

  &:last-child {
    display: none;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;

    &:last-child {
      display: inline-block;
    }

    &:first-child {
      margin-right: 27px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    &:first-child {
      margin-right: 325px;
    }
  }
`;

export const ImageHolder = styled.div``;

export const Image = styled.img``;
