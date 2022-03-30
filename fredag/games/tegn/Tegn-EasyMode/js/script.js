var alreadyDone = [];
const randomValueFromArray = (myArray) => {
  if (alreadyDone.length === 0) {
    for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
  }
  var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
  var indexOfItemInMyArray = alreadyDone[randomValueIndex];

  alreadyDone.splice(randomValueIndex, 1);

  return myArray[indexOfItemInMyArray];
};

const getRandVal = () => {
  document.getElementById("randomValue").innerHTML = randomValueFromArray([
    "En hund",
    "En flodhest",
    "En giraf",
    "En drengerøv",
    "En reality deltager",
    "En sanger",
    "Mig og drengene",
    "En gamer",
    "En mand",
    "En kvinde",
    "Duolingo uglen",
    "En robot",
    "En løve",
    "En havfrue",
    "En fugl",
    ]);


  // console.log(alreadyDone)
  let length =  alreadyDone.length

document.getElementById("counter").innerHTML = length;

};

submit.onclick = getRandVal;
getRandVal()