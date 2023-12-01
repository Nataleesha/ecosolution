import { SlideCard } from "./Slide.styled";
import PropTypes from "prop-types";

const Slide = ({ image }) => {
  return (
    <SlideCard>
      <div>
        <img src={image} />
      </div>
    </SlideCard>
  );
};

export default Slide;

Slide.propTypes = {
  image: PropTypes.string.isRequired,
};
