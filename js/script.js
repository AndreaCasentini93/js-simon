// ----------------------VARIABILI-----------------------------
var score = 0;
var userChoice;
var startingNumbers = [];
var userNumbers = [];
var memorizedNumbers = [];

// ----------------------/VARIABILI----------------------------

//-----------------------FUNZIONI------------------------------
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray (element, array) {

    for (i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
    return false;

}

function arrayGeneratorWithoutRepetition (array, elementsNumber, min, max) {

    while (array.length < elementsNumber) {
        var element = (randomNumber(min, max))

        if (!isInArray(element, array)) {
            array.push(element);
        }

    }
    return array;

}

//-----------------------/FUNZIONI-----------------------------

// GIOCO
startingNumbers = arrayGeneratorWithoutRepetition (startingNumbers, 5, 1, 100);
alert("Stores the following numbers :\n" + startingNumbers);

var timer = setInterval (function() {

    while (userNumbers.length < 5) {

        var message = "Write down the numbers you have memorized :";
        do {
            userChoice = parseInt(prompt(message));
            if (isNaN(userChoice)) {
                message = "The element entered is not a number. \nWrite down the numbers you have memorized :";
            } else if (isInArray(userChoice, userNumbers)) {
                message = "You have already entered this number. \nWrite down the numbers you have memorized :";
            }
        } while (isNaN(userChoice) || isInArray(userChoice, userNumbers))

        userNumbers.push(userChoice);

    }

    console.log("Starting Numbers", startingNumbers);
    console.log("User Numbers", userNumbers);
    
    for (var i = 0; i < startingNumbers.length; i++) {

        for (var e = 0; e < userNumbers.length; e++) {
            if (userNumbers[e] == startingNumbers[i]) {
                memorizedNumbers.push(userNumbers[e]);
                score++;
            }
        }

    }

    console.log("Score", score);
    console.log("Memorized Numbers", memorizedNumbers);

    clearInterval(timer);

}, 5000);
// /GIOCO