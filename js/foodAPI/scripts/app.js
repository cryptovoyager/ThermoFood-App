var foodBtn = document.querySelector(".randomFood");

var myArr = []

function getFood() {
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
    //`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=${tag}`,
    "https://tasty.p.rapidapi.com/tags/list",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var index = Math.floor(Math.random() * data.results.length);
      console.log(data.results[index].name);
      for (x of data.results) {
        console.log(x.name)
        myArr.push(x.name)
      }
      console.log(myArr)
    });


}

foodBtn.addEventListener("click", getFood);
