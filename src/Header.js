import React from "react";
import MenuIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/SearchSharp";
import VideoCallIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/AppsSharp";
import NotificationIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationIcon className="header__icon" />
        <Avatar
          alt="Chris Hemsworth"
          src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d24fb0834a5c400084adc63%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D177%26cropX2%3D3586%26cropY1%3D354%26cropY2%3D3767"
        />
      </div>
    </div>
  );
}

export default Header;
