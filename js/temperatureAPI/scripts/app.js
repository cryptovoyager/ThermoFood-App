var locBtn = document.querySelector(".location");
var dummyText = document.getElementById("dummy");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getApi, denial);
  } else {
    dummyText.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    dummyText.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function denial() {
  alert('deny');
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
      });
  }

  locBtn.addEventListener("click", getLocation);