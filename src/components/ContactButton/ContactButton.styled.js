import { styled } from "styled-components";

export const Button = styled.a`
  display: inline-flex;

  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: var(--primary-color);
  border: none;
  border-radius: 500px;

  color: var(--text-color);
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background-color: var(--primary-dark-color);
    color: var(--primary-color);
  }
`;
