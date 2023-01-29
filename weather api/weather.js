const form = document.querySelector("form");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  cityName.textContent = city;
  
  // Replace the API key and URL with your own
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;
  
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    conditions.textContent = data.weather[0].description;
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("submit-button").addEventListener("click", function() {
    var answer = document.getElementById("answer").value;
    if (answer == 4) {
      document.getElementById("action-button").disabled = false;
    } else {
      alert("Incorrect answer, try again.");
      document.getElementById("answer").value = "";
    }
  });