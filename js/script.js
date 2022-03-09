function changeImage() {
    var Image_Id = document.getElementById('Notifikation-Btn');
    var tal = 0;
    if (Image_Id.src.match("./assests/red-circle-emoji.png")) {
        Image_Id.src = "./assests/green-circle-emoji.png";
        var tal = 1;
    }
    else {
        Image_Id.src = "./assests/red-circle-emoji.png";
    }
    console.log(tal)

 $showNum = $('#show-aktiv');
 if (tal === 0) {
   $showNum.html('Inaktiv');
 } else {
   $showNum.html('Aktiv');
 }
 $showNum = $('#show-aktiv2');
 if (tal === 0) {
   $showNum.html('Dine notifikationer er ikke aktive');
 } else {
   $showNum.html('Dine notifikationer er aktive');
 }

}        