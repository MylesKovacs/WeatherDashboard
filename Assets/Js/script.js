var searchTerm = document.querySelector("#search-box");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#city-search-term");
var weatherEl = document.querySelector("#weather")
var historyContainerEl = document.querySelector("#history-container")

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
var addToHistory = function() {
    var historyDisplayEl = document.createElement("<div>");
    historyDisplayEl.classlist = "list-container";

    var cityHistoryEl = document.createElement("a");
    cityHistoryEl.classList = "align-center list-item"
    cityHistoryEl.setAttribute("href", localStorage.getItem("city", []))
    
};
var getWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=863fa8c9dd8dd40d83d3a86ebf49c433";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayWeather(data.weather);
                });
            } else {
                alert("Error " + response.statusText);
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Weather");
        });
    localStorage.setItem("city", JSON.stringify(apiUrl));   
};

var displayWeather = function (list, searchTerm) {
    weatherSearchTerm.textContent = searchTerm;
for (var i = 0; i < list.length; i++) { 
    //create container for values
    var weatherContainerEl = document.createElement("div");
    weatherContainerEl.classList = "list-container";

    //create temp element 
    var tempEl = document.createElement("p") 
    tempEl.textContent = list[i].main.temp
    tempEl.classList = "temperature list-item";

    //create humidity element
    var humidEl = document.createElement("p");
    humidEl.textContent = list[i].main.humidity
    humidEl.classList= "humidity list-item"

    //create wind element
    var windEl = document.createElement("p");
    windEl.textContent = list[i].wind.speed
    windEl.classList= "wind list-item"

    //create UV element
    //var uvEl = document.createElement("p");
    //uvEl.textContent= 
    
    //{
        
        //if (uv < 2) {
        //    classList="bg-success"
        //} 
        //if (uv < 5) {
        //    classList="bg-warning"
        //}
        //if (uv > 5) (
        //    classList="bg-danger"
        //)
    //}
    //uvEl.classList= "uv list-item"

    //append to the container
    weatherContainerEl.appendChild(tempEl);
    weatherContainerEl.appendChild(humidEl);
    weatherContainerEl.appendChild(windEl);
    //weatherContainerEl.appendChild(uvEl);

    //append container to dom
    weatherContainerEl.appendChild(weatherEl);
};
};
searchTerm.addEventListener("submit", formSubmitHandler);