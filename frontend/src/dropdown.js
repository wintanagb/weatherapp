
const URL = "http://localhost:3000";


 document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', (event) => {
       event.stopPropagation();
       dropdown.classList.toggle('is-active');
    });

    fetchCities();
 });

const fetchCities = () => {
  fetch(URL+'/locations')
  .then(respon => respon.json())
  .then(cities => testFunction(cities))
}


const testFunction = (cities) => {
  cities.forEach(city => populateDropDown(city))
}

const populateDropDown = (location) => {
  const dropDown = document.querySelector(".dropdown-content");

  const option = document.createElement("a")
  option.className = "dropdown-item";
  option.textContent = location.city

  dropDown.appendChild(option);

  option.addEventListener("click", () => {
    // Create a button
    createCityButton(location);
    // Add To Playlist
    addToLocationList(location);
    // Add eventlistener on button
    // Display Weather contents
  })

}

const addToLocationList = (location) => {
  // persist favorited location to database
}

const createCityButton = (location) => {
  const container = document.querySelector(".flex-container-one");
  const cityButton = document.createElement("button");
  cityButton.className = "button is-dark city-button";
  cityButton.textContent = location.city;

  cityButton.addEventListener("click", () => {
    getWeatherConditions(location);
  })

  container.appendChild(cityButton);
}

const getWeatherConditions = (location) => {

    const city = location.city;
    const state = location.state;
    const api = `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=fcdc814e33e64c229fbb836f6ed03908`;

    fetch(api)
    .then(response => response.json())
    .then(json => populateWeather(json));
}

const populateWeather = (json) => {

  const weatherObject = json.data[0];
  const icon = weatherObject.weather.icon;
  console.log(weatherObject);
  const description = weatherObject.weather.description;
  const city = weatherObject.city_name;
  const temperatureCels = weatherObject.app_temp; //Celsius
  const temperature = `${parseInt(((temperatureCels * 9)/5) + 32)}°`

  // const degreeSection = document.querySelector(".degree-section");
  const temp = document.querySelector(".temp");
  const weatherIcon = document.querySelector(".weather-icon");
  const temperatureDescription = document.querySelector(".temperature-description");
  const cityName = document.querySelector(".city");

  temp.textContent = temperature;
  temperatureDescription.textContent = description;
  cityName.textContent = city;
  weatherIcon.src = `icons/${icon}.png`
}
