let container = document.querySelector('.grid-container')
let url = "https://s2.googleusercontent.com/s2/favicons?domain_url="
// As with JSON, use the Fetch API & ES6
fetch('spil.txt')
  
  .then(response => response.text())
  .then(data => {
  	let array1 = JSON.stringify(data).split("\\r\\n")
    array1.shift(); // removes first element
    array1.pop(); // removes last element
    for (let index = 0; index < array1.length; index++) {
          let array2 = array1[index].split("-");

  	     container.innerHTML = container.innerHTML + '<div class="grid-item"><a href="' + array2[0] + '"target="_blank" rel="noopener noreferrer"><img class="gridImg" style="height: 100px;" src="' + url + array2[0] + '" alt="App Icon" ></a><figcaption>' + array2[1] + '</figcaption></div>'
    }

  });
//https://s2.googleusercontent.com/s2/favicons?domain_url=https://outlook.live.com

  //<div class="grid-item"><img class="gridImg" src="./assests/APP.png" alt="App Icon" ><figcaption>app navn</figcaption></div>