

                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&format=json', function(data) {
                    console.log(data);
                    if (data.MultiDepartureBoard.error == "No journeys found") {
                        $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&id3=851400601&format=json', function(data) {
                    
                        let text = `${data.MultiDepartureBoard.Departure[0].name}`
                        let text2 = `${data.MultiDepartureBoard.Departure[0].time}`
                            $(".busnavn").html(text);
                            $(".bustid").html(text2);
                            });
}else{
                        let text = `${data.MultiDepartureBoard.Departure[0].name}`
                        let text2 = `${data.MultiDepartureBoard.Departure[0].time}`
                        $(".busnavn").html(text);
                        $(".bustid").html(text2);
                        }
                            
                            

});
