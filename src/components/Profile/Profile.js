import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothingSection from "../ClothingSection/ClothingSection";

function Profile({ clothingItems, handleCardClick, openModal }) {
  return (
    <div className="profile__wrapper">
      <Sidebar />
      <ClothingSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        openModal={openModal}
      />
    </div>
  );
}

export default Profile;
