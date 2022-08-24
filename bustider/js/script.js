

                    $.getJSON('https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400601&id2=851973402&id3=851400601&format=json', function(data) {

                    let MyData = `${data}`
                      var navn = `${data.MultiDepartureBoard.Departure[0].line}`
                      var tid = `${data.MultiDepartureBoard.Departure[0].time}`
                      var destination = `${data.MultiDepartureBoard.Departure[0].finalStop}`
                      var HvorErDen = `${data.MultiDepartureBoard.Departure[0].stop}`
console.log(`${data.MultiDepartureBoard}`);
                      for (let index = 0; index < 3; index++) {
                        document.body.innerHTML = '<section class=""><article class=""><h1 class="busnavn">Busnr</h1><h3 class="HvorHolderDen">Navn/hvor holder den</h3><h5 class="busdestination">Destination</h5></article><article class="Card-One-Art-Two"><h1 class="bustid">Tidspunkt</h1></article></section>'
                        
                      }
                                           
                                              
                   
                   
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