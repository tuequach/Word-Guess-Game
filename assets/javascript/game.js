

// defining all possible variables in global scope
var champions = ["ahri", "annie", "aatrox", "azir", "blitzcrank", "draven", "fiddlesticks", "garen", "jihn", "jinx"];

//store current word to be guessed as a string and another variable for actual letters 
var currentWord = "";
var currentLetters =[];

//variables that hold the _ space 
var numbers = 0;

//store answer of the answers for users' guesses
var playerChoice = [];
//wrong guesses and display to user those that already guessed
var incorrectLetters=[];

// stats for the game
var wins =0;
var losses =0;
var guesses = 15;

//newGame function that allows randomize of the champions array
function newGame() {
    currentWord = champions[Math.floor(Math.random() * champions.length)];
        console.log(currentWord);

    currentLetters = currentWord.split("");
        console.log(currentLetters);

    numbers = currentLetters.length;
        console.log(numbers);

    //stats for game in the beginning
    incorrectLetters=[];
    playerChoice=[];
    guesses= 15;

        if (guesses = 15) {
            document.getElementById("ahri").removeAttribute("style");
            document.getElementById("annie").removeAttribute("style");
            document.getElementById("aatrox").removeAttribute("style");
            document.getElementById("azir").removeAttribute("style");
            document.getElementById("blitzcrank").removeAttribute("style");
            document.getElementById("draven").removeAttribute("style");
            document.getElementById("fiddlesticks").removeAttribute("style");
            document.getElementById("garen").removeAttribute("style");
            document.getElementById("jihn").removeAttribute("style");
            document.getElementById("jinx").removeAttribute("style");

        }
    
    for (i=0; i <numbers; i++) {
        playerChoice.push("_");
            console.log(playerChoice);
    }

    //changing html elements to display current information
    document.getElementById("word").innerHTML = playerChoice.join(" ");
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses left: " + " " + guesses;
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + " " + losses;
}
 
function computing(letters) {
    //making sure keyboard input is letters only
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    var correctLetters = false;

//check if the letter is one of the letters in the words
    for (var i=0; i< numbers; i++) {
        if(currentWord[i] == letters) {
            correctLetters = true;
        }
    }

//checking where the guess letter is om the word, 
    if (correctLetters) {
        for (var i=0; i< numbers; i++){
            if (currentWord[i] == letters) {
                playerChoice[i] = letters;
            }
        }
    }

// if letter isn't part of the word
    else {
        incorrectLetters.push(letters);
        guesses--
    }
    console.log(playerChoice);

} 
else {
    alert ("Please pick a letter from the Alphabet (A-Z)");
    }
}

function completeGame() {
    //updating the html game stats
    document.getElementById("word").innerHTML = playerChoice.join(" ");
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses left: " + " " + guesses;
    document.getElementById("lettersPicked").innerHTML = "Letters Guessed:" + " " + incorrectLetters.join(" ");


    //checking if user won & lost
    //won
    if (currentLetters.toString() == playerChoice.toString()) {
        wins++; 
        alert("Yay! you've picked the right champion! '" + currentWord + "' correctly. You've won the Rift, play again?");
        

        document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

        newGame();
        document.getElementById("lettersPicked").innerHTML = "Letters Guessed: " + " " + " " ;

    //lost
    } else if (guesses == 0) { 
        losses++;
        alert("You've ran out of guesses and the minions attack your base. The correct champions was '" + currentWord + "'. Try Again?");
    
        //update stats in html

        document.getElementById('losses').innerHTML = "Losses: " + " " + losses;

        //reseting game
        newGame();
        document.getElementById("lettersPicked").innerHTML = "Letters Guessed:" + " " + " ";
    }
}

//where the game begins

    newGame();

//function runs when user presses key
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

    //checking letters function
    computing(userGuess);
    completeGame();

    if (guesses <= 14) {
        document.getElementById("ahri").style.transform = "rotate (180eg)";
        document.getElementById("ahri").style.opacity = "0.15";
        }

    }