import { Button } from "./ContactButton.styled";

// eslint-disable-next-line react/prop-types
const ContactButton = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
      >
        <circle cx="7" cy="7.5" r="7" fill="currentColor" />
        <path
          d="M9.27588 8.31006L6.99963 10.3334L4.72338 8.31006"
          stroke="#173D33"
          strokeWidth="0.833607"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99951 4.66675L6.99951 10.2767"
          stroke="#173D33"
          strokeWidth="0.833607"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default ContactButton;
