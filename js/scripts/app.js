var locBtn = document.querySelector(".location");
var dummyText = document.getElementById("dummy");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getApi, denial);
  } else {
    dummyText.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function denial() {
  alert("deny");
}

function getApi(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log(latitude, longitude);
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.city.name);
      console.log(data.list[0].main.temp);
      var temperature = parseFloat(data.list[0].main.temp);
      var city = (data.city.name);

      getFood(temperature, city);
    });
}

function getFood(temperature, city) {
  var dishesIndex = Math.floor(Math.random() * coolDays.length);
  var tag = coolDays[dishesIndex];
  console.log(tag);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0dfac9f714msh5befe054fe1ee58p1daa65jsn112fdff89b93",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  fetch(
    `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${tag}`,
    //"https://tasty.p.rapidapi.com/tags/list",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var index = Math.floor(Math.random() * data.results.length);
      console.log(data.results[index]);
      dummyText.innerHTML = `<b>City: </b> ${city}<br>
      <b>Temperature: </b> ${temperature} C°<br>
      <b>Suggested Dish: </b> ${data.results[index].name}<br>
      <b>Dish Description: </b> ${data.results[index].description}<br>
      <img src=${data.results[index].thumbnail_url} width=200px height=200px>`;
    });
}

locBtn.addEventListener("click", getLocation);
