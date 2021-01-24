var searchBox = document.querySelector("#search-box")
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.queerySelector("#weather-container")
var weatherSearchTerm = document.querySelector("#city-search-term")

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
    if (cityName) {
        getWeather(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter a valid City")
    }
    console.log(event);
};

var getWeather = function (city) {
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=Madison&appid=863fa8c9dd8dd40d83d3a86ebf49c433";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayWeather(data.items);
                });
            } else {
                alert("Error " + response.statusText);
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Weather");
        });
};

var displayWeather = function (weather, searchTerm) {
    weatherContainerEl.textContent = "";
    weatherSearchTerm.textContent = searchTerm;
    
    //create container for values
    var weatherEl = document.createElement("<div>");
    weatherEl.classList = "list-container";

    //create temp element 
    var tempEl = document.createElement("<p>");
    tempEl.classList = "temperature";

    //create humidity element
    var humidEl = document.createElement("<p>");
    humidEl.classList= "humidity"

    //create wind element
    var windEl = document.createElement("<p>");
    windEl.classList= "wind"

    //create UV element
    var uvEl = document.createElement("<p>");
    uvEl.classList= "uv"

    //append to the container
    

}