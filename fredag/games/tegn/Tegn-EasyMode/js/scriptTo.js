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
    "der løber",
    "der hopper",
    "der græder",
    "der danser",
    "der griner",
    "der stikker af fra politiet",
    "der hopper",
    "der spiller tennis",
    "der svømmer",
    "der laver stand up",
    "der slår græsset",
    "der tænder lys",
    "",
    "",
    "",
    "",
    "",
    "",

  ]);


  // console.log(alreadyDoneTo)
  let length =  alreadyDoneTo.length

document.getElementById("counter").innerHTML = length;

};

submitTo.onclick = getRandValTo;
getRandValTo()

