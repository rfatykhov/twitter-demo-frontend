import React, { Component } from "react";
import styled from "styled-components";
import "flexboxgrid2";
import approved from "./Assets/Approved.png";
import calendar from "./Assets/Calendar.svg";
import link from "./Assets/Link.svg";
import location from "./Assets/Location.svg";
import avatarbig from "./Assets/Avatar Big.png";
import App from "../App";
import "./Sidebar.css";
import Tweet from "../Tweet/Tweet";

import followers from "./Assets/IconFollowers.png";
import media from "./Assets/IconMedia.png";
import followersOne from "./Assets/FollowersImg1.png";
import followersTwo from "./Assets/FollowersImg2.png";
import followersThree from "./Assets/FollowersImg3.png";
import followersFour from "./Assets/FollowersImg4.png";
import followersFive from "./Assets/FollowersImg5.png";
import followersSix from "./Assets/FollowersImg6.png";
import mediaOne from "./Assets/MediaImg1.png";
import mediaTwo from "./Assets/MediaImg2.png";
import mediaThree from "./Assets/MediaImg3.png";
import mediaFour from "./Assets/MediaImg4.png";
import mediaFive from "./Assets/MediaImg5.png";
import mediaSix from "./Assets/MediaImg6.png";

import firstimg from "../Tweet/Assets/ImageTweet.png";
import article from "../Tweet/Assets/Article.png";
import pinned from "../Tweet/Assets/PinnedIcon.svg";
import ToFollow from "../ToFollow/ToFollow";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

//Sidebar top section styling

const Information = styled.div``;
const TwitterName = styled.div`
  color: black;
  font-size: 23px;
  line-height: 22px;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 5px;
`;

const User = styled.div`
  color: #697787;
  font-size: 15px;
  margin-left: 60px;
  text-align: left;
  padding-left: 5px;
`;

const UserLink = styled(Link)`
  color: #697787;
  font-size: 15px;
  text-decoration: none;
  padding-right: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FollowStatus = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #697787;
`;

const Description = styled.p`
  font-size: 15px;
  color: black;
  text-align: left;
  margin-left: 60px;
  line-height: 20px;
  padding-left: 5px;
`;

const AvatarBig = styled.div`
  overflow: auto;
  position: absolute;
  z-index: 1;
  width: 350px;
  top: 210px;
  cursor: pointer;
`;

const SideBarButton = styled.button`
  width: 100px;
  height: 45px;
  background-color: #1da1f2;
  color: white;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  border-radius: 100px;
  border: none;
  outline: none;
  margin-left: 5px;
  &:hover {
    background-color: #0072bb;
  }
`;

//Followers you know and media section styling

const FollowersImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space around;
`;

const MediaImg = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

//Twitter feed navigation styling

const ProfileNav = styled.div`
  display: flex;
  background-color: white;
  border-bottom: 1px solid #e1e8ed;
  cursor: ponter;
  margin-top: 10px;
  padding: 10px 15px;
`;

const ProfileNavElement = styled.li`
  display: inline-block;
  list-style: none;
  color: #1da1f2;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding-right: 30px;

  &:first-child {
    color: black;
  &:hover {
    text-decoration: underline;
  }
`;

// Who to follow section styling

const WhoToFollow = styled.div`
  display: inline-block;
  margin-top: 10px;
  background-color: white;
  padding: 15px 10px;
`;

const WhoFollowBtn = styled.button`
  background: #1da1f2;
  color: white;
  border: 2px solid #1da1f2;
  padding: 10px 15px;
  outline: none;
  border-radius: 100px;
  margin-right: 18px;
  cursor: pointer;
  &:hover {
    background: #eaf5fd;
  }
`;

const WhoFollowText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const WhoFollowSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const WhoFollowCard = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid grey;
`;

const WhoFollowName = styled.div`
  width: 100%;
  padding-top: 5px;
  font-size: 12px;
  font-weight: bold;
`;

const WhoFollowAdress = styled.div`
  width: 100%;
  padding-top: 5px;
  font-size: 12px;
  font-color: #707e88;
`;

const Additional = styled.ul`
  margin-left: 20px;
`;
const SmallIcon = styled.img`
  padding: 0 5px;
  width: 15px;
  height: 15px;
`;

const AddInfo = styled.li`
  font-size: 15px;
  color: grey;
  display: flex;
  padding: 7px 0;
`;

const AdditionalTitle = styled.div``;

const AdditionalLink = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #1da1f2;
  padding: 3px 3px;
`;

const WhoFollowAvatar = styled.img`
  display: flex;
  width: 48px;
  height: 48px;
`;

const StyledLink = styled(Link)`
  color: #0072bb;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Hashtag = styled.div`
  font-size: 15px;
  color: #blue;
`;

class Sidebar extends Component {
  state = {
    tweetOne: {
      username: "Every Interaction",
      userAdress: "@EveryInteract",
      date: "• 2 mar 2015",
      textTweet:
        "We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
      retweetsNumber: "17",
      likesNumber: "47",
      pinnedtext: "Pinned Tweet"
    },
    tweetTwo: {
      username: "Every Interaction",
      userAdress: "@EveryInteract",
      date: "• 23h",
      textTweet:
        "Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
      commentsNumber: "1",
      retweetsNumber: "4",
      likesNumber: "2"
    },
    tweetThree: {
      username: "Every Interaction",
      userAdress: "@EveryInteract",
      date: "• Nov 18",
      textTweet:
        "Variable web fonts are coming, and will open a world of opportunities for weight use online"
    }
  };

  render() {
    return (
      <div class="row">
        <div class="col-sm-3">
          <Information>
            <AvatarBig>
              <img src={avatarbig} alt="Profile picture" />
            </AvatarBig>
            <TwitterName>
              Every Interaction
              <SmallIcon src={approved} alt="Verified" />
            </TwitterName>
            <User>
              <UserLink to="/EveryInteract">@EveryInteract</UserLink>
              <FollowStatus>Follows you</FollowStatus>
            </User>

            <Description>
              UX Design studio focussed problem solving creativity. Design to us
              is how can we make things *work* amazing.
            </Description>

            <Additional>
              <AddInfo>
                <SmallIcon src={location} alt="Location" />
                <AdditionalTitle>London, UK </AdditionalTitle>
              </AddInfo>
              <AddInfo>
                <SmallIcon src={link} alt="Direct link" />
                <StyledLink to="https://www.everyinteraction.com/">
                  everyinteraction.com
                </StyledLink>
              </AddInfo>
              <AddInfo>
                <SmallIcon src={calendar} alt="First joined" />
                <AdditionalTitle>Joined May 2008</AdditionalTitle>
              </AddInfo>
            </Additional>
            <SideBarButton>Tweet to</SideBarButton>
            <SideBarButton>Message</SideBarButton>

            <Additional>
              <AddInfo>
                <SmallIcon src={followers} alt="Number of followers you know" />
                <StyledLink to="/followers_you_follow">
                  6 Followers you know
                </StyledLink>
              </AddInfo>
              <FollowersImg>
                <img src={followersOne} />
                <img src={followersTwo} />
                <img src={followersThree} />
                <img src={followersFour} />
                <img src={followersFive} />
                <img src={followersSix} />
              </FollowersImg>
              <AddInfo>
                <SmallIcon src={media} alt="Photos and videos" />
                <StyledLink to="/media">522 Photos and videos</StyledLink>
              </AddInfo>
              <MediaImg>
                <img src={mediaOne} />
                <img src={mediaTwo} />
                <img src={mediaThree} />
                <img src={mediaFour} />
                <img src={mediaFive} />
                <img src={mediaSix} />
              </MediaImg>
            </Additional>
          </Information>
        </div>
        <div class="col-sm-6">
          <ProfileNav>
            <ProfileNavElement>Tweets </ProfileNavElement>
            <ProfileNavElement>Tweets & replies</ProfileNavElement>
            <ProfileNavElement>Media</ProfileNavElement>
          </ProfileNav>
          <Tweet
            username={this.state.tweetOne.username}
            userAdress={this.state.tweetOne.userAdress}
            date={this.state.tweetOne.date}
            textTweet={this.state.tweetOne.textTweet}
            retweetsNumber={this.state.tweetOne.retweetsNumber}
            likesNumber={this.state.tweetOne.likesNumber}
            pinnedtext={this.state.tweetOne.pinnedtext}
            image={firstimg}
            pinned={pinned}
          />
          <Tweet
            username={this.state.tweetTwo.username}
            userAdress={this.state.tweetTwo.userAdress}
            date={this.state.tweetTwo.date}
            textTweet={this.state.tweetTwo.textTweet}
            commentsNumber={this.state.tweetTwo.commentsNumber}
            retweetsNumber={this.state.tweetTwo.retweetsNumber}
            likesNumber={this.state.tweetTwo.likesNumber}
          />
          <Tweet
            username={this.state.tweetThree.username}
            userAdress={this.state.tweetThree.userAdress}
            date={this.state.tweetThree.date}
            textTweet={this.state.tweetThree.textTweet}
            image={article}
          />
        </div>
        <div class="col-sm-3">
          <ToFollow />
        </div>
      </div>
    );
  }
}

export default Sidebar;
