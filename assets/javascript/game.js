// defining all possible variables
var words = ["teemo", "ahri", "graves", "annie", "alistar",
"blitzcrank","ezreal", "nocturne", "katarina"];
var wins =0;
var loss =0;
var guesses = 15;
var playerChoice = [];
var letterUsed=[];

var playerChoiceText = document.getElementById("playerChoice-text");
var guessesText = document.getElementById("guesses-text");
var letterUsedText = document.getElementById("letterUsed-text");
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");
var gameText = document.getElementById("game-text");

// Start of the game and choosing random words
var random = Math.floor(Math.random() * words.length);
var pickingWord = words[random];
var pickingLetters = pickingWord.split("");

// Replaying or reseting the Game 
var resetGame = () => {
    guesses = 15; 
    letterUsed =[];
    wordPickedLastGame = pickingWord;
    word.splice(random, 1);

    random = Math.floor(Math.random() * words.length);
    pickingWord = word[random];
    pickingLetters = pickingWord.split("");

    words.push(wordPickedLastGame)

    generateplayerChoice(); 
}

//generating playerchoice and by events
var creatingplayerChoice = function () {
    playerChoice =[];
for (var i =0; i < pickingWord.length; i++) {
    playerChoice.push("_");
}
    return playerChoice;
}

creatingplayerChoice();

playerChoiceText.textContent = "" + playerChoice.join(" ");
guessesText.textContent = "" +  guesses;
letterUsedText.textContent = "" + letterUsed;
winsText.textContent = "" + wins;
lossText.textContent = "" + loss;

//function runs whenever user presses a key
document.onkeyup = function (event) {
    var userGuess = event.key;
    letterUsed.push(userGuess);

    for (var i=0; i < pickingLetters.length; i++) {
        if (pickingLetters[i] == userGuess.toString()) {
            playerChoice[i] = userGuess;
        }
    }
    if (pickingWord == playerChoice.join("")) {
        gameText.textContent = "You've Won Summoner Rift by Guessing the Correct Champion.";
        wins++; resetGame();
    } else if (guesses == 0) {
        gameText.textContent = "Defeated by Minions, You've Lost This Round.";
        resetGame();
    } else {
        guesses--;
    }
 

// updated screen 
playerChoiceText.textContent = "" + playerChoice.join(" ");
guessesText.textContent = "" +  guesses;
letterUsedText.textContent = "" + letterUsed;
winsText.textContent = "" + wins;
lossText.textContent = "" + loss;
}