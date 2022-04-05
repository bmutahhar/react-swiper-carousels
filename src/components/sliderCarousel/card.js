import React from "react";
import * as Styled from "./styled.components";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart-solid.svg";

const Card = (props) => {
  return (
    <Styled.Card>
      {props.timer && <Styled.Timer>38d 18h 25m 40s</Styled.Timer>}
      <Styled.CardContent>
        <Styled.CardImage portrait={props.portrait} src={props.image} />
      </Styled.CardContent>
      <Styled.CardDetails>
        <Styled.Row>
          <Styled.CardTitle>{props.title}</Styled.CardTitle>
          <Styled.MenuIcon>...</Styled.MenuIcon>
        </Styled.Row>
        <Styled.Row>
          <Styled.Price>{props.price} ETH</Styled.Price>
          <Styled.Ratio>{props.ratio}</Styled.Ratio>
        </Styled.Row>
        <Styled.Row>
          <Styled.BidButton>Place a bid</Styled.BidButton>
          <Styled.Likes>
            <Styled.LikesIcon>
              <HeartIcon />
            </Styled.LikesIcon>
            <Styled.LikesCount>{props.likes}</Styled.LikesCount>
          </Styled.Likes>
        </Styled.Row>
      </Styled.CardDetails>
    </Styled.Card>
  );
};

export default Card;
