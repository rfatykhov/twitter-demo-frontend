import React from "react";
import styled from "styled-components";
import comments from "./Assets/CommentsIcon.svg";
import retweets from "./Assets/RetweetIcon.svg";
import likes from "./Assets/LikesIcon.svg";
import envelope from "./Assets/EnvelopeIcon.svg";
import avatartweet from "./Assets/AvatarTweet.png";

const TweetWrapping = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  border-bottom: 1px solid #e1e8ed;
  background-color: #ffffff;
  cursor: pointer;
`;

// Pinned tweet styling

const TweetPin = styled.div`
  display: flex;
  margin: 0 50px;
`;

const IconPin = styled.div`
  display: flex;
`;
const PostPin = styled.p`
  color: #707e88;
  font-size: 13px;
  padding: 0 5px;
`;

//Tweet body information styling

const TweetBody = styled.div`
  display: flex;
`;

const TweetText = styled.div`
  text-align: left;
`;

const User = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
  &:hover {
    color: #1c94e0;
    text-decoration: underline;
`;
const Adress = styled.div`
  display: inline-block;
  font-size: 13px;
  padding: 5px 5px;
  color: #788a98;
`;

const Date = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #788a98;
  padding: 5px 5px;
  &:hover {
    color: #0072BB;
    text-decoration: underline;
`;
const TweetImage = styled.img`
  width: 100%;
`;

const TextTweet = styled.div`
  font-size: 16px;
  line-height: 150%;
`;

const TweetAvatar = styled.img`
  border-radius: 100px;
  height: 41px;
  width: 41px;
  padding: 10px 10px;
`;

// Tweet interaction panel styling

const TweetInteractions = styled.div`
  display: flex;
  margin: 5px 50px;
  padding-left: 10px;
`;

const InteractionBtn = styled.div`
  display: flex;
  margin-right: 50px;
`;

const InteractionNumber = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #667580;
  padding-left: 10px;
`;

//Attachment thumbnail styling

const PreviewImage = styled.img``;
const PreviewText = styled.p`
  text-align: left;
  font-size: 15px;
  margin-top: 2px;
`;
const PreviewBox = styled.div`
  border: 1px solid #e1e8ed;
  display: flex;
`;
const PreviewTitle = styled.p`
  margin-bottom: 0;
  font-weight: bold;
  font-size: 15px;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px 0;
`;

const Tweet = (props, src) => {
  return (
    <TweetWrapping>
      <TweetPin>
        <IconPin>
          <img src={props.pinned} />
        </IconPin>
        <PostPin>{props.pinnedtext}</PostPin>
      </TweetPin>
      <TweetBody>
        <TweetAvatar src={avatartweet} alt="User Avatar" />
        <TweetText>
          <User>{props.username}</User>
          <Adress>{props.userAdress}</Adress>
          <Date>{props.date}</Date>
          <TextTweet>{props.textTweet}</TextTweet>
          <TweetImage src={props.image} />
        </TweetText>
      </TweetBody>

      <TweetInteractions>
        <InteractionBtn>
          <img src={comments} alt="Leave a comment" />
          <InteractionNumber>{props.commentsNumber}</InteractionNumber>
        </InteractionBtn>
        <InteractionBtn>
          <img src={retweets} alt="Retweet a post" />
          <InteractionNumber>{props.retweetsNumber}</InteractionNumber>
        </InteractionBtn>
        <InteractionBtn>
          <img src={likes} alt="Like a post" />
          <InteractionNumber>{props.likesNumber}</InteractionNumber>
        </InteractionBtn>
        <InteractionBtn>
          <img src={envelope} alt="Send a message" />
        </InteractionBtn>
      </TweetInteractions>
    </TweetWrapping>
  );
};
export default Tweet;
