UserLocation.destroy_all;
Location.destroy_all;
User.destroy_all;


l1 = Location.create(city: "New York City", coordinates: "40.6635,73.9387");
Location.create(city: "Los Angeles", coordinates: "34.0194,118.4108");
Location.create(city: "Chicago", coordinates: "41.8376,87.6818");
Location.create(city: "Houston", coordinates: "29.7866,95.3909");
Location.create(city: "Phoenix", coordinates: "33.5722,112.0901");
Location.create(city: "Philadelphia", coordinates: "40.0094,75.1333");
Location.create(city: "San Antonio", coordinates: "29.4724,98.5251");
Location.create(city: "San Diego", coordinates: "32.8153,117.1350");
Location.create(city: "Dallas", coordinates: "32.7933,96.7665");
Location.create(city: "San Jose", coordinates: "37.2967,121.8189");

u1 = User.create(username: "Elijah");

UserLocation.create(user_id: u1.id, location_id: l1.id)
