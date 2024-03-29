function refreshTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature); 
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
    let apiKey = "65fb7046d82c7c4d3377a8b9tfd374o0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`
axios.get(apiUrl).then(refreshTemperature);
}


function searchButton(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);


    

}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchButton);
searchCity("Paris");