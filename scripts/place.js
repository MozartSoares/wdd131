
function generateWeatherData() {
  const randomTemperature = (Math.random() * 30 - 5).toFixed(1);
  const randomWindSpeed = (Math.random() * 20 + 1).toFixed(1);
  return {
    temperature: parseFloat(randomTemperature),
    windSpeed: parseFloat(randomWindSpeed),
  };
}

function calculateWindChill(temp, speed) {

  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(2);
}

function displayWeatherData() {
  const weatherDataContainer = document.querySelector("#weather-data");
  const { temperature, windSpeed } = generateWeatherData();


  let windChill = "N/A";
  if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
  }


  weatherDataContainer.innerHTML = `
    <p>Temperature: ${temperature} °C</p>
    <p>Wind Speed: ${windSpeed} km/h</p>
    <p>Wind Chill: ${windChill}</p>
  `;
}

window.addEventListener("load", displayWeatherData);

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = `© ${currentYear} 🧑🏻‍💻Mozart Soares 🧑🏻‍💻, Brazil`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;
