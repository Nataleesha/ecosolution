import ActionButton from "src/components/ActionButton/ActionButton";

import {
  Section,
  Description,
  Header,
  Info,
  Text,
  LinkHolder,
  Contacts,
  ContactItem,
  ImageHolder,
  Image,
} from "./Main.styled";

import image from "src/assets/images/turbine1.jpg";

const Main = () => {
  return (
    <Section>
      <Description>
        <Header id="main">RENEWABLE ENERGY For any task</Header>
        <Info>
          <Text>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Text>
          <LinkHolder>
            <ActionButton>Learn More</ActionButton>
          </LinkHolder>
        </Info>
      </Description>
      <Contacts>
        <ContactItem>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactItem>
        <ContactItem>office@ecosolution.com</ContactItem>
        <ContactItem>ecosolution © 2023</ContactItem>
      </Contacts>
      <ImageHolder>
        <Image src={image} alt="wind turbine clean energy" />
      </ImageHolder>
    </Section>
  );
};

export default Main;
