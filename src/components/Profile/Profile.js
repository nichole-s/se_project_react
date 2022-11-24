import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothingSection from "../ClothingSection/ClothingSection";

function Profile({ defaultClothing, handleCardClick, openModal }) {
  return (
    <div className="profile__wrapper">
      <Sidebar />
      <ClothingSection
        defaultClothing={defaultClothing}
        handleCardClick={handleCardClick}
        openModal={openModal}
      />
    </div>
  );
}

export default Profile;
