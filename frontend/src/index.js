// document.addEventListener("DOMContentLoaded", () => {
//   const api = `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=48929e325c2f484e997a9aa942bc41b7`;
//
//   fetch(api)
//   .then(response => response.json())
//   .then (data =>console.log(data))
// });
//
// const fetchCities = () => {
//   fetch(URL+'/locations')
//   .then(respon => respon.json())
//   .then(cities => {
//       cities.array.forEach((city) => console.log(city))
//   });
// }

let user;
 // Creating objects of all the classes
 let userObject;
 let dropDownObject;
 let locationObject;
 let loginObject;
 let weatherObject;

 const URL = "http://localhost:3000"

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
