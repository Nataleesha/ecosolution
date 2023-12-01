import PropTypes from "prop-types";

import { Card, QuestionBlock, Answer } from "./Accordion.styled";

const Accordion = ({ question, handleToggle, opened }) => {
  return (
    <Card>
      <QuestionBlock onClick={() => handleToggle(question.id)}>
        <div>
          {opened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H21"
                stroke="#173D33"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7 14H21"
                stroke="#97D28B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 21V7"
                stroke="#97D28B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div>{question.question}</div>
      </QuestionBlock>
      {opened && <Answer>{question.answer}</Answer>}
    </Card>
  );
};

export default Accordion;

Accordion.propTypes = {
  question: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};
