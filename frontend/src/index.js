window.addEventListener("load", () => {
    let long;
    let lat;


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitute;
        const proxy = `https://cors-anywhere.herokuapp.com`
        const api = `https://api.weatherbit.io/v2.0/current?city=${city},${state}&key=48929e325c2f484e997a9aa942bc41b7`;

    const fetchCities = () => {
            fetch(URL+'/locations')
            .then(respon => respon.json())
            .then(cities => {
                cities.array.forEach((city) => console.log(city))

            });
        }
        
    fetch(api)

        .then(response => {
            return response.json();
        })
        .then (data => {
            console.log(data);
        });



    });    
    }
});

    const listContainer= document.querySelector('.flex-container-one')
