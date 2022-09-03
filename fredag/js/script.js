

let event = document.querySelector('.socialArtOne')
let dato = document.querySelector('.socialArtTwo')
let favi = "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com"
let array1;
let data1;

// As with JSON, use the Fetch API & ES6
fetch('events.txt')
  .then(response => response.text())
  .then(data => {
  	
    let data1 = data
    console.log(JSON.stringify(data1));
    
    
  });
  
  
 // console.log();
  //setTimeout(() => {
   // array1 = JSON.stringify(data).split("\\r\\n")
   // array1.shift(); // removes first element
   // array1.pop(); // removes last element
    
   // console.log(array1);
    
   // for (let index = 0; index < array1.length; index++) {
///let array2 = array1[index].split("-");
   // event.innerHTML = '<p>' + event.innerHTML + array2[0] + '</p>'
   // dato.innerHTML = '<p>' + dato.innerHTML + array2[1] + '</p>'
//}

  //}, 1000);