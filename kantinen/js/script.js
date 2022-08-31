                    let date = new Date();
let dayOfWeekNumber = date.getDay();
currentdate = new Date();
let menu = JSON.parse(window.localStorage.getItem('canteen'))
let dayOfWeek;

                    
                   for (let index = 0; index < 6; index++) {
                    let array = menu.Days[index].Dish.split('-');
                    const str = menu.Days[index].DayName;
                    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
                    console.log(str2);
                    document.body.innerHTML = document.body.innerHTML + '<section class="Card-One"><article class="Card-One-Art-One"><h1>' + `${str2}` + '</h1><h3>' + `${array[0]}` + '</h3><h5>' + `${array[1]}` + '</h5></article><article class="Card-One-Art-Two"></article></section>'
                    
                  }
