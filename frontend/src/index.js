
let user;
// Creating objects of all the classes
let userObject;
let dropDownObject;
let locationObject;
let loginObject;
let weatherObject;

const URL = "http://localhost:3001"

document.addEventListener("DOMContentLoaded", () => {
  userObject = new User();
  dropDownObject = new Dropdown();
  locationObject = new Location();
  loginObject = new Login();
  weatherObject = new Weather();
  loginObject.renderModal();
  loginObject.loginButtonEvent();
  dropDownObject.dropDownEvent();
  locationObject.fetchCities();
})
