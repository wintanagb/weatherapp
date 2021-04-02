class Weather{
    constructor(){}
    getWeatherConditions(location){
      const city = location.city;
      const state = location.state;
      const api = `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=fcdc814e33e64c229fbb836f6ed03908`;
 
      fetch(api)
      .then((response) => response.json())
      .then((json) => this.populateWeather(json));
    }
    populateWeather(json){
      const weatherJson = json.data[0];
      const icon = weatherJson.weather.icon;
      const description = weatherJson.weather.description;
      const city = weatherJson.city_name;
      const temperatureCels = weatherJson.app_temp; //Celsius
      const temperature = `${parseInt((temperatureCels * 9) / 5 + 32)}°`;
 
      const temp = document.querySelector(".temp");
      const weatherIcon = document.querySelector(".weather-icon");
      const temperatureDescription = document.querySelector(".temperature-description");
      const cityName = document.querySelector(".city");
 
      temp.textContent = temperature;
      temperatureDescription.textContent = description;
      cityName.textContent = city;
      weatherIcon.src = `icons/${icon}.png`;
    }
    clearShowArea(){
      const temp = document.querySelector(".temp");
      const weatherIcon = document.querySelector(".weather-icon");
      const temperatureDescription = document.querySelector(
          ".temperature-description"
      );
      const cityName = document.querySelector(".city");
 
      temp.innerHTML = "";
      weatherIcon.src = "";
      temperatureDescription.innerHTML = "";
      cityName.innerHTML = "";
    }
  }