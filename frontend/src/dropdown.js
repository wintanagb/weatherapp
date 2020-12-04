
const URL = "http://localhost:3000"

 document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
       event.stopPropagation();
       dropdown.classList.toggle('is-active');
    });

    fetchCities()
 });

const fetchCities = () => {
  fetch(URL+'/locations')
  .then(respon => respon.json())
  .then(cities => testFunction(cities))

}


const testFunction = (cities) => {
  cities.forEach(city => populateDropDown(city))
}

const populateDropDown = (city) => {
  const dropDown = document.querySelector(".dropdown-content");

  const option = document.createElement("a")
  option.className = "dropdown-item"
  option.textContent = city.city

  dropDown.appendChild(option);

  option.addEventListener("click", () => {
    console.log(city.city, city.coordinates)
  })

}
