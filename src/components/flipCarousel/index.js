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
            </Styled.SlideContent>
          </Styled.SlideContentWrapper>
        </Styled.Slide>
      </Styled.Container>
    </Styled.Section>
  );
};

export default FlipCarousel;
