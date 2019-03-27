// defining all possible variables
const words = ["teemo", "ahri", "graves", "annie", "alistar",
"blitzcrank","ezreal", "nocturne", "katarina"];
var wins =0;
var loss =0;
var guesses = 15;
var playerChoice = [];
var letterUsed=[];

var playerChoiceText = document.getElementbyId("playerChoice-text");
var guessesText = document.getElementbyId("guesses-text");
var letterUsedText = document.getElementbyId("letterUsed-text");
var winsText = document.getElementbyId("wins-text");
var lossText = document.geetElementbyId("loss-text");
var gameText = document.getElementbyId("game-text");

// Start of the game
var random = Math.floor(Math.random() * words.length);
var pickingWord = word[random];
var pickingLetters = pickingWord.split("");

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
    }





    }
    }
    }
}

//function (from rps game)runs whenever the user presses a key for reference
document.onkeyup = function (event) {
    var userChoice = event.key;
    console.log("userGuess = ", userGuess);

    if (userGuess === "userChoice") {
        playerChoiceId = document.getElementById("player-choice");
        computerChoiceId = document.getElementById("computer-choice");
        playerChoiceId.textContent = userGuess;

    var computerGuess = 
        words[Math.floor(Math.random() * words.length)];

        computerChoiceId.textContent = computerGuess;
         if (userGuess == computerGuess) {
            wins++;
         }

      //Winning Screen
    winId = document.getElementById("wins");
         losesId = document.getElementById("loses");
         winId.textContent = wins;
         losesId.textContent = loses;
       } else {
         console.log("userGuess = ", userGuess);  
    }
};

</script>

</body>
</html>
