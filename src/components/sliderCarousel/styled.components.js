import styled from "styled-components";

export const Section = styled.section`
  /* border: 1px solid red; */
  padding: 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 0.5rem 0.75rem;
  border: 1px solid black;
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
  color: #0d0c22;
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
  border: 1px solid #ddd;
  background: white;
  padding: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  position: relative;
`;

export const CardContent = styled.div`
  width: 100%;
  margin: 20px 0;
  height: 263.25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  ${({ portrait }) =>
    portrait
      ? `width:auto !important;
      height:100%;`
      : `width: 100%;
      height: auto !important;`}
  border-radius: 8px;
  transition: ease-in-out 0.5s;
  &:hover {
    transform: scale(1.02);
  }
  /* border: 1px solid green; */
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  /* border: 1px solid red; */
  position: relative;
`;

export const Row = styled.div`
  margin-bottom: 5px;
`;

export const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 15px;
  color: #0d0c22;
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  letter-spacing: 2px;
  line-height: 0;
  color: #0d0c22;
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
  color: #727272;
`;

export const Ratio = styled.span`
  font-weight: 700;
  color: #0d0c22;
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
  background-color: white;
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  color: black;
  background: white;
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
  background: white;
  border: 2px solid #8364e2;
  border-radius: 30px;
  padding: 5px 10px;
  color: #0d0c22;
  position: absolute;
  right: 15px;
  top: 20px;
  font-size: 14px;
  font-weight: bold;
  z-index: 99;
`;
