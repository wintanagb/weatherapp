class Dropdown{
  constructor(){
    this.dropDown = document.querySelector(".dropdown");
  };
  dropDownEvent(){
      const dropdown = document.querySelector(".dropdown");
      dropdown.addEventListener("click", () => dropdown.classList.toggle("is-active"));
  }
  populateDropDown(location){
    const dropDown = document.querySelector(".dropdown-content");
    const option = document.createElement("a");
    option.className = "dropdown-item";
    option.textContent = location.city;

    dropDown.appendChild(option);

    option.addEventListener("click", () => {
        locationObject.addToLocationList(location);
    });
  }
  createCityButton(location){
    const container = document.querySelector(".flex-container-one");
    const cityButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    deleteButton.className = "button is-dark";
    deleteButton.textContent = '❌';

    cityButton.className = "button is-dark city-button";
    cityButton.textContent = location.city;
    cityButton.dataset.id =

    cityButton.addEventListener("click", () => {
        weatherObject.getWeatherConditions(location);
    });

    deleteButton.addEventListener("click", (e)=> {
      const userLocationId = userObject.parseUserLocation(location)
      e.target.parentElement.remove();
      userObject.deleteCity(userLocationId) //persist change!
    })

    cityButton.appendChild(deleteButton);
    container.appendChild(cityButton);

    return deleteButton;
  }
  removeAllCityButtons(){
    const cityButtons = document.querySelectorAll(".city-button");
    cityButtons.forEach(button => button.remove());
    // cityButtons.removeAll();

  }
}
