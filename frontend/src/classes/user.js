class User{
    constructor(){
      this.usernameField = document.querySelector("#username-field");
      this.URL = "http://localhost:3000"
    }
 
    getUser(){
      fetch(URL+'/users/'+user.id)
      .then(response => response.json())
      .then(json => {
        user=json
        if(user.user_locations.length <= 0){
          weatherObject.clearShowArea();
        }
      })
    }
 
    createUser(){
      fetch(URL+'/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: this.usernameField.value})
      })
      .then(response => response.json())
      .then(userObject => {
          user = userObject;
          loginObject.toggleLoginButton();
      })
    }
 
    deleteCity(userLocationId){
      fetch(URL+`/user_locations/${userLocationId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
      }})
      .then(response => response.json())
      .then(json => {
        userObject.getUser();
      })
    }
 
    parseUserLocation(location){
      let locationId;
      user.user_locations.forEach((user_location) => {
          if(user_location.location_id === location.id){
            locationId = user_location.id
          }
      })
      return locationId
    }
    checkCurrentUser(){
      return !!user
    }
  };