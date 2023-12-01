import {
  Section,
  Description,
  Header,
  Info,
  Text,
  LinkHolder,
  Link,
  Contacts,
  ContactItem,
  ImageHolder,
  Image,
} from "./Main.styled";

import Arrow from "src/assets/icons/arrow-right.svg?react";
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
            <Link href="#">
              Learn More <Arrow />
            </Link>
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
