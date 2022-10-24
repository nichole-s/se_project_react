import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import {
  secretKey,
  location,
  defaultClothingItems,
} from "../../utils/constants";
import {
  getForcastWeather,
  filterDataFromWeatherApi,
} from "../../utils/weatherApi";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const closeModal = () => {
    setActiveModal(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getForcastWeather(location, secretKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="app">
      <Header
        weatherData={weatherData}
        openModal={() => {
          setActiveModal("add");
        }}
      />
      <Main
        weatherData={weatherData}
        defaultClothing={defaultClothingItems}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <ModalWithForm
        isOpen={activeModal === "add"}
        name="add"
        title="New Garment"
        buttonText="Add Garment"
        onClose={closeModal}
      >
        <h4 className="form__label">Name</h4>
        <input
          className="form__input form__input_type_name"
          name="name"
          type="text"
          placeholder="Name"
          minLength="1"
          maxLength="40"
          required
        />
        <h4 className="form__label">Image</h4>
        <input
          className="form__input form__input_type_image"
          name="image"
          type="url"
          placeholder="Image URL"
          required
        />
        <h4 className="form__label">Select the weather type:</h4>
        <div className="form__radio-container">
          <div className="form__radio">
            <input
              className="form__input-radio"
              name="temp"
              value="Hot"
              type="radio"
              id="hot"
            />
            <label className="form__label-radio" htmlFor="hot">
              Hot
            </label>
          </div>
          <div className="form__radio">
            <input
              className="form__input-radio"
              name="temp"
              value="Warm"
              type="radio"
              id="warm"
            />
            <label className="form__label-radio" htmlFor="warm">
              Warm
            </label>
          </div>
          <div className="form__radio">
            <input
              className="form__input-radio"
              name="temp"
              value="Cold"
              type="radio"
              id="cold"
            />
            <label className="form__label-radio" htmlFor="cold">
              Cold
            </label>
          </div>
        </div>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        name={"preview"}
        card={selectedCard}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
