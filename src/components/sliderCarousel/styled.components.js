import styled from "styled-components";

export const Section = styled.section`
  border: 1px solid red;
  padding: 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 0.5rem 0.75rem;
  border: 1px solid black;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media only screen and (min-width: 1400px) {
    max-width: 1320px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 576px) {
    max-width: 540px;
  } */
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
  position: relative;
  color: black;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto !important;
  border-radius: 8px;
  margin: 20px 0;
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
  background: white;
  border: 1px solid red;
  width: 50px;
  height: 50px;
  color: "blue";
`;

export const PrevButton = styled(NextButton)``;
