import { weatherConditions } from "../../utils/constants";
import "../../blocks/WeatherCard.css";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  function selectBackground(weatherData) {
    if (!weatherData.isDay) {
      return "weathercard__background-night";
    } else if (
      weatherData.isDay &&
      (weatherData.condition.includes("Sunny") ||
        weatherData.condition.includes("Cloudy") ||
        weatherData.condition.includes("cloudy"))
    ) {
      return "weathercard__background-day";
    } else {
      return "weathercard__background-day-precipitation";
    }
  }

  const backgroundColor = selectBackground(weatherData);

  function selectWeatherCondition(weatherData) {
    const weatherCondition = weatherData?.condition?.toLowerCase() || "";
    if (weatherCondition === null) return "";
    if (
      (weatherCondition.includes("sunny") ||
        weatherCondition.includes("clear")) &&
      weatherData.isDay
    ) {
      return "sunday";
    } else if (
      (weatherCondition.includes("sunny") ||
        weatherCondition.includes("clear")) &&
      !weatherData.isDay
    ) {
      return "sunnight";
    } else if (
      (weatherCondition.includes("cloudy") ||
        weatherCondition.includes("overcast")) &&
      weatherData.isDay
    ) {
      return "cloudday";
    } else if (
      (weatherCondition.includes("cloudy") ||
        weatherCondition.includes("overcast")) &&
      !weatherData.isDay
    ) {
      return "cloudnight";
    } else if (
      (weatherCondition.includes("fog") || weatherCondition.includes("mist")) &&
      weatherData.isDay
    ) {
      return "fogday";
    } else if (
      (weatherCondition.includes("fog") || weatherCondition.includes("mist")) &&
      !weatherData.isDay
    ) {
      return "fognight";
    } else if (
      (weatherCondition.includes("rain") ||
        weatherCondition.includes("drizzle")) &&
      weatherData.isDay
    ) {
      return "rainday";
    } else if (
      (weatherCondition.includes("rain") ||
        weatherCondition.includes("drizzle")) &&
      !weatherData.isDay
    ) {
      return "rainnight";
    } else if (
      (weatherCondition.includes("snow") ||
        weatherCondition.includes("sleet") ||
        weatherCondition.includes("ice") ||
        weatherCondition.includes("blizzard")) &&
      weatherData.isDay
    ) {
      return "snowday";
    } else if (
      (weatherCondition.includes("snow") ||
        weatherCondition.includes("sleet") ||
        weatherCondition.includes("ice") ||
        weatherCondition.includes("blizzard")) &&
      !weatherData.isDay
    ) {
      return "snownight";
    } else if (weatherData.isDay) {
      return "stormday";
    } else {
      return "stormnight";
    }
  }

  const weatherConditionText = selectWeatherCondition(weatherData);

  return (
    <div className={`weathercard ${backgroundColor}`}>
      <h2 className="weathercard__temp">{weatherData.temperature}&#8457;</h2>
      <div className="weathercard__image-wrapper">
        <img
          className="weathercard__image"
          src={process.env.PUBLIC_URL + weatherConditions[weatherConditionText]}
          alt={weatherConditionText}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
