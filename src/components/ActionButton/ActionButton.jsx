import { Button } from "./ActionButton.styled";

import Arrow from "src/assets/icons/arrow-right.svg?react";

// eslint-disable-next-line react/prop-types
const ActionButton = ({ type, children, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children} <Arrow />
    </Button>
  );
};

export default ActionButton;
