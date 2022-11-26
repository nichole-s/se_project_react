import React from "react";
import "./Profile.css";
import SideBar from "../rename/rename";
import ClothingSection from "../ClothingSection/ClothingSection";

function Profile({ clothingItems, handleCardClick, openModal }) {
  return (
    <div className="profile__wrapper">
      <SideBar />
      <ClothingSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        openModal={openModal}
      />
    </div>
  );
}

export default Profile;
