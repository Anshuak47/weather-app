document.addEventListener("DOMContentLoaded", function (e) {
  const city = document.querySelector("#city-input");

  const weatherInfo = document.getElementById("weather-info");

  const cityName = document.getElementById("city-name");

  const temperature = document.getElementById("temperature");

  const description = document.getElementById("description");

  const errorMessage = document.querySelector("#error-message");
  document
    .querySelector("#get-weather-btn")
    .addEventListener("click", function () {
      if (city.value.length === 0) {
        errorMessage.classList.remove("hidden");
      } else {
        errorMessage.classList.add("hidden");
      }

      //   Hit the API now
    });
});
