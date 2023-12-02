import { styled } from "styled-components";

export const SocialLinks = styled.div`
  display: inline-flex;
  gap: 8px;

  & a {
    height: 24px;
    color: inherit;
    transition: 0.3s ease;

    &:hover {
      transition: 0.3s ease;
      color: var(--primary-color);
    }
  }
`;
