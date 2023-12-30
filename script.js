// Array of background images
const backgroundImages = [
  'url("https://i.pinimg.com/originals/9f/72/a4/9f72a4881c7f3791da3dadf12e218efb.gif")', //Rain
  'url("https://i.pinimg.com/originals/44/04/dc/4404dce13bf2de288cdf1295a9f14193.gif")', //Summer
  `url("https://i.pinimg.com/originals/95/d0/6e/95d06ee0ac5a1bbc810ae3994dc85b81.gif")`, //Fall
  `url("https://i.pinimg.com/originals/1e/0e/4a/1e0e4ace6ce26461df6a86ac3578f902.gif")`, //Winter
  `url("https://i.pinimg.com/originals/bb/33/98/bb33987c254c892ba6ab782efbd36c2f.gif")`, //Night
  `url("https://i.pinimg.com/originals/80/6e/5d/806e5dd8757cff9244f4722c6819cabe.gif")`, //Sunrise
  `url("https://i.pinimg.com/originals/d7/e7/81/d7e781b32269a8a82b500c1a9dc97733.gif")`, //clouds
  `url("https://i.pinimg.com/originals/c1/60/bb/c160bb331501d365626751acd3bc58e3.gif")`, //sunset
  `url("https://i.pinimg.com/originals/e6/03/a6/e603a6c8c922af61c5f447919872887a.gif")`, //Christmas
  'url("https://static.wixstatic.com/media/11f74e_8999eb8ba41f489aa787396cb507d05d~mv2_d_1900_1277_s_2.gif/v1/fill/w_1600,h_1075,al_c,q_90/file.jpg")', //summer
];

let currentIndex = 0;

// Function to change the background image
function changeBackground() {
  document.body.style.backgroundImage = backgroundImages[currentIndex];

  // Increment the index or reset to 0 when reaching the end
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Event listener for the "Change Theme" button
document
  .getElementById("changeButton")
  .addEventListener("click", changeBackground);

//// Set the current day of the week. month, date  and year///
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let date = now.getDate();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];
let currentDetails = document.querySelector("#current-details");
let currentTime = document.querySelector("#current-time");
let lastUpdated = document.querySelector("#last-updated");

currentDetails.innerHTML = `${day}, ${month} ${date}, ${year}`;
currentTime.innerHTML = `${hours}:${minutes}`;
lastUpdated.innerHTML = `${hours}:${minutes}`;

//Get input result and show temperature in celsius and fahrenheit.

function searchCity(city) {
  let apiKey = "7bcd4a1befbao09874t9af63362ba8fa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let fahrenheit = (temperature * 9) / 5 + 32;
  let condition = response.data.condition.description;
  let temp = document.querySelector("#current-temp");
  let currentCondition = document.querySelector("#current-condition");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#current-icon");
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");

  getForecast(response.data.city);

  cityElement.innerHTML = response.data.city;
  temp.innerHTML = `${temperature}°C | ${Math.round(fahrenheit)}°F`;
  currentCondition.innerHTML = `${condition}`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" width="60" alt= />`;
}

//create quotes function

function ShowQuotes() {
  let quote = [
    "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
    "There is always light. If only we are brave enough to see it. If only we are brave enough to be it.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose.",
    "I scorched the earth with my talent and I let my light shine.",
    "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
    "All our dreams can come true — if we have the courage to pursue them.",
    "Don't sit down and wait for the opportunities to come. Get up and make them.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
  ];
  let Pick = Math.floor(Math.random() * quote.length);
  let quoteContainer = document.querySelector("#quote-container");
  quoteContainer.innerHTML = `"${quote[Pick]}"`;
}

document.addEventListener("DOMContentLoaded", ShowQuotes());

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "7bcd4a1befbao09874t9af63362ba8fa";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
       <li>
              <div class="day-of-the-week">${formatDay(day.time)}</div>
              <div class="forecast-icons">
                <img
                  src="${day.condition.icon_url}"
                />
              </div>
              <span class="max-temp"> ${Math.round(
                day.temperature.maximum
              )}°C </span>
              <span class="min-temp">  ${Math.round(
                day.temperature.minimum
              )}°C </span>
      </li>

    `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-bar");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Portland");

displayForecast();
