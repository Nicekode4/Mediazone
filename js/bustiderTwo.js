

                    
                   for (let index = 0; index < 10; index++) {
                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&id3=851400601&format=json', function(data) {
                        
                   if (typeof data.MultiDepartureBoard.Departure[index].rtTime === 'undefined') {
                        let navn = `${data.MultiDepartureBoard.Departure[index].line}`
                        let tid = `${data.MultiDepartureBoard.Departure[index].time}`
                        let destination = `${data.MultiDepartureBoard.Departure[index].finalStop}`
                        let HvorErDen = `${data.MultiDepartureBoard.Departure[index].stop}`
                        $(".busnavn").html(navn);
                        $(".bustid").html(tid);
                        $(".busdestination").html(destination);
                        $(".HvorHolderDen").html(HvorErDen);
                        document.body.innerHTML = document.body.innerHTML + '<section class="Card-One"><article class="Card-One-Art-One"><h1>' + `${navn}` + '</h1><h3>' + `${HvorErDen}` + '</h3><h5>' + `${destination}` + '</h5></article><article class="Card-One-Art-Two"><h1>' + `${tid}` + '</h1></article></section>'
    
                    }else{
                        let a = `${data.MultiDepartureBoard.Departure[index].rtTime}`.replace(':', '')
                        let b = `${data.MultiDepartureBoard.Departure[index].time}`.replace(':', '')
                        let tid = `${data.MultiDepartureBoard.Departure[index].time}` + ' + ' + new Date(parseInt(a * 1000-b * 1000)).getSeconds()
                        let navn = `${data.MultiDepartureBoard.Departure[index].line}`
                        let destination = `${data.MultiDepartureBoard.Departure[index].finalStop}`
                        let HvorErDen = `${data.MultiDepartureBoard.Departure[index].stop}`
                        $(".busnavn").html(navn);
                        $(".bustid").html(tid);
                        $(".busdestination").html(destination);
                        $(".HvorHolderDen").html(HvorErDen);
                        document.body.innerHTML = document.body.innerHTML + '<section class="Card-One"><article class="Card-One-Art-One"><h1>' + `${navn}` + '</h1><h3>' + `${HvorErDen}` + '</h3><h5>' + `${destination}` + '</h5></article><article class="Card-One-Art-Two"><h1>' + `${tid}` + '</h1></article></section>'

                    }
                   });
                                       
                  }