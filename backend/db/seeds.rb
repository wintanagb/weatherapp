UserLocation.destroy_all;
Location.destroy_all;
User.destroy_all;


# l1 = Location.create(city: "New York City", state: "40.6635,73.9387");
# Location.create(city: "Los Angeles", state: "34.0194,118.4108");
# Location.create(city: "Chicago", state: "41.8376,87.6818");
# Location.create(city: "Houston", state: "29.7866,95.3909");
# Location.create(city: "Phoenix", state: "33.5722,112.0901");
# Location.create(city: "Philadelphia", state: "40.0094,75.1333");
# Location.create(city: "San Antonio", state: "29.4724,98.5251");
# Location.create(city: "San Diego", state: "32.8153,117.1350");
# Location.create(city: "Dallas", state: "32.7933,96.7665");
# Location.create(city: "San Jose", state: "37.2967,121.8189");



l1 = Location.create(city: "New York City", state: "NY");
Location.create(city: "Los Angeles", state: "CA");
Location.create(city: "Chicago", state: "IL");
Location.create(city: "Houston", state: "TX");
Location.create(city: "Phoenix", state: "AZ");
Location.create(city: "Philadelphia", state: "PA");
Location.create(city: "San Antonio", state: "TX");
Location.create(city: "San Diego", state: "CA");
Location.create(city: "Dallas", state: "TX");
Location.create(city: "San Jose", state: "CA");
Location.create(city: "Seattle", state: "WA");
Location.create(city: "Raleigh", state: "NC");
u1 = User.create(username: "Elijah");

UserLocation.create(user_id: u1.id, location_id: l1.id)
