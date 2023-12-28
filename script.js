document.addEventListener("DOMContentLoaded", function () {
  // Get the button and body elements
  let changeButton = document.querySelector("#changeButton");
  let body = document.querySelector("body");

  // Set the new background image when the button is clicked
  changeButton.addEventListener("click", function () {
    body.style.backgroundImage = 'url("https://i.gifer.com/IrS.gif")';
    // Replace 'new-background.jpg' with the path to your desired image
  });
});

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

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = searchInput.value;

  let apiKey = "7bcd4a1befbao09874t9af63362ba8fa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  let h1 = axios.get(apiUrl).then(displayTemp);
}
let searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("submit", search);

function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let fahrenheit = (temperature * 9) / 5 + 32;
  let condition = response.data.condition.description;
  let temp = document.querySelector("#current-temp");
  let currentCondition = document.querySelector("#current-condition");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#current-icon");

  temp.innerHTML = `${temperature}°C | ${fahrenheit}°F`;
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
