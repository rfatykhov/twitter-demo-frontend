import React from "react";
import styled from "styled-components";
import moments from "./Assets/IconMoments.svg";
import home from "./Assets/IconHome.svg";
import notifications from "./Assets/IconNotifications.svg";
import messages from "./Assets/IconMessages.svg";
import logo from "./Assets/IconLogo.svg";
import avatarsmall from "./Assets/IconAvatarSmall.png";
import magnifier from "./Assets/IconMagnifier.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #ffffff;
  line-height: 20px;
  padding: 5px;
`;

const Navigation = styled.div`
  display: inline-flex;
`;

const StyledLink = styled(Link)`
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
  &:hover {
    color: #059ff5;
    border-bottom: 3px solid #059ff5;
  }
  &:active {
    color: #059ff5;
    border-bottom: 3px solid #059ff5;
  }
`;

const Logo = styled.button`
  display: flex;
  background: transparent;
  border: none;
  outline: none;
`;

const Rightbar = styled.div`
  display: flex;
`;

const Search = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f5f8fa;
  color: #687b8a;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  padding-left: 10px;
  width: 220px;
  height: 32px;
  font-size: 12px;
  outline: none;
  &:hover {
    border: 2px solid #059ff5;
  }
`;
const SearchForm = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  type: "text";
`;

const SearchButton = styled.button`
  background-color: transparent;
  background-position: center;
  background-image: url(${magnifier});
  background-repeat: no-repeat;
  background-size: 100%;
  outline: none;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

const TweetButton = styled.button`
  width: 72px;
  height: 32px;
  background-color: #1da1f2;
  color: white;
  font-size: 12px;
  padding-top: 5px 0;
  font-weight: bold;
  border-radius: 100px;
  border: none;
  outline: none;
  &:hover {
    background-color: #0072BB;
  }
  }
`;

const AvatarSmall = styled.div`
  padding: 0 10px;
`;

const Name = styled.div`
  padding: 0 10px;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Navigation>
        <StyledLink to="/twitter">
          <img src={home} alt="Return to the Homepage" />
          <Name>Home</Name>
        </StyledLink>
        <StyledLink to="/i/moments">
          <img src={moments} alt="Moments" />
          <Name>Moments</Name>
        </StyledLink>
        <StyledLink to="/i/notifications">
          <img src={notifications} alt="Latest Notifications" />
          <Name>Notifications</Name>
        </StyledLink>
        <StyledLink to="/i/messages">
          <img src={messages} alt="Messages" />
          <Name>Messages</Name>
        </StyledLink>
      </Navigation>

      <Logo>
        <img src={logo} alt="Go Back to Header" />
      </Logo>

      <Rightbar>
        <Search>
          <SearchForm type="text" placeholder="Search Twitter" />
          <SearchButton />
        </Search>

        <AvatarSmall>
          <img src={avatarsmall} alt="User picture" />
        </AvatarSmall>

        <TweetButton>Tweet</TweetButton>
      </Rightbar>
    </HeaderWrap>
  );
};
export default Header;
