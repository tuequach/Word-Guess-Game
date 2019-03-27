// defining all possible variables
const words = ["teemo", "ahri", "graves", "annie", "alistar",
"blitzcrank","ezreal", "nocturne", "katarina"];
const wins =0;
const loss =0;
const guesses = 15;
const playerChoice = [];
const letterUsed=[];

const playerChoiceText = document.getElementbyId("playerChoice-text");
const guessesText = document.getElementbyId("guesses-text");
const letterUsedText = document.getElementbyId("letterUsed-text");
const winsText = document.getElementbyId("wins-text");
const lossText = document.geetElementbyId("loss-text");
const gameText = document.getElementbyId("game-text");

// Start of the game
const random = Math.floor(Math.random() * words.length);
const pickingWord = word[random];
const pickingLetters = pickingWord.split("");

// Replaying or reseting the Game 
const resetGame = () => {
    guesses = 15; 
    letterUsed =[];
    wordPickedLastGame = pickingWord;
    word.splice(random, 1);

    random = Math.floor(Math.random() * words.length);
    pickingWord = word[random];
    pickingLetters = pickingWord.split("");

    word.push(wordPickedLastGame)

    generateplayerChoice(); 
}

//generating playerchoice and by events
const creatingPlayerChoice = () => {
    playerChoice =[];
for (var i =0; i < pickingWord.length; i++) {
    playerChoice.push("__");
}
    return playerChoice;
}

creatingPlayerChoice();

playerChoiceText.textContent = "" + playerChoice.join(" ");
guessesText.textContent = "" +  guesses;
letterUsedText.textContent = "" + letterUsed;
winsText.textContent = "" + wins;
lossText.textContent = "" + loss;

//function runs whenever user presses a key
document.onkeyup = function (event) {
    const userGuess = event.key;
    letterUsed.push(userGuess);

    for (const i=0; i < pickingLetters.length; i++) {
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
 }

// updated screen 
playerChoiceText.textContent = "" + playerChoice.join(" ");
guessesText.textContent = "" +  guesses;
letterUsedText.textContent = "" + letterUsed;
winsText.textContent = "" + wins;
lossText.textContent = "" + loss;
}
