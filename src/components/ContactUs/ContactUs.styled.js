import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    gap: 48px;
  }
`;

export const Contacts = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 24px) / 2);
    margin-bottom: 0;
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 48px) / 2);
  }
`;

export const Tel = styled.a`
  margin-bottom: 12px;
`;

export const Contact = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  & p {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.64px;
    margin-bottom: 8px;
  }

  & a {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.8px;

    color: var(--text-color);
    transition: 0.3s ease;

    @media screen and (min-width: ${desktop}) {
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.96px;
    }

    &:hover {
      & svg {
        transition: 0.3s ease;
        color: var(--primary-color);
      }
    }
  }
`;

export const Address = styled.span`
  max-width: 220px;

  @media screen and (min-width: ${desktop}) {
    max-width: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 8px;

  & svg {
    margin: 12px;

    @media screen and (min-width: ${desktop}) {
      margin: 0;
    }
  }
`;

export const Form = styled.form`
  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 48px) / 2);
  }
`;
