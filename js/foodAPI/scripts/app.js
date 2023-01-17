var foodBtn = document.querySelector(".randomFood")


function getFood() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0dfac9f714msh5befe054fe1ee58p1daa65jsn112fdff89b93",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  fetch(
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

foodBtn.addEventListener("click", getFood);