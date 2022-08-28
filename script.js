const API_KEY = '2dca55d8a7984abaaceee3181667291e';
const submitButton = document.querySelector('.submit');

const getWeatherData = (lat, lon) => {
    console.log(lat);
    console.log(lon);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(url)
    .then(data => data.json())
    .then(response => {
    displayWeather(response);
    });

}
const displayWeather = (response) => {
    const cityName = document.querySelector('.search-bar-city').value;
    console.log(response);
    const temp0 = response.current.temp;
    const weather0 = response.current.weather[0].main;
    const humidity0 = response.current.humidity;
    const windSpeed0 = response.current.wind_speed;
    const icon0 = response.current.weather[0].icon;
    const icon1 = response.daily[1].weather[0].icon;
    const icon2 = response.daily[2].weather[0].icon;
    const icon3 = response.daily[3].weather[0].icon;
    const icon4 = response.daily[4].weather[0].icon;
    const icon5 = response.daily[5].weather[0].icon;
    const icon6 = response.daily[6].weather[0].icon;
    const icon7 = response.daily[7].weather[0].icon;
    const temp1 = response.daily[1].temp.day;
    const temp2 = response.daily[2].temp.day;
    const temp3 = response.daily[3].temp.day;
    const temp4 = response.daily[4].temp.day;
    const temp5 = response.daily[5].temp.day;
    const temp6 = response.daily[6].temp.day;
    const temp7 = response.daily[7].temp.day;
    const weather1 = response.daily[1].weather[0].main;
    const weather2 = response.daily[2].weather[0].main;
    const weather3 = response.daily[3].weather[0].main;
    const weather4 = response.daily[4].weather[0].main;
    const weather5 = response.daily[5].weather[0].main;
    const weather6 = response.daily[6].weather[0].main;
    const weather7 = response.daily[7].weather[0].main;
    const humidity1 = response.daily[1].humidity;
    const humidity2 = response.daily[2].humidity;
    const humidity3 = response.daily[3].humidity;
    const humidity4 = response.daily[4].humidity;
    const humidity5 = response.daily[5].humidity;
    const humidity6 = response.daily[6].humidity;
    const humidity7 = response.daily[7].humidity;
    const windSpeed1 = response.daily[1].wind_speed;
    const windSpeed2 = response.daily[2].wind_speed;
    const windSpeed3 = response.daily[3].wind_speed;
    const windSpeed4 = response.daily[4].wind_speed;
    const windSpeed5 = response.daily[5].wind_speed;
    const windSpeed6 = response.daily[6].wind_speed;
    const windSpeed7 = response.daily[7].wind_speed;

    document.querySelector('.city').innerHTML = 'Weather in ' + cityName;
    document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/'+ icon0 +'.png';
    document.querySelector('.description').innerHTML = weather0;
    document.querySelector('.temp').innerText = temp0 + '°C';
    document.querySelector('.humidity').innerText = 'Humidity: '+ humidity0 + '%';
    document.querySelector('.wind').innerText = 'Wind speed: ' + windSpeed0 + 'km/h';

    document.getElementsByClassName('icon')[1].src = 'http://openweathermap.org/img/wn/'+ icon1 +'.png';
    document.getElementsByClassName('description')[1].innerHTML = weather1;
    document.getElementsByClassName('temp-upcoming-days')[0].innerText = temp1 + '°C';
    document.getElementsByClassName('humidity')[1].innerText = 'Humidity: '+ humidity1 + '%';
    document.getElementsByClassName('wind')[1].innerText = 'Wind speed: ' + windSpeed1 + 'km/h';

    document.getElementsByClassName('icon')[2].src = 'http://openweathermap.org/img/wn/'+ icon2 +'.png';
    document.getElementsByClassName('description')[2].innerHTML = weather2;
    document.getElementsByClassName('temp-upcoming-days')[1].innerText = temp2 + '°C';
    document.getElementsByClassName('humidity')[2].innerText = 'Humidity: '+ humidity2 + '%';
    document.getElementsByClassName('wind')[2].innerText = 'Wind speed: ' + windSpeed2 + 'km/h';

    document.getElementsByClassName('icon')[3].src = 'http://openweathermap.org/img/wn/'+ icon3 +'.png';
    document.getElementsByClassName('description')[3].innerHTML = weather3;
    document.getElementsByClassName('temp-upcoming-days')[2].innerText = temp3 + '°C';
    document.getElementsByClassName('humidity')[3].innerText = 'Humidity: '+ humidity3 + '%';
    document.getElementsByClassName('wind')[3].innerText = 'Wind speed: ' + windSpeed3 + 'km/h';

    document.getElementsByClassName('icon')[4].src = 'http://openweathermap.org/img/wn/'+ icon4 +'.png';
    document.getElementsByClassName('description')[4].innerHTML = weather4;
    document.getElementsByClassName('temp-upcoming-days')[3].innerText = temp4 + '°C';
    document.getElementsByClassName('humidity')[4].innerText = 'Humidity: '+ humidity4 + '%';
    document.getElementsByClassName('wind')[4].innerText = 'Wind speed: ' + windSpeed4 + 'km/h';

    document.getElementsByClassName('icon')[5].src = 'http://openweathermap.org/img/wn/'+ icon5 +'.png';
    document.getElementsByClassName('description')[5].innerHTML = weather5;
    document.getElementsByClassName('temp-upcoming-days')[4].innerText = temp5 + '°C';
    document.getElementsByClassName('humidity')[5].innerText = 'Humidity: '+ humidity5 + '%';
    document.getElementsByClassName('wind')[5].innerText = 'Wind speed: ' + windSpeed5 + 'km/h';

    document.getElementsByClassName('icon')[6].src = 'http://openweathermap.org/img/wn/'+ icon6 +'.png';
    document.getElementsByClassName('description')[6].innerHTML = weather6;
    document.getElementsByClassName('temp-upcoming-days')[5].innerText = temp6 + '°C';
    document.getElementsByClassName('humidity')[6].innerText = 'Humidity: '+ humidity6 + '%';
    document.getElementsByClassName('wind')[6].innerText = 'Wind speed: ' + windSpeed6 + 'km/h';

    document.getElementsByClassName('icon')[7].src = 'http://openweathermap.org/img/wn/'+ icon7 +'.png';
    document.getElementsByClassName('description')[7].innerHTML = weather7;
    document.getElementsByClassName('temp-upcoming-days')[6].innerText = temp7 + '°C';
    document.getElementsByClassName('humidity')[7].innerText = 'Humidity: '+ humidity7 + '%';
    document.getElementsByClassName('wind')[7].innerText = 'Wind speed: ' + windSpeed7 + 'km/h';

    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?" + cityName + ",city')"

    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const dt = response.current.dt;
    let day = new Date(dt*1000);
    let currentDay = weekday[day.getDay()];
    let nextday0 = weekday[day.getDay() + 1];
    let nextday1 = weekday[day.getDay() + 2];
    let nextday2 = weekday[day.getDay() + 3];
    let nextday3 = weekday[day.getDay() + 4];
    let nextday4 = weekday[day.getDay() + 5];
    let nextday5 = weekday[day.getDay() + 6];
    let nextday6 = weekday[day.getDay() + 7];

    document.getElementsByClassName('day')[0].innerHTML = currentDay;
    document.getElementsByClassName('day')[1].innerHTML = nextday0;
    document.getElementsByClassName('day')[2].innerHTML = nextday1;
    document.getElementsByClassName('day')[3].innerHTML = nextday2;
    document.getElementsByClassName('day')[4].innerHTML = nextday3;
    document.getElementsByClassName('day')[5].innerHTML = nextday4;
    document.getElementsByClassName('day')[6].innerHTML = nextday5;
    document.getElementsByClassName('day')[7].innerHTML = nextday6;

    const currentWeather = document.getElementsByClassName('description')[0].innerText;
    console.log(currentWeather);
    if (currentWeather == 'Clouds') {
        document.getElementById('clouds').style.visibility = 'visible';
  } else {
    document.getElementById('clouds').style.visibility = 'hidden';
  }
    if (currentWeather == 'Rain') {
        document.getElementById('rain').style.visibility = 'visible';
    } else {
        document.getElementById('rain').style.visibility = 'hidden';
    }
}

const getCityCoordinates = () => {
    let countryInput = document.querySelector('.search-bar-country');
    let cityInput = document.querySelector('.search-bar-city');
    console.log(cityInput.value);
    console.log(countryInput.value);

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value},${countryInput.value}&appid=${API_KEY}`

    fetch(url)
        .then(data => data.json())
        .then(response => {
            const lat = response[0].lat;
            const lon = response[0].lon;
            getWeatherData(lat, lon);
        })
    console.log(url);
}

submitButton.addEventListener('click', getCityCoordinates)

let input = document.getElementsByClassName("search-bar-city")[0];
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementsByClassName("submit")[0].click();
  }
});

window.onload = function(){
    document.getElementsByClassName('submit')[0].click();
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  }