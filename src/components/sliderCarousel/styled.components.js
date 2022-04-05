import styled from "styled-components";

export const Section = styled.section`
  padding: 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 500px;
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }

  @media only screen and (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Carousel = styled.div`
  width: 95%;
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 36px;
  line-height: 46px;
  margin-bottom: 10px;
  font-weight: 700;
  color: #fff;
`;

export const SmallBorder = styled.div`
  width: 50px;
  background: #8364e2;
  height: 2px;
  border: none;
  display: block;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #161d30;
  padding: 20px;
  color: black;
  border-radius: 15px;
  position: relative;
`;

export const CardContent = styled.div`
  width: 100%;
  margin: 20px 0;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 200px;
  border-radius: 8px;
  transition: ease-in-out 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const Row = styled.div`
  margin-bottom: 5px;
`;

export const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  letter-spacing: 2px;
  line-height: 0;
  color: #fff;
  position: absolute;
  cursor: pointer;
  padding: 5px;
  top: -5px;
  right: 0px;
  border-radius: 50%;
  &:hover {
    background: #f8f8f8;
  }
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #9fa4dd;
`;

export const Ratio = styled.span`
  font-weight: 700;
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
`;

export const BidButton = styled.button`
  border: none;
  outline: none;
  color: #8364e2;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
`;

export const Likes = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ddd;
  &:hover {
    cursor: default;
    color: #f28379;
  }
`;

export const LikesIcon = styled.span`
  width: 14px;
  color: inherit;
`;

export const LikesCount = styled.span`
  font-size: 12px;
  color: #808080;
  margin-left: 5px;
`;

export const CarouselButtons = styled.div`
  width: 100%;
`;

export const NextButton = styled.button`
  border: none;
  outline: none;
  background-color: #161d30;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  color: #fff;
  background: #161d30;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  top: 50%;
  right: 1.75%;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.25);
  }
  &::after {
    display: none;
  }
`;

export const PrevButton = styled(NextButton)`
  left: 1.75%;
`;

export const Timer = styled.div`
  background: #161d30;
  border: 2px solid #8364e2;
  border-radius: 30px;
  padding: 5px 10px;
  color: #fff;
  position: absolute;
  right: 10px;
  top: 25px;
  font-size: 14px;
  font-weight: bold;
  z-index: 99;
`;

export const Avatar = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 100;
  left: 10px;
  top: 20px;
  border-radius: 50%;
  background: #8364e2;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: 100%;
  transition: 0.1s ease-in;

  &:hover {
    transform: scale(0.875);
  }
`;

export const AvatarIcon = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  right: 0;
  bottom: 5px;
  color: white;
  background: #8364e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
