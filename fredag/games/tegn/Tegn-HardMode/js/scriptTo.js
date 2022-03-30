var alreadyDoneTo = [];
const randomValueFromArrayTo = (myArray) => {
  if (alreadyDoneTo.length === 0) {
    for (var i = 0; i < myArray.length; i++) alreadyDoneTo.push(i);
  }
  var randomValueIndexTo = Math.floor(Math.random() * alreadyDoneTo.length);
  var indexOfItemInMyArrayTo = alreadyDoneTo[randomValueIndexTo];

  alreadyDoneTo.splice(randomValueIndexTo, 1);

  return myArray[indexOfItemInMyArrayTo];
};

const getRandValTo = () => {
  document.getElementById("randomValueTo").innerHTML = randomValueFromArrayTo([
    "der slår sin kæreste i hovedet med en burito",
    "der gemmer penge i skattely",
    "der spiser maccen",
    "der er gået kold i busken",
    "der har glemt sin duolingo lektion....",
    "med tømmermænd",
    "med noget skrevet med sprit tusch i panden",

  ]);


  // console.log(alreadyDoneTo)
  let length =  alreadyDoneTo.length

document.getElementById("counter").innerHTML = length;

};

submitTo.onclick = getRandValTo;
getRandValTo()

