import React from "react";
import styled from "styled-components";
import avatarbig from "./Assets/AvatarBig.png";
import more from "./Assets/IconMore.png";

const StatisticsWrapping = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  background: #ffffff;
`;

const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const LineTitle = styled.div`
  font-size: 12px;
`;
const LineNumber = styled.div`
  font-size: 17px;
`;

const Element = styled.div`
  display: inline-block;
  color: #667580;
  padding: 5px 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #059ff5;
  }
`;

const ElementsLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 180px;
  padding-right: 340px;
`;

const Follow = styled.div`
  display: flex;

  justify-content: flex-end;
  text-align: right;
`;

const FollowButton = styled.button`
  font-weight: bold;
  border-radius: 100px;
  width: 99px;
  height: 36px;
  background-color: white;
  color: #1da1f2;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #1da1f2;
  outline: none;
  &:hover {
    background-color: #ecebea;
  }
`;

const MoreButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  coursor: pointer;
`;

const TweetStatistics = () => {
  return (
    <StatisticsWrapping>
      <InfoLine>
        <ElementsLine>
          <Element>
            <LineTitle>Tweets</LineTitle>
            <LineNumber>9,243</LineNumber>
          </Element>

          <Element>
            <LineTitle>Following</LineTitle>
            <LineNumber>782</LineNumber>
          </Element>

          <Element>
            <LineTitle>Followers</LineTitle>
            <LineNumber>2,003</LineNumber>
          </Element>

          <Element>
            <LineTitle>Likes</LineTitle>
            <LineNumber>1,388</LineNumber>
          </Element>

          <Element>
            <LineTitle>Lists</LineTitle>
            <LineNumber>2</LineNumber>
          </Element>
        </ElementsLine>
        <Follow>
          <FollowButton>Follow</FollowButton>
          <MoreButton>
            <img src={more} alt="More Options" />
          </MoreButton>
        </Follow>
      </InfoLine>
    </StatisticsWrapping>
  );
};

export default TweetStatistics;
