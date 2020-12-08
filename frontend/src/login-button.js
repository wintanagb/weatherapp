let user = null;
let loginButton;

const URL = "http://localhost:3000";


document.addEventListener("DOMContentLoaded", ()=>{
  loginButton = document.querySelector("#login-button");
  renderModal();
  loginButtonEvent();
  dropDownEvent();
  fetchCities();
})

const dropDownEvent = () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("click", (event) => {
      // event.stopPropagation();
      dropdown.classList.toggle("is-active");
  });
}

const toggleLoginButton = () => {
  if (checkCurrentUser()){
      loginButton.textContent = "Logout"
      if (user.locations){user.locations.forEach(location => createCityButton(location))}
  }else {
    loginButton.textContent = "Login"
  }
}

const checkCurrentUser = () => {
  return !!user
}

const loginButtonEvent = () => {
  loginButton.addEventListener("click", () => {
    if (checkCurrentUser()){  // Log out
      user = null;
      toggleLoginButton();
      removeAllCityButtons();
      clearShowArea();
    }else {
      showModal();
    }
  })
}

const clearShowArea = () => {

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


const renderModal = () => {
  const modal = document.querySelector("#login-modal");
  const modalBackground = document.querySelector(".modal-background");
  // const submitButton = document.querySelector("#submit-button");
  const form = document.querySelector(".form")
  // Untoggles the modal
  modalBackground.addEventListener("click", () => untoggleModal(modal));

  // Signs user in
  form.addEventListener("submit", (e) => {
      console.log("hey")
      e.preventDefault();
      untoggleModal(modal);
      createUser();
  })

}

const showModal = () => {
  const modal = document.querySelector("#login-modal");
  modal.classList.add("is-active");
}


const createUser = () => {
  const usernameField = document.querySelector("#username-field");

  fetch(URL+'/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username: usernameField.value})
  })
  .then(response => response.json())
  .then(userObject => {
      console.log(userObject)
      debounce = true
      user = userObject;
      toggleLoginButton();
  })
}

const untoggleModal = (modal) => {
  modal.classList.remove("is-active");
}

const fetchCities = () => {
    fetch(URL + "/locations")
        .then((respon) => respon.json())
        .then((cities) => testFunction(cities));
};

const testFunction = (cities) => {
    cities.forEach((city) => populateDropDown(city));
};

const populateDropDown = (location) => {
    const dropDown = document.querySelector(".dropdown-content");

    const option = document.createElement("a");
    option.className = "dropdown-item";
    option.textContent = location.city;

    dropDown.appendChild(option);

    option.addEventListener("click", () => {
        addToLocationList(location);
    });
};

const addToLocationList = (location) => {
    fetch(URL+'/user_locations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({location_list:{user_id:user.id,location_id:location.id}})
    })
    .then(response => response.json())
    .then(json = (user_location) => {
      createCityButton(location)
      getUser();
    })
};


const createCityButton = (location) => {
    const container = document.querySelector(".flex-container-one");
    const cityButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    deleteButton.className = "button is-dark";
    deleteButton.textContent = '❌';

    cityButton.className = "button is-dark city-button";
    cityButton.textContent = location.city;
    cityButton.dataset.id =

    cityButton.addEventListener("click", () => {
        getWeatherConditions(location);
    });

    deleteButton.addEventListener("click", (e)=> {
      const userLocationId = parseUserLocation(location)
      e.target.parentElement.remove();
      deleteCity(userLocationId) //persist change!
    })

    cityButton.appendChild(deleteButton);
    container.appendChild(cityButton);

    return deleteButton;
};

const parseUserLocation = (location) => {
  let locationId;
  user.user_locations.forEach((user_location) => {
      if(user_location.location_id === location.id){
        locationId = user_location.id
      }
  });
  return locationId
}

const deleteCity = (userLocationId) => {
  fetch(URL+`/user_locations/${userLocationId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }})
    .then(response => response.json())
    .then(json => {
      getUser();
    })
  }


const removeAllCityButtons = () => {
  const cityButtons = document.querySelectorAll(".city-button");
  cityButtons.forEach(button => button.remove());
  // cityButtons.removeAll();

}

const getWeatherConditions = (location) => {
    const city = location.city;
    const state = location.state;
    const api = `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=fcdc814e33e64c229fbb836f6ed03908`;

    fetch(api)
        .then((response) => response.json())
        .then((json) => populateWeather(json));
};

const populateWeather = (json) => {
    const weatherObject = json.data[0];
    const icon = weatherObject.weather.icon;
    const description = weatherObject.weather.description;
    const city = weatherObject.city_name;
    const temperatureCels = weatherObject.app_temp; //Celsius
    const temperature = `${parseInt((temperatureCels * 9) / 5 + 32)}°`;

    // const degreeSection = document.querySelector(".degree-section");
    const temp = document.querySelector(".temp");
    const weatherIcon = document.querySelector(".weather-icon");
    const temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    const cityName = document.querySelector(".city");

    temp.textContent = temperature;
    temperatureDescription.textContent = description;
    cityName.textContent = city;
    weatherIcon.src = `icons/${icon}.png`;
};

const getUser = () => {
  fetch(URL+'/users/'+user.id)
  .then(response => response.json())
  .then(json => {
    user=json
  })
}
