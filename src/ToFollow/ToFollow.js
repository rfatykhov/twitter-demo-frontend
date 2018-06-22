import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import appleinsider from "./Assets/AppleInsider.png";
import creode from "./Assets/Creode.png";
import epiphany from "./Assets/EpiphanySearch.png";
import people from "./Assets/IconPeople.png";

const WhoToFollow = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 15px;
  background-color: white;
  padding: 15px 35px;
`;

const Trends = styled.div`
  display: inline-block;
  padding: 15px 5px;
  background-color: white;
`;

const Topics = styled.div``;

const WhoFollowText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const WhoFollowSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const WhoFollowCard = styled.div`
  display: flex;
  padding-top: 0px;
  padding-bottom: 20px;
  font-size: 15px;
  border-bottom: 1px solid #e1e8ed;
`;

const WhoFollowName = styled.div`
  display: flex;
  padding: 5px 5px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
    &:hover {
    color: #0072BB;
    text-decoration: underline;

`;

const WhoFollowAdress = styled.div`
  display: flex;
  padding: 5px 2px;
  font-size: 12px;
  font-color: #707e88;
  cursor: pointer;
`;

const AdditionalLink = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #1da1f2;
  padding: 3px 3px;
  cursor: pointer;
`;

const WhoFollowAvatar = styled.img`
  display: flex;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const WhoFollowBtn = styled.button`
  font-weight: bold;
  border-radius: 100px;
  width: 89px;
  height: 29px;
  background-color: white;
  color: #1da1f2;
  font-size: 12px;
  border: 1px solid #1da1f2;
  outline: none;
  position: relative;
  bottom: 40px;
  right: 25px;
  cursor: pointer;
  &:hover {
    background-color: #ecebea;
  }
`;

const FindPeople = styled.div`
  display: flex;
  cursor: pointer;
  color: #1da1f2;
  font-size: 12px;
     &:hover {
    text-decoration: underline;
`;

const PeopleIcon = styled.img`
  padding-right: 5px;
  cursor: pointer;
`;

const TrendLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #667580;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const CopyrightLink = styled(Link)`
  color: #788a98;
  font-size: 12px;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #788a98;
    border-bottom: 1px solid #788a98;
  }
`;

const TrendTopic = styled.div`
  display: flex;
  cursor: pointer;
  color: #1da1f2;
  padding-top: 5px
  padding-bottom: 5px;
  padding-left: 15px;
  font-size: 16px;
     &:hover {
    text-decoration: underline;
`;

const TopicInfo = styled.div`
  display: flex;
  cursor: pointer;
  padding-left: 15px;
  text-align: left;
  color: #788a98;
  padding;
  font-size: 12px;
`;

const Copyright = styled.div`
  cursor: pointer;
  margin-top: 15px;
  padding-left: 15px;
  text-align: left;
  color: #788a98;
  font-size: 12px;
`;

const ToFollow = props => {
  return (
    <Topics>
      <WhoToFollow>
        <WhoFollowSection>
          <WhoFollowText>Who to follow</WhoFollowText>
          <AdditionalLink>· Refresh · View all</AdditionalLink>
        </WhoFollowSection>
        <WhoFollowCard>
          <WhoFollowAvatar src={appleinsider} />
          <WhoFollowName>Apple Insider</WhoFollowName>
          <WhoFollowAdress>@appleinsider</WhoFollowAdress>
        </WhoFollowCard>
        <WhoFollowBtn>Follow</WhoFollowBtn>
        <WhoFollowCard>
          <WhoFollowAvatar src={creode} />
          <WhoFollowName>Creode</WhoFollowName>
          <WhoFollowAdress>@Creode</WhoFollowAdress>
        </WhoFollowCard>
        <WhoFollowBtn>Follow</WhoFollowBtn>
        <WhoFollowCard>
          <WhoFollowAvatar src={epiphany} />
          <WhoFollowName>Epiphany Search</WhoFollowName>
          <WhoFollowAdress>@Epiph...</WhoFollowAdress>
        </WhoFollowCard>
        <WhoFollowBtn>Follow</WhoFollowBtn>

        <FindPeople>
          <PeopleIcon src={people} />Find people you know
        </FindPeople>
      </WhoToFollow>
      <Trends>
        <WhoFollowSection>
          <WhoFollowText>United Kingdom Trends</WhoFollowText>
          <AdditionalLink>· Change</AdditionalLink>
        </WhoFollowSection>

        <TrendLink to="/hashtag/BringYourDogToWorkDay">
          <TrendTopic>#BringYourDogToWorkDay</TrendTopic>
        </TrendLink>

        <TrendLink to="/hashtag/FridayFeeling">
          <TrendTopic>#FridayFeeling</TrendTopic>
        </TrendLink>

        <TopicInfo>1.2K Tweets</TopicInfo>

        <TrendLink to="/hashtag/BrexitAnniversary">
          <TrendTopic>#BrexitAnniversary</TrendTopic>
        </TrendLink>

        <TopicInfo>
          It's one year since the UK voted to leave European Union
        </TopicInfo>

        <TrendLink to="/search?q=HMSQueenElizabeth">
          <TrendTopic>HMS Queen Elizabeth</TrendTopic>
        </TrendLink>

        <TopicInfo>1,036 Tweets</TopicInfo>

        <TrendLink to="/search?q=JoeBudden">
          <TrendTopic>Joe Budden</TrendTopic>
        </TrendLink>

        <TopicInfo>1,036 Tweets</TopicInfo>

        <TrendLink to="/search?q=Trident">
          <TrendTopic>Trident</TrendTopic>
        </TrendLink>

        <TopicInfo>6,136 Tweets</TopicInfo>
      </Trends>
      <Copyright>
        © 2018 Twitter
        <CopyrightLink to="/about"> About</CopyrightLink>
        <CopyrightLink to="/support"> Help Center</CopyrightLink>
        <CopyrightLink to="/tos"> Terms</CopyrightLink>
        <CopyrightLink to="/privacy"> Privacy policy</CopyrightLink>
        <CopyrightLink to="/cookies"> Cookies</CopyrightLink>
        <CopyrightLink to="/advertisement"> Ads info</CopyrightLink>
      </Copyright>
    </Topics>
  );
};
export default ToFollow;
