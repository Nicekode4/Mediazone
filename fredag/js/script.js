

let event = document.querySelector('.socialArtOne')
let dato = document.querySelector('.socialArtTwo')
let favi = "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com"
let array1;
let data1;
let test = "\"Start\\nFredagsbar - 02.09\\nIT Dayz - 11.09\\nNoget - 12.09\\nSlut\""
console.log("dr");
console.log(JSON.stringify(test).split(""));
console.log("dr");
// As with JSON, use the Fetch API & ES6
fetch('events.txt')
  .then(response => response.text())
  .then(data => {
    // console.log();
    array1 = JSON.stringify(data).split("\\n")
    //array1.shift(); // removes first element
    //array1.pop(); // removes last element
    
    console.log(array1);
    
    for (let index = 0; index < array1.length; index++) {
let array2 = array1[index].split("-");
    event.innerHTML = '<p>' + event.innerHTML + array2[0] + '</p>'
    dato.innerHTML = '<p>' + dato.innerHTML + array2[1] + '</p>'
}
  setTimeout(() => {
    

  }, 1000);
    
  });
 