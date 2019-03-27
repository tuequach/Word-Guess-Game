// defining all possible variables
var words = ["teemo", "ahri", "graves", "annie", "alistar",
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


//function runs whenever the user presses a key
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
