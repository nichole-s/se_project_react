import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { apiKey, latitude, longitude } from "../../utils/constants";
import {
  getForcastWeather,
  filterDataFromWeatherApi,
} from "../../utils/weatherApi";
import { getItems, addItem, removeItem } from "../../utils/api";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const onCloseModal = () => {
    setActiveModal(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddItemSubmit = (name, imageUrl, weatherType) => {
    addItem(name, imageUrl, weatherType)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        onCloseModal();
        console.log(clothingItems);
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = () => {
    removeItem(selectedCard.id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item.id !== selectedCard.id)
        );
        setSelectedCard({});
        onCloseModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (latitude && longitude) {
      getForcastWeather(latitude, longitude, apiKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherApi(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const fetchClothingItems = () => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchClothingItems();
  }, []);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <BrowserRouter>
          <div>
            <Header
              weatherData={weatherData}
              openModal={() => {
                setActiveModal("add");
              }}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              </Route>
              <Route path="/profile">
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  openModal={() => {
                    setActiveModal("add");
                  }}
                />
              </Route>
            </Switch>
            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add"}
            name={"add"}
            title={"New Garment"}
            onClose={onCloseModal}
            onAddItem={handleAddItemSubmit}
          ></AddItemModal>
          <ItemModal
            isOpen={activeModal === "preview"}
            name={"preview"}
            card={selectedCard}
            onClose={onCloseModal}
            handleDeleteModal={() => {
              setActiveModal("delete");
            }}
          />
          <DeleteConfirmationModal
            isOpen={activeModal === "delete"}
            name="delete"
            onClose={onCloseModal}
            handleConfirm={() => handleCardDelete(selectedCard)}
            handleCancel={() => {
              setActiveModal("preview");
            }}
          />
        </BrowserRouter>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
