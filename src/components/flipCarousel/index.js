import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFlip } from "swiper";
import { useTimer } from "react-timer-hook";
import { ReactComponent as LeftArrow } from "../../assets/icons/chevron-left-solid.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/chevron-right-solid.svg";
import * as Styled from "./styled.components";
import Slide from "./slide";
import crs1 from "../../assets/background/crs-1.jpg";
import crs5 from "../../assets/background/crs-5.jpg";
import crs8 from "../../assets/background/crs-8.jpg";
import author1 from "../../assets/avatars/author-1.jpg";
import author4 from "../../assets/avatars/author-4.jpg";
import author5 from "../../assets/avatars/author-5.jpg";

// Import Swiper styles
import "swiper/css/bundle";

const FlipCarousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const slidesData = [
    {
      id: 1,
      title: "Alien vs Predator",
      image: crs8,
      avatar: author1,
      authorName: "Monica Lucas",
      authorUsername: "@monicaaa",
      price: 2.59,
      usd: "8935,37",
      auctionDate: "November 16, 2021",
    },
    {
      id: 2,
      title: "Wallbird Tapa",
      image: crs5,
      avatar: author5,
      authorName: "Jimmy Wright",
      authorUsername: "@jimmywright",
      price: 3.14,
      usd: "10793,69",
      auctionDate: "November 14, 2021",
    },
    {
      id: 3,
      title: "Glass Cube",
      image: crs1,
      avatar: author4,
      authorName: "Lori Hart",
      authorUsername: "@lorihart",
      price: 2.25,
      usd: "7734,33",
      auctionDate: "November 6, 2021",
    },
  ];

  const params = {
    modules: [Navigation, EffectFlip],
    loop: true,
    effect: "flip",
    flipEffect: {
      slideShadows: false,
    },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    },
    pagination: false,
    spaceBetween: 20,
    slidesPerView: 1,
  };

  const today = new Date();
  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: new Date(
      today.getFullYear(),
      today.getMonth() + 2,
      today.getDate()
    ),
    onExpire: (e) =>
      restart(
        new Date(today.getFullYear(), today.getMonth() + 2, today.getDate())
      ),
  });

  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Carousel>
          <Swiper {...params}>
            {slidesData.map((item) => (
              <SwiperSlide key={item.id}>
                <Slide
                  {...item}
                  time={`${days}d ${hours}h ${minutes}m ${seconds}s`}
                />
              </SwiperSlide>
            ))}
            <Styled.CarouselButtons>
              <Styled.PrevButton
                ref={navigationPrevRef}
                // className="swiper-button-prev"
                // onClick={() => swiper.slidePrev()}
              >
                <LeftArrow width="9px" />
              </Styled.PrevButton>
              <Styled.NextButton
                ref={navigationNextRef}
                // className="swiper-button-next"
              >
                <RightArrow width="9px" />
              </Styled.NextButton>
            </Styled.CarouselButtons>
          </Swiper>
        </Styled.Carousel>
      </Styled.Container>
    </Styled.Section>
  );
};

export default FlipCarousel;
