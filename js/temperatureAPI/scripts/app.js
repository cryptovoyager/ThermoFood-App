var locBtn = document.querySelector(".location");
var dummyText = document.getElementById("dummy");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getApi);
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



function getApi(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude, longitude);
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=ced0c7e554edfa8657f735584031d9f2`;

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  locBtn.addEventListener("click", getLocation);