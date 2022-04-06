import styled from "styled-components";
import bg from "../../assets/background/bg.jpg";

export const Section = styled.section`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  padding: 90px 0;
  position: relative;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid green;
  flex: 1;
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

export const Slide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid blue;
`;

export const SliderImageWrapper = styled.div`
  padding: 0 10px;
  width: 50%;
`;

export const SlideImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const SlideContentWrapper = styled.div`
  width: 50%;
  border: 1px solid red;
`;

export const SlideContent = styled.div`
  width: 100%;
  padding-left: 30px;
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #fff;
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

export const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthorName = styled.span`
  margin-bottom: 5px;
  color: white;
  font-weight: 700;
`;

export const AuthorUsername = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #a2a2a2;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1a1a25;
  position: relative;
  margin-right: 20px;
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
  background: #c5269d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid red;
`;

export const BidDetails = styled.div`
  border: 1px solid green;
`;

export const AuctionDetails = styled.div`
  border: 1px solid white;
`;

export const SuperScriptItem = styled.span`
  color: #a2a2a2;
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
  text-align: left;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 32px;
  color: white;
  display: block;
  margin: 10px 0;
  text-align: left;
`;

export const SubScriptItem = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 15px;
  font-weight: 500;
  display: block;
  text-align: left;

  margin: 5px 0;
`;
