import Data from "./config.js";
import { addNewElement, addHeadingElement,addSpanElement } from "./functions.js";
const searchBar = document.querySelector('#searchBar');
const container = document.querySelector(".container");
const cityNameContainer = document.querySelector('.city-name');

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Event will start on a keyup action
searchBar.addEventListener('keyup', (event) => {

    // checking the action for specific key (Enter)
    if(event.key === "Enter") {
        // Store target in variable
        const thisCity = event.currentTarget.value.toLowerCase();
        const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/?q=" + thisCity + "&appid=" + Data.key;
        event.currentTarget.value = '';
        // Fetching first api to get the City coordinates
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const lon = data.city.coord.lon;
                const lat = data.city.coord.lat;

                cityNameContainer.innerHTML = data.city.name;

                // Fetching final data according to the coordinates
                fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=" + Data.key)
                    .then(response => response.json())
                    .then(result => {
                        console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.')

                        // Removing all child elements from Container before creating new set of elements
                        while (container.firstChild) {
                            container.removeChild(container.firstChild);
                        };

                        // Looping through 5 days of weather data
                        for(let i = 0; i < 5; i++) {

                            // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
                            const date = new Date();
                            let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
                            const data = result.daily[i];

                            // Create the elements with Data
                            const card = addNewElement ('card', 'div','card',container)

                            const imageBox = addNewElement ('imageBox', 'div','imgBx',card)

                            const cardImg = document.createElement('img');
                            cardImg.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                            imageBox.appendChild(cardImg);

                            const contentBox = addNewElement ('contentBox', 'div','contentBx',card)

                            const cardHeader = addHeadingElement ('cardHeader', 'h2',dayOfTheWeek,contentBox)

                            const tempDescription = addHeadingElement ('tempDescription', 'h4',data.weather[0].description,contentBox)

                            const currentTempBox = addNewElement ('currentTempBox', 'div','color',contentBox)

                            const currentTempHeader = addHeadingElement ('currentTempHeader', 'h3',"Temp:",currentTempBox)

                            const currentTemp = addSpanElement('currentTemp','span','current-temp',data.temp.day,currentTempBox)

                            const minMaxTemperatures = addNewElement ('minMaxTemperatures', 'div','details',contentBox)

                            const minMaxTempHeader = addHeadingElement ('minMaxTempHeader', 'h3',"More:",minMaxTemperatures)

                            const minTemp =  addSpanElement('minTemp','span','min-temp',data.temp.min,minMaxTemperatures)

                            const maxTemp = addSpanElement('maxTemp','span','max-temp',data.temp.max,minMaxTemperatures)

                        };
                    });
            })
            .catch((error) => {
                // If there are errors, send out an error message
                console.error('Error:', "not a place!");
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                };
                return alert("Are you sure you aren't holding your map upside down?");
            });
    };
});
