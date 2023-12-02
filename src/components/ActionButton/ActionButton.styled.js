import { styled } from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  height: 40px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: inherit;

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
