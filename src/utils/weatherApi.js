const getForcastWeather = (location, apiKey) => {
  const parsedLocation = `${location.latitude},${location.longitude}`;
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${parsedLocation}&days=1`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

const filterDataFromWeatherApi = (data) => {
  if (!data) {
    return null;
  }
  const weatherData = {};
  weatherData.city = data.location.name;
  weatherData.temperature = data.current.temp_f;
  weatherData.isDay = data.current.is_day;
  weatherData.condition = data.current.condition.text;
  return weatherData;
};

export { getForcastWeather, filterDataFromWeatherApi };
