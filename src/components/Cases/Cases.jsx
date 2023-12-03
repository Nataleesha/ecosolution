import { useRef, useEffect } from "react";
import {
  Section,
  Head,
  Title,
  Pagination,
  Buttons,
  Button,
} from "./Cases.styled";

import Slide from "src/components/Slide/Slide";

import SwipeRight from "src/assets/icons/arrow-swipe-right.svg?react";
import SwipeLeft from "src/assets/icons/arrow-swipe-left.svg?react";
import data from "src/data/cases.json";

import { register } from "swiper/element/bundle";
register();

const Cases = () => {
  const swiperRef = useRef(null);
  const totalSlides = 5;

  const formattedPage = (num) => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      keyboard: true,
      loop: true,
      navigation: {
        enabled: true,
        nextEl: ".next",
        prevEl: ".prev",
      },
      pagination: {
        type: "fraction",
        el: ".swiper-pagination",
        formatFractionTotal: () => {
          return formattedPage(totalSlides);
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            formatFractionCurrent: (number) => {
              return formattedPage(number);
            },
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          pagination: {
            formatFractionCurrent: (number) => {
              if (number < totalSlides) {
                return formattedPage(number + 1);
              } else if (number === totalSlides) {
                return formattedPage(1);
              } else {
                return formattedPage(number);
              }
            },
          },
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 48,
          pagination: {
            formatFractionCurrent: (number) => {
              if (number < totalSlides) {
                return formattedPage(number + 1);
              } else if (number === totalSlides) {
                return formattedPage(1);
              } else {
                return formattedPage(number);
              }
            },
          },
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <Section id="cases">
      <Head>
        <Title>Successful cases of our company</Title>
        <Pagination>
          <div className="swiper-pagination"></div>
          <Buttons>
            <Button type="button" className="prev">
              <SwipeLeft />
            </Button>
            <Button type="button" className="next">
              <SwipeRight />
            </Button>
          </Buttons>
        </Pagination>
      </Head>
      <swiper-container
        ref={swiperRef}
        init="false"
        slides-per-view="2"
        speed="500"
      >
        {data.map((slide) => {
          return (
            <swiper-slide key={slide.location}>
              <Slide slide={slide} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </Section>
  );
};

export default Cases;
