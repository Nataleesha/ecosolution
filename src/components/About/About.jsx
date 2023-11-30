import {
  Section,
  Description,
  Title,
  InfoHolder,
  Info,
  Grid,
  GridItem,
  ItemName,
  Name,
  ItemText,
} from "./About.styled";

import Circle from "src/assets/icons/maximize-circle.svg?react";
import Globe from "src/assets/icons/global-edit.svg?react";
import Charge from "src/assets/icons/cpu-charge.svg?react";
import Rank from "src/assets/icons/ranking.svg?react";
import farmField from "src/assets/images/wind-farms-fields 1.jpeg";
import worker from "src/assets/images/man-worker-field-by-solar-panels 1.jpg";

const About = () => {
  return (
    <Section>
      <Description>
        <Title>Main values of our company</Title>
        <InfoHolder>
          <Info>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&apos;s energy needs.
          </Info>
        </InfoHolder>
      </Description>
      <Grid>
        <GridItem>
          <ItemName>
            <Circle className="svg" /> <Name>Openness</Name>
          </ItemName>
          <ItemText>
            <p>to the world, people, new ideas and projects</p>
          </ItemText>
        </GridItem>
        <GridItem>
          <ItemName>
            <Globe className="svg" /> <Name>Responsibility</Name>
          </ItemName>
          <ItemText>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </ItemText>
        </GridItem>
        <GridItem>
          <img src={farmField} alt="wind farms fields" />
        </GridItem>
        <GridItem>
          <img src={worker} alt="man worker on the field of solar panels" />
        </GridItem>
        <GridItem>
          <ItemName>
            <Charge className="svg" /> <Name>Innovation</Name>
          </ItemName>
          <ItemText>
            <p>
              we use the latest technology to implement non-standard solutions
            </p>
          </ItemText>
        </GridItem>
        <GridItem>
          <ItemName>
            <Rank className="svg" /> <Name>Quality</Name>
          </ItemName>
          <ItemText>
            <p>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </ItemText>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default About;
