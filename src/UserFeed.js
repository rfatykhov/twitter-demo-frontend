import React from "react";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import TweetStatistics from "./TweetStatistics";

import cover from "./Assets/CoverImage.png";

const UserFeed = () => (
  <div>
    <Header />
    <img src={cover} alt="Main Image" className="cover" />
    <TweetStatistics />
    <Sidebar followname="AppleInsider" />
  </div>
);

export default UserFeed;
