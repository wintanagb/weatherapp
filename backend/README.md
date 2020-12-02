
### Weather App


## Process:
- Model
- Migration
  - Test it
- Route
- Controller
  - Test it


## Models:
  - Location
  - User
  - UserLocation

## Tables:
  - Locations
    - string: city
    - string: long, lat
  - Users
    - string: username
    - string: password
  - UserLocations
    - references :location
    - references :user

### Objective:
 A user can register/log in and view their current city's temperature stats for the week. There will a drop down menu to select from the top 10 cities in the US and be able to view their temperatures upon selection. A user can add cities to their Weather List where upon selection of each city will present them with that current city's weather stats. The main page will then display widgets for the cities the user selected to add to their weather list.
