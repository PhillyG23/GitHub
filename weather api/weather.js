const form = document.querySelector("form");
const submitButton = document.querySelector("#submit-button");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  cityName.textContent = city;

  // Replace the API key and URL with your own
  const API_KEY = "aa5f4f4dc47db6eacc44f7aec7cc60db";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${aa5f4f4dc47db6eacc44f7aec7cc60db}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    conditions.textContent = data.weather[0].description;
  } catch (error) {
    console.error(error);
  }
});

function onSubmit(token) {
  document.getElementById("form").submit();
}
