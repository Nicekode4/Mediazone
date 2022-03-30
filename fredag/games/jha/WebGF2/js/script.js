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
    "set Tim ryge",
    "vist en opgave længere på airtame end jeg var glad for, fordi tim lige skulle vise en lille ting",
    "siddet ved hjørnebordet",
    "haft fravær",
    "spurt Philip eller Kasper om hjælp før Tim",
    "set Tim ryge",
    "haft en diskussion med Michael",
    "set alle vi går i klasse med på en gang",
    "haft corona",
    "løjet om mit corona resultat for at få fri fra skole",
    "løjet om mit corona resultat for at slippe for noget",
    "stjålet noget fra klassen",
    "zoned out i en af Tims sidespor",
    "faldet i søvn i timen",
    "set Tim tie stille",
    "set Jesper ryge",
    "kysset nogen af samme køn.",
    "spist på en restaurant, hvorefter jeg er gået fra regningen.",  
    "klippet mit eget hår.",
    "kastet op, mens jeg var på studietur.",
    "flirtet med min lærer.",
    "smidt en anden ind i en busk.",
    "snydt til en test.",
    "sovet udenfor, mens jeg var fuld.",
    "gået til det forkerte hus, fordi jeg var fuld.",
    "åbnet en flaske med en anden flaske",
    "fodret nogen med en ske.",
    "sendt nogen en sød morgen-sms.",
    "prøvet at stjæle min partners adgangskoder.",
    "haft en crush på min vens partner.",
    "ved et uheld spist hundemad.",
    "forsøgt at imponere et crush ved at virke klog.",
    "fløjet første klasse.",
    "haft et panikanfald.",
    "blevet fyret.",
    "set en hel tv-serie på en dag.",
    "blevet smidt ud af en pub / klub / bar.",
    "været på en stripklub.",
    "blevet anholdt, fordi jeg var med i en demonstration.",
    "haft moralske tømmermænd til en festival.",
    "været til festival.",
    "tvivlet på om Tim/Jesper var egnet til at være vores lærer.",
    "haft et panik anfald i klassen.",
    "genovervejet mit nuværende valg af uddannelse.",
    "googlet mit eget navn for at undersøge søgeresultaterne.",
    "været i fjernsynet.",
    "kommet fuld eller beruset på arbejde eller i skole.",
    "løget om mit helbred for at pjække fra skolen.",
    "kastet op og ramt en anden person.",
    "kørt en løgn så langt ud at jeg virkelig fortrudte det.",
    "lavet eiffeltårnet.",
    "blendet en kage.",
    "flirtet eller grædt mig ud af en togbøde/fartbøde etc.",
    "kommet til skade i en brandert.",
    "siddet og set Ramasjang-personerne sove, lidt længere end det giver mening.",
    "haft et crush på en vært fra TV avisen.",
    "været forelsket i en tegneseriefigur.",
    "haft et crush på ryan renolds.",
    "FÆLLESKÅL!",
    "været grunden til en ven/veninde fik scoret.",
    "været grunden til en ven/veninde IKKE fik scoret.",
  ]);


  // console.log(alreadyDone)
  let length =  alreadyDone.length

document.getElementById("counter").innerHTML = length;

};

submit.onclick = getRandVal;
getRandVal()