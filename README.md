## Table of contents

* [Introduction](#thermofood-app)
* [User Story](#user-story)
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [Apis](#apis)
* [Future Features](#future-features)
* <a href="https://cryptovoyager.github.io/ThermoFood-App/">Deployment</a>
* [Credits](#credits)

# ThermoFood-App
This project focuses on helping people control their weight by selecting healthy recipes that are appropriate for the current weather. Using two APIs, one for recipes and the other for obtaining the current temperature using geolocation, the application provides options for light and fresh meals on hot days and options for more caloric meals on cold days.

# Requirements
* 🔑 Valid API key for OpenWeatherApp (developer)
* 🔑 Valid API key for Tasty (developer)
* 🌐 Web browser that supports HTML, CSS, and JavaScript 
* 📶 Internet connection

# User Story
As a user, I want to find recipes based on my location and temperature to simplify meal planning.

# Getting Started

As a developer, you can use this app by following these steps:

* Clone or download the repository to your local machine.
* Open the index.html file in a web browser.
* Make sure that you have an API key for the OpenWeatherMap and Tasty API. If you don't have one, you can sign up for a free account on their website.
* Replace the placeholder text in the apiKey.js file with your own API key.
* Make sure you have the dependencies installed, such as Tailwind CSS and FontAwesome.
* In the app.js file, you can customize the dishes list based on temperature, and the tags you want to use to search the recipes from the Tasty API.
* Run the application by opening the index.html file in your web browser.
* Allow the browser to access your location and you will see a recipe based on your location and temperature.
* You can test the app by changing your location or temperature values on the browser's developer tools, to check how it handles different temperatures and locations.
* You can also modify the layout and styles of the app by editing the CSS file and HTML accordingly.

* Note that if you're testing on a local server, the browser may block the Geolocation API, to solve this you can run the app on a web server or disable the security for the browser when testing.

# APIs

* The code calls the getLocation() function, which uses the browser's Geolocation API to get the user's current location (latitude and longitude).
* The getLocation() function then makes a request to the OpenWeatherMap API using the user's latitude and longitude to get the current temperature at their location.
* The temperature is then passed to the getFood() function, which uses the temperature to determine the type of dish to be recommended (e.g. warm, cool, hot)
* getFood() function makes a request to the Tasty API using the temperature and get a list of recipes based on the temperature.
* A random recipe is selected from the list of recipes and its ingredients and instructions are displayed on the webpage.
* The e code uses the data from the Tasty API to update the webpage with the recipe information.

# Future Features

* The ability for the user to manually input their location instead of using the Geolocation API. This could be useful in cases where the user does not want to share their location or if the Geolocation API is not available.

* The ability to filter recipes based on dietary restrictions or allergies. This could be done by adding checkboxes or dropdown menus on the webpage that allow the user to select their dietary restrictions, and then passing that information to the Tasty API when making the request for recipes.


# Deployed Links

* Github Pages Deployment (https://cryptovoyager.github.io/ThermoFood-App/)

# Credits
* OpenWeatherMap API: The code uses this API to get the current temperature at the user's location. (https://openweathermap.org/) 
* Tasty API: The code uses this API to get the list of recipes based on the temperature. (https://rapidapi.com/tasty/api/tasty) 
* Geolocation API (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* TailwindCSS: The structure and stylings are made using Tailwind. 
* Tailwind Components: The structure use a layout from (https://tailwindui.com/components)
