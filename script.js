document.addEventListener("DOMContentLoaded", function (e) {
  const cityInput = document.querySelector("#city-input");

  const weatherInfo = document.getElementById("weather-info");

  const cityNameDisplay = document.getElementById("city-name");

  const temperature = document.getElementById("temperature");

  const description = document.getElementById("description");

  const errorMessage = document.querySelector("#error-message");

  //   Hit the API now
  const API_KEY = "4140ae0bc458d0c765e72b2b25e8e74a";
  document
    .querySelector("#get-weather-btn")
    .addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if (city.length === 0) {
        errorMessage.classList.remove("hidden");
        weatherInfo.classList.add("hidden");
      } else {
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
        try {
          const weatherData = await fetchWeatherData(city);

          displayWeatherData(weatherData);
        } catch (error) {
          showError();
        }
      }
    });

  async function fetchWeatherData(cityName) {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new error("City not found");
    }
    // response.then()

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    cityNameDisplay.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    description.textContent = `Weather : ${weather[0].description}`;
  }

  function showError() {
    errorMessage.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
  }
});
