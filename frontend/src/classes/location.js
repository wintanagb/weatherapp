class Location {
    constructor(){};
    fetchCities(){
      fetch(URL + "/locations")
      .then((respon) => respon.json())
      .then((locations) => this.testFunction(locations));
    }
    testFunction(locations){
      locations.forEach((location) => dropDownObject.populateDropDown(location))
    };
    addToLocationList(location){
      fetch(URL+'/user_locations', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({location_list:{user_id:user.id,location_id:location.id}})
      })
      .then(response => response.json())
      .then(json => {
        dropDownObject.createCityButton(location);
        userObject.getUser();
      })
    }
  }