let fredagsbar = document.querySelector('.grid-containerOne')
let singleplayer = document.querySelector('.grid-containerTwo')
let multiplayer = document.querySelector('.grid-containerThree')
let url = "https://s2.googleusercontent.com/s2/favicons?domain_url="
// As with JSON, use the Fetch API & ES6
fetch('fredagbar.txt')
  
  .then(response => response.text())
  .then(data => {
    let array1 = JSON.stringify(data).split("\\n")
    array1.shift(); // removes first element
    array1.pop(); // removes last element
    array1.pop(); // removes last element
    fredagsbar.innerHTML = ""
    for (let index = 0; index < array1.length; index++) {
          let array2 = array1[index].split("-");
  	     fredagsbar.innerHTML += '<div class="grid-item"><a href="' + array2[0] + '"target="_blank" rel="noopener noreferrer"><img class="gridImg" src="./assests/APP.png" alt="App Icon" ></a><figcaption>' + array2[1] + '</figcaption></div>'
    }

  })

  setTimeout(() => {
    fetch('singleplayer.txt')
  
  .then(response => response.text())
  .then(data => {
  	let array1 = JSON.stringify(data).split("\\n")
    array1.shift(); // removes first element
    array1.pop(); // removes last element
    array1.pop(); // removes last element
    singleplayer.innerHTML = ""
    for (let index = 0; index < array1.length; index++) {
          let array2 = array1[index].split("-");

  	     singleplayer.innerHTML += '<div class="grid-item"><a href="' + array2[0] + '"target="_blank" rel="noopener noreferrer"><img class="gridImg" src="./assests/APP.png" alt="App Icon" ></a><figcaption>' + array2[1] + '</figcaption></div>'
    }

  });
  }, 200);
  
setTimeout(() => {
  fetch('multiplayer.txt')
  
  .then(response => response.text())
  .then(data => {
  	let array1 = JSON.stringify(data).split("\\n")
    array1.shift(); // removes first element
    array1.pop(); // removes last element
    array1.pop(); // removes last element
    multiplayer.innerHTML = ""
    for (let index = 0; index < array1.length; index++) {
          let array2 = array1[index].split("-");

  	     multiplayer.innerHTML += '<div class="grid-item"><a href="' + array2[0] + '"target="_blank" rel="noopener noreferrer"><img class="gridImg" src="./assests/APP.png" alt="App Icon" ></a><figcaption>' + array2[1] + '</figcaption></div>'
    }

  });
}, 400);
  