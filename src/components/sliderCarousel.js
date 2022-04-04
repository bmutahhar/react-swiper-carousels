// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as Styled from "./styled.components";

// Import Swiper styles
import "swiper/css";

const SliderCarousel = () => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </Styled.Container>
    </Styled.Section>
  );
};

export default SliderCarousel;
