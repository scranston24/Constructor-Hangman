var Word = require("./Word");
var inquirer = require("inquirer");
var letterGuessed;
var wordsToGuess = ["Thor", "Hulk", "Spiderman", "Antman", "Thanos", "Loki", "Avengers"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
var randomWordSplit = randomWordSplit.length;
var myWord = new Word(randomWord);
var maxGuesses = 10;

function Guess() {
  console.log(myWord.toString());
  IF (myWord.guessesMade.length >= maxGuesses) {
    console.log("You are ALL OUT of guesses! Try again next time.");
    return;
  }
  inquirer.prompt([{
    name: "keystroke";
    type: "text",
    message: "Enter a letter",
  }]).then(function(letterInput) {
        var keyPress = letterInput.keystroke;
        myWord.findLetter(keyPress);
          if(myWord.isComplete()) {
            console.log("Correct! It was " + myWord.toString() + "!!!");
            return;
          } else {
            console.log("=================\n");
            console.log("You now have " + (maxGuesses - myWord.guessesMade.length) + " guesses remaining.");
            Guess();
          }
  });
}
Guess();
