//Wordbank 
var dinoNames = ["tyrannosaurus", "triceratops","stegosaurus","velociraptor","diplodocus","brontosaurus","pterodactyl"];

//Change Word Selection 
var selectedWord = "";

var rigthGuesses = [];
var wrongGuesses = [];

//Counter
var winsCounter = 0;
var losesCounter = 1;
var lettersLeft = 15;

//Start Game (Reset)
function startGame() {
   
    wrongGuesses = [];
    lettersLeft = 15;
    rigthGuesses = [];

    selectedWord = dinoNames[Math.floor(Math.random() * dinoNames.length)];
    splitWord = selectedWord.split("");
    blanks = selectedWord.length;

for (var i = 0; i < blanks; i++) {
    rigthGuesses.push("_");
}
   
    document.getElementById('blankWord').innerHTML = rigthGuesses.join(" ");
    document.getElementById('letters-left').innerHTML = lettersLeft;
}

//Compare Letters & Decrease if Wrong 
function checkLetters(letter) {

var letterPresent = false;

for (var i = 0; i < blanks; i++) {
    if (selectedWord[i] === letter) {
        letterPresent = true;
    }
}

if (letterPresent) {
    for (i = 0; i < blanks; i++) {
    if (selectedWord[i] === letter) {
        rigthGuesses[i] = letter;
    }

}}
    
else {
    lettersLeft--;
    wrongGuesses.push(letter)
}}

//Update HTML
function roundComplete() {

    document.getElementById('blankWord').innerHTML = rigthGuesses.join(" ");
    document.getElementById('letters-left').innerHTML = lettersLeft;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

//Alert to User (win or lose) + Start New Game 
if (splitWord.join(" ") === rigthGuesses.join(" ")) {
    winsCounter++;
    alert("You Win!!");
    document.getElementById('wins').innerHTML = winsCounter;
    startGame();
} 

else if (lettersLeft === 0) {
    document.getElementById('losses').innerHTML = losesCounter++;
    document.getElementById('wrong-guesses').innerHTML = "";
    alert("You Lose!!");
    startGame();
}}

//Check Letters 
startGame();
document.onkeyup = function(event) {

var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    roundComplete();
}
