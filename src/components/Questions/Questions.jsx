import { useState } from "react";
import Accordion from "src/components/Accordion/Accordion";
import ContactButton from "src/components/ContactButton/ContactButton";

import data from "src/data/faq.json";

import {
  Section,
  TitleMobile,
  Faq,
  SideContainer,
  TitleTablet,
  Contact,
} from "./Questions.styled";

const Questions = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId !== id ? id : null);
  };

  return (
    <Section id="questions">
      <TitleMobile>Frequently Asked Questions</TitleMobile>
      <Faq>
        {data &&
          data.map((q) => {
            return (
              <Accordion
                key={q.id}
                question={q}
                handleToggle={handleToggle}
                opened={openId === q.id}
              />
            );
          })}
      </Faq>
      <SideContainer>
        <TitleTablet>Frequently Asked Questions</TitleTablet>
        <Contact>
          <p>Didn&apos;t find the answer to your question?</p>
          <ContactButton
            onClick={() => {
              window.scroll({
                top: document.getElementById("contact").offsetTop - 120,
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </ContactButton>
        </Contact>
      </SideContainer>
    </Section>
  );
};

export default Questions;
