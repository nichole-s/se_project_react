import React, { useContext } from "react";
import _ from "lodash";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, clothingItems, handleCardClick }) {
  const actualWeather = weatherData.temperature;
  const weatherType = () => {
    if (actualWeather >= 86) {
      return "hot";
    } else if (actualWeather >= 66 && actualWeather <= 85) {
      return "warm";
    } else if (actualWeather <= 65) {
      return "cold";
    }
  };

  function filterClothing(card, data) {
    return (
      card.weather?.toLowerCase() === data ||
      card.weatherType?.toLowerCase() === data
    );
  }
  const clothingOptions = clothingItems.filter((item) =>
    filterClothing(item, weatherType())
  );

  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);

  return (
    <div className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">
              Today is{" "}
              {currentTemperatureUnit === "F"
                ? weatherData.temperatureF
                : weatherData.temperatureC}{" "}
              and it is {weatherType()} / You may want to wear:
            </p>
          </div>
        </div>
        <ul className="main__items">
          {clothingOptions.map((item) => {
            return (
              <ItemCard
                isOpen="false"
                clothingOption={item}
                key={_.uniqueId(`${item.name}-`)}
                name={item.name}
                image={item.imageUrl}
                weather={item.weather}
                onClick={() => {
                  handleCardClick(item);
                }}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Main;
