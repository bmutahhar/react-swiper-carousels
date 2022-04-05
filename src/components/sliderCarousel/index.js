// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as LeftArrow } from "../../assets/icons/chevron-left-solid.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/chevron-right-solid.svg";
import * as Styled from "./styled.components";
import Card from "./card";
import img1 from "../../assets/images/static-1.jpg";
import img2 from "../../assets/images/static-2.jpg";
import img3 from "../../assets/images/static-3.jpg";
import img4 from "../../assets/images/static-4.jpg";
import anim1 from "../../assets/images/anim-1.webp";
import anim2 from "../../assets/images/anim-2.webp";
import anim4 from "../../assets/images/anim-4.webp";

// Import Swiper styles
import "swiper/css/bundle";

const SliderCarousel = () => {
  const swiper = useSwiper();
  const cardData = [
    {
      id: 1,
      image: img1,
      title: "Pinky Ocean",
      price: 0.08,
      ratio: "1/20",
      likes: 50,
      portrait: true,
      timer: true,
    },
    {
      id: 2,
      image: img2,
      title: "Deep Sea Phantasy",
      price: 0.06,
      ratio: "1/22",
      likes: 80,
      portrait: false,
    },
    {
      id: 3,
      image: img3,
      title: "Rainbow Style",
      price: 0.05,
      ratio: "1/11",
      likes: 97,
      portrait: true,
      timer: true,
    },
    {
      id: 4,
      image: img4,
      title: "Two Tigers",
      price: 0.02,
      ratio: "1/15",
      likes: 73,
      portrait: true,
    },
    {
      id: 5,
      image: anim4,
      title: "The Truth",
      price: 0.06,
      ratio: "1/20",
      likes: 26,
      portrait: true,
    },
    {
      id: 6,
      image: anim2,
      title: "Running Puppets",
      price: 0.03,
      ratio: "1/24",
      likes: 45,
      portrait: false,
      timer: true,
    },
    {
      id: 7,
      image: anim1,
      title: "USA Wordmation",
      price: 0.09,
      ratio: "1/25",
      likes: 76,
      portrait: false,
    },
  ];

  const params = {
    modules: [Navigation],
    loop: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    pagination: false,
    spaceBetween: 20,
    slidesPerView: 2,
    breakpoints: {
      1200: {
        spaceBetween: 25,
        slidesPerView: 4,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title>New Items</Styled.Title>
        <Styled.SmallBorder />
        <Styled.Carousel>
          <Swiper {...params}>
            {cardData.map((item) => (
              <SwiperSlide key={item.id}>
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Styled.Carousel>
        <Styled.CarouselButtons>
          <Styled.PrevButton className="swiper-button-prev">
            <LeftArrow width="8px" />
          </Styled.PrevButton>
          <Styled.NextButton className="swiper-button-next">
            <RightArrow width="8px" />
          </Styled.NextButton>
        </Styled.CarouselButtons>
      </Styled.Container>
    </Styled.Section>
  );
};

export default SliderCarousel;
