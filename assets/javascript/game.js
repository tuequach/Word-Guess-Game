

// defining all possible variables in global scope
var champions = ["ahri", "annie", "aatrox", "draven", "fiddlesticks", "garen", "jihn", "jinx", "katarina", "rengar", "leona", "oriana", "zyra", "vi"];

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
var guesses = 8;

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
    guesses= 8;

        if (guesses = 8) {
            document.getElementById("poro1").removeAttribute("style");
            document.getElementById("poro2").removeAttribute("style");
            document.getElementById("poro3").removeAttribute("style");
            document.getElementById("poro4").removeAttribute("style");
            document.getElementById("poro5").removeAttribute("style");
            document.getElementById("poro6").removeAttribute("style");
            document.getElementById("poroking").removeAttribute("style");
            document.getElementById("poroking2").removeAttribute("style");
        }
    
    for (i=0; i <numbers; i++) {
        playerChoice.push("_");
            console.log(playerChoice);
    }

    //changing html elements to display current information
    document.getElementById("word").innerHTML = playerChoice.join(" ");
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses: " + " " + guesses;
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
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses: " + " " + guesses;
    document.getElementById("lettersPicked").innerHTML = "Letters Guessed:" + " " + incorrectLetters.join(" ");


    //checking if user won & lost
    //won
    if (currentLetters.toString() == playerChoice.toString()) {
        wins++; 
        alert("Yay! you've picked the right champion! '" + currentWord + "' correctly. You've won the Rift, Play Again?");
        

        document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

        newGame();
        document.getElementById("lettersPicked").innerHTML = "Letters Guessed: " + " " + " " ;

    //lost
    } else if (guesses == 0) { 
        losses++;
        alert(" The minions have killed all your poros and attack your base. The correct champion was '" + currentWord + "'. Try Again?");
    
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

    if (guesses <= 8) {
        document.getElementById("poro1").style.transform = "rotate (180eg)";
        document.getElementById("poro1").style.opacity = "0.15";
    }

    if (guesses <= 7) {
        document.getElementById("poro2").style.transform = "rotate (180eg)";
        document.getElementById("poro2").style.opacity = "0.15";
    }

    if (guesses <= 6) {
        document.getElementById("poro3").style.transform = "rotate (180eg)";
        document.getElementById("poro3").style.opacity = "0.15";
    }

    if (guesses <= 5) {
        document.getElementById("poro4").style.transform = "rotate (180eg)";
        document.getElementById("poro4").style.opacity = "0.15";
    }
    if (guesses <= 4) {
        document.getElementById("poro5").style.transform = "rotate (180eg)";
        document.getElementById("poro5").style.opacity = "0.15";
    }
    if (guesses <= 3) {
        document.getElementById("poro6").style.transform = "rotate (180eg)";
        document.getElementById("poro6").style.opacity = "0.15";
    }
    if (guesses <= 2) {
        document.getElementById("poroking").style.transform = "rotate (180eg)";
        document.getElementById("poroking").style.opacity = "0.15";
    }
    if (guesses <= 1) {
        document.getElementById("poroking2").style.transform = "rotate (180eg)";
        document.getElementById("poroking2").style.opacity = "0.15";
    }
}