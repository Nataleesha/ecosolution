import {
  Section,
  Title,
  Container,
  Contacts,
  Contact,
  Tel,
  Address,
  Socials,
  Form,
} from "./ContactUs.styled";

import Phone from "src/assets/icons/call.svg?react";
import Mail from "src/assets/icons/mail.svg?react";
import Map from "src/assets/icons/map.svg?react";
import Facebook from "src/assets/icons/facebook.svg?react";
import Instagram from "src/assets/icons/instagram.svg?react";

const ContactUs = () => {
  return (
    <Section>
      <Title>Contact us</Title>
      <Container>
        <Contacts>
          <Contact>
            <p>Phone:</p>
            <Tel href="tel:+38 (098) 12 34 567">
              <Phone /> 38 (098) 12 34 567
            </Tel>
            <a href="tel:+38 (093) 12 34 567">
              <Phone /> 38 (093) 12 34 567
            </a>
          </Contact>
          <Contact>
            <p>E-mail:</p>
            <a>
              <Mail />
              office@ecosolution.com
            </a>
          </Contact>
          <Contact>
            <p>Address:</p>
            <a
              href="https://maps.app.goo.gl/DnwdvcWFrQnHx5gZ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Map />{" "}
              <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
            </a>
          </Contact>
          <Contact>
            <p>Social Networks:</p>
            <Socials>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>{" "}
            </Socials>
          </Contact>
        </Contacts>
        <Form>Form</Form>
      </Container>
    </Section>
  );
};

export default ContactUs;
