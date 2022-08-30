
let date = new Date();
let dayOfWeekNumber = date.getDay();
if (window.localStorage.getItem('isCached') === null) {
    window.localStorage.setItem('isCached', true)
    $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
        window.localStorage.setItem('canteen', JSON.stringify(data))
        })
}
let isCached = window.localStorage.getItem('isCached')

let menu = JSON.parse(window.localStorage.getItem('canteen'))

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        document.querySelector('#dish').innerHTML = 'Du har weekend <3';
        break;
    case 1:
        nameOfDay = 'Monday';
        if (isCached == false) {
            $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
            window.localStorage.setItem('canteen', JSON.stringify(data))
            window.localStorage.setItem('isCached', true)
            })
        }else{
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
        }
        break;
    case 2:
        nameOfDay = 'Tuesday';
        if (isCached == false) {
            $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
            window.localStorage.setItem('canteen', JSON.stringify(data))
            window.localStorage.setItem('isCached', true)
            })
        }else{
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
        }
        break;
    case 3:
        nameOfDay = 'Wednesday';
        if (isCached == false) {
            $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
            window.localStorage.setItem('canteen', JSON.stringify(data))
            window.localStorage.setItem('isCached', true)
            })
        }else{
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
        }
        break;
    case 4:
        nameOfDay = 'Thursday';
        if (isCached == false) {
            $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
            window.localStorage.setItem('canteen', JSON.stringify(data))
            window.localStorage.setItem('isCached', true)
            })
        }else{
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
        }
        break;
    case 5:
        nameOfDay = 'Friday';
        if (isCached == false) {
            $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
            window.localStorage.setItem('canteen', JSON.stringify(data))
            window.localStorage.setItem('isCached', true)
            })
        }else{
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
        }
        break;
    case 6:
        nameOfDay = 'Saturday';
        document.querySelector('#dish').innerHTML = 'Du har weekend <3';
        window.localStorage.setItem('isCached', false)
        break;

}




 