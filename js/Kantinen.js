//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Du har weekend <3';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Frikadeller med kartofler og rødkål - kr. 28,00';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Kyllingelår med sennep/honning og rodfrugter - kr. 28,00';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Karbonader med grønærter og kartofler - kr. 28,00';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Æggekage ”spansk inspireret” - kr. 28,00';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Pasta kødsauce med ost og jalapenos';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Du har weekend <3';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;