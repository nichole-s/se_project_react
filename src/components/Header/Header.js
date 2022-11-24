import React from "react";
import "./Header.css";
import logo from "../../images/wtwrHeaderLogo.svg";
import avatarDefault from "../../images/avatarDefault.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ weatherData, openModal }) => {
  if (!weatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container-weather">
        <img src={logo} alt="WTWR logo" className="header__logo" />
        <p className="header__date-and-city">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__container-user">
        <ToggleSwitch />
        <button type="button" className="header__button" onClick={openModal}>
          + Add clothes
        </button>
        <p className="header__user">Terrence Tegegne</p>
        <img className="header__avatar" src={avatarDefault} alt="user avatar" />
      </div>
    </header>
  );
};

export default Header;
