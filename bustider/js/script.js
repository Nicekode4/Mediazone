

                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&format=json', function(data) {

                      var navn = `${data.MultiDepartureBoard.Departure[0].line}`
                      var tid = `${data.MultiDepartureBoard.Departure[0].time}`
                      var destination = `${data.MultiDepartureBoard.Departure[0].finalStop}`
                      var HvorErDen = `${data.MultiDepartureBoard.Departure[0].stop}`
                      var navn2 = `${data.MultiDepartureBoard.Departure[1].line}`
                      var tid2 = `${data.MultiDepartureBoard.Departure[1].time}`
                      var destination2 = `${data.MultiDepartureBoard.Departure[1].finalStop}`
                      var HvorErDen2 = `${data.MultiDepartureBoard.Departure[1].stop}`
                      var navn3 = `${data.MultiDepartureBoard.Departure[2].line}`
                      var tid3 = `${data.MultiDepartureBoard.Departure[2].time}`
                      var destination3 = `${data.MultiDepartureBoard.Departure[2].finalStop}`
                      var HvorErDen3 = `${data.MultiDepartureBoard.Departure[2].stop}`
                                           
                                              
                   
                   
                                               $(".busnavn").html(navn);
                                               $(".bustid").html(tid);
                                               $(".busdestination").html(destination);
                                               $(".HvorHolderDen").html(HvorErDen);
                                               $(".busnavn2").html(navn2);
                                               $(".bustid2").html(tid2);
                                               $(".busdestination2").html(destination2);
                                               $(".HvorHolderDen2").html(HvorErDen2);
                                               $(".busnavn3").html(navn3);
                                               $(".bustid3").html(tid3);
                                               $(".busdestination3").html(destination3);
                                               $(".HvorHolderDen3").html(HvorErDen3);
                   
                   });
