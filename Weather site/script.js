// document.getElementById('random-city-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default behavior of the link
//     fetchRandomCityWeather();
//   });

// function fetchRandomCityWeather() {
//     const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin']; // Example list of cities
//     const randomCity = cities[Math.floor(Math.random() * cities.length)];
//     fetchWeather(randomCity);
//   }

document.getElementById('search-btn').addEventListener('click', function(){
    const city = document.getElementById('search-input').value;
    fetchWeather(city);
});

function fetchWeather(city){
    const apiKey = 'bb86669dc9a390a10d815ccb613b681c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    })

    function displayWeather(data){
        console.log(data);

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
      if(data.weather[0].main == 'haze'){
          console.log('haze');
      }

    }
}



