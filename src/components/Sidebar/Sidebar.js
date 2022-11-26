import React from "react";
import "../Profile/Profile.css";
import avatarDefault from "../../images/avatarDefault.png";

function SideBar() {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-header">
        <img
          className="profile__avatar"
          src={avatarDefault}
          alt="user avatar"
        />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
