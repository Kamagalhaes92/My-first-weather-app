#                                                  Weather App
![output-onlinepngtools (11)](https://github.com/Kamagalhaes92/My-first-weather-app/assets/112024953/23043bc3-2110-48ea-881e-1328f739a072)


## Overview
Explore comprehensive real-time weather updates for more than 200,000 cities worldwide. Switch effortlessly between Celsius and Fahrenheit units to check the current temperature. 
Customize your experience with a choice of over 10 background themes, accompanied by randomly generated quotes. This platform is powered by the OpenWeather API, ensuring accurate and up-to-date weather information.

### Design Explanation
**Color Scheme:**
Adopt a clean and intuitive color scheme to enhance user readability and experience. Utilize neutral tones for backgrounds and contrasting colors for text to ensure visibility and accessibility.

### Responsive Design:
Implement a fully responsive design that adapts to various screen sizes, offering a consistent and user-friendly experience across devices.

### Background Themes:
The app provides users with the option to choose from a variety of background themes, ranging from animated weather conditions (rain, summer, fall, winter, night, sunrise, clouds, sunset) to nature-inspired themes (forest, Christmas, earth). This adds a visually engaging and personalized touch to the weather display.

### Temperature Units Toggle:
Incorporate an easy-to-use toggle mechanism allowing users to switch between Celsius and Fahrenheit units effortlessly. This feature enhances user convenience and accommodates a global audience.

### Randomly Generated Quotes:
Integrate a motivational element by displaying randomly generated quotes. These quotes add a positive touch to the user experience and create a pleasant atmosphere within the app.

## Behind the Curtains: Implementation Details
1. Background Theme Functionality (changeBackground Function)
The changeBackground function dynamically updates the background image of the app based on the current weather conditions. This array-driven approach allows for a variety of visual themes.
2. Current Date and Time Display
The script retrieves and displays the current date, time, and day of the week. This real-time information is presented in a user-friendly format, enhancing the overall utility of the app.
3. Weather Data Retrieval (searchCity Function)
The searchCity function, powered by the OpenWeather API, fetches real-time weather data based on the user's input city. The retrieved data includes temperature, condition description, humidity, wind speed, and an icon representing the current weather.
4. Temperature Unit Conversion
Users can toggle between Celsius and Fahrenheit units using the displayFarenheitTemp and displayCelsiusTemp functions. These functions dynamically update the displayed temperature based on the chosen unit.
5. Geolocation Functionality
The app offers users the option to get real-time weather information for their current location using the getCurrentLocation function. The Geolocation API fetches latitude and longitude, which are then used to query the OpenWeather API.
6. Inspirational Quotes
Inspirational quotes are randomly generated and displayed using the ShowQuotes function. These quotes add a motivational element to the user interface, creating a positive and uplifting experience.
7. Forecast Display
The app provides a 5-day weather forecast for the selected city, with daily maximum and minimum temperatures, day-of-the-week information, and weather icons.
8. Event Listeners
The script includes event listeners for various interactive elements, such as the "Change Theme" button, search form submission, current location button, and temperature unit toggles.
Demo
Check out the Weather App live! [https://karine-weather-app.netlify.app/]

## How to Use:
1.Open the Weather App.
2.Toggle between Celsius and Fahrenheit units.
3.Choose from over 10 background themes.
4.Read randomly generated motivational quotes.
5.Explore real-time weather updates for more than 200,000 cities worldwide.
