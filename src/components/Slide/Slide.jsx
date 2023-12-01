import {
  SlideCard,
  ImageHolder,
  Info,
  Name,
  Type,
  Text,
  Link,
} from "./Slide.styled";
import PropTypes from "prop-types";

import ArrowLink from "src/assets/icons/arrow-link.svg?react";
import ArrowLinkHover from "src/assets/icons/arrow-link-hover.svg?react";

const Slide = ({ slide }) => {
  return (
    <SlideCard>
      <ImageHolder>
        <img src={slide.img} />
      </ImageHolder>
      <Info>
        <Name>
          <Text>
            <p>{slide.location}</p>
            <p>{slide.name}</p>
          </Text>
          <Link href="#">
            <ArrowLink className="link" />
            <ArrowLinkHover className="link-hover" />
          </Link>
        </Name>
        <Type>
          <p>{slide.type}</p>
          <p>{slide.date}</p>
        </Type>
      </Info>
    </SlideCard>
  );
};

export default Slide;

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};
