import React from "react";
import * as Styled from "./styled.components";
import crs1 from "../../assets/background/crs-1.jpg";
import crs5 from "../../assets/background/crs-5.jpg";
import crs8 from "../../assets/background/crs-8.jpg";
import author4 from "../../assets/avatars/author-4.jpg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check-solid.svg";

const FlipCarousel = () => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Slide>
          <Styled.SliderImageWrapper>
            <Styled.SlideImage src={crs1} />
          </Styled.SliderImageWrapper>
          <Styled.SlideContentWrapper>
            <Styled.SlideContent>
              <Styled.Title>Glass Cube</Styled.Title>
              <Styled.Author>
                <Styled.Avatar>
                  <Styled.AvatarImg src={author4} />
                  <Styled.AvatarIcon>
                    <CheckIcon width="8px" />
                  </Styled.AvatarIcon>
                </Styled.Avatar>
                <Styled.AuthorInfo>
                  <Styled.AuthorName>Lori Hart</Styled.AuthorName>
                  <Styled.AuthorUsername>@lorihart</Styled.AuthorUsername>
                </Styled.AuthorInfo>
              </Styled.Author>
              <Styled.Row>
                <Styled.BidDetails>
                  <Styled.SubScriptItem>Current Bid</Styled.SubScriptItem>
                  <Styled.Price>2.59 ETH</Styled.Price>
                  <Styled.SubScriptItem>($8935,37)</Styled.SubScriptItem>
                </Styled.BidDetails>
                <Styled.AuctionDetails>
                  <Styled.SubScriptItem>Auction end in</Styled.SubScriptItem>
                  <Styled.Price>38d 4h 58m 14s</Styled.Price>
                  <Styled.SubScriptItem>
                    (November 16, 2021)
                  </Styled.SubScriptItem>
                </Styled.AuctionDetails>
              </Styled.Row>
            </Styled.SlideContent>
          </Styled.SlideContentWrapper>
        </Styled.Slide>
      </Styled.Container>
    </Styled.Section>
  );
};

export default FlipCarousel;
