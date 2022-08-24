

<<<<<<< Updated upstream
                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&format=json', function(data) {
=======
                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&id3=851400601&format=json', function(data) {
>>>>>>> Stashed changes

   var text = `${data.MultiDepartureBoard.Departure[0].name}`

                        var text2 = `${data.MultiDepartureBoard.Departure[0].time}`

                            var text3 = `${data.MultiDepartureBoard.Departure[0].time}`


                            $(".busnavn").html(text);
                            $(".bustid").html(text2);

});
