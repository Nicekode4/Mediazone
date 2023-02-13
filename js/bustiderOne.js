
let skema = []
fetch('https://iws.itcn.dk/techcollege/Schedules?departmentCode=smed')
  .then((response) => response.json())
  .then((data) => skema = data);

let skema2 = []
for (let index = 0; index < skema.length; index++) {
    const element = skema[index];
    if (new Date().getMinutes() > 21 && new Date().getMinutes() < 59) {
          if (new Date(element.StartDate).getHours() === new Date().getHours() - 3) {
        skema2.push(element)
    }  
    } else if (new Date().getMinutes() < 20 && new Date().getMinutes() > 00 ) {
        if (new Date(element.StartDate).getHours() === new Date().getHours() - 2) {
            skema2.push(element)
        }  
    }

}
               
                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&format=json', function(data) {
                    console.log(data);
                    if (data.MultiDepartureBoard.error == "No journeys found") {
                        $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&id3=851400601&format=json', function(data) {
                    
                        let text = `${data.MultiDepartureBoard.Departure[0].name} ${skema2.length > 7 ? " | Lille chance for at få en plads" : ""}`
                        let text2 = `${data.MultiDepartureBoard.Departure[0].time}`
                            $(".busnavn").html(text);
                            $(".bustid").html(text2);
                            });
}else{          
    if (typeof data.MultiDepartureBoard.Departure[0].rtTime === 'undefined') {
        let text = `${data.MultiDepartureBoard.Departure[0].name} ${skema2.length > 7 ? " | Lille chance for at få en plads" : ""}`
        let text2 = `${data.MultiDepartureBoard.Departure[0].time}`
        $(".busnavn").html(text);
        $(".bustid").html(text2);
        }else{
            let text = `${data.MultiDepartureBoard.Departure[0].name} ${skema2.length > 7 ? " | Lille chance for at få en plads" : ""}`
            let a = unixConvert(data.MultiDepartureBoard.Departure[index].rtTime)
            let b = unixConvert(data.MultiDepartureBoard.Departure[index].time)
            console.log(b);
            let text2 = `${data.MultiDepartureBoard.Departure[index].time}` + ' + ' + new Date(parseInt(a * 1000-b * 1000)).getSeconds()
            
            $(".busnavn").html(text);
            $(".bustid").html(text2);
        }

                        }
                            
                            

});
console.log(skema);
function unixConvert(time) {
    const dateStr = `1970-01-01 ${time}`;

    const date = new Date(dateStr);
    
    const timestampInMs = date.getTime();
    
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    console.log(unixTimestamp);
    return unixTimestamp
}
