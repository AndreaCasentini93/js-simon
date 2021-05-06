// ----------------------VARIABILI-----------------------------
var score = 0;
var maxNumber = 5;
var min = 1;
var max = 100;
var userChoice;
var startingNumbers = [];
var userNumbers = [];
var memorizedNumbers = [];
var messageInParagraph = document.getElementById("message");
var button = document.getElementById("button-box");
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
button.innerHTML = "<button onclick=\"startGame()\">Gioca</button>";

function startGame() {

    button.innerHTML = ""

    startingNumbers = arrayGeneratorWithoutRepetition (startingNumbers, maxNumber, min, max);
    messageInParagraph.innerHTML = "Hai 8 secondi per memorizzare i seguenti numeri<br><span id=\"message-1\">" + startingNumbers + "</span>";

    var memory = setInterval (function() {

        messageInParagraph.innerHTML = "<span id=\"message-2\">Li hai memorizzati?<br>Tra qualche secondo lo scopriremo...</span>";
        clearInterval(memory);

    }, 8000);

    var timer = setInterval (function() {

        while (userNumbers.length < maxNumber) {

            var message = "Inserisci un numero memorizzato in precedenza :";
            do {
                userChoice = parseInt(prompt(message));
                if (isNaN(userChoice)) {
                    message = "L'elemento inserito non è un numero. \nPerfavore, inserisci un numero memorizzato in precedenza :";
                } else if (isInArray(userChoice, userNumbers)) {
                    message = "Hai già selezionato questo numero. \nPerfavore, inserisci un numero differente :";
                }
            } while (isNaN(userChoice) || isInArray(userChoice, userNumbers))

            userNumbers.push(userChoice);

        }
        
        for (var i = 0; i < startingNumbers.length; i++) {

            for (var e = 0; e < userNumbers.length; e++) {
                if (userNumbers[e] == startingNumbers[i]) {
                    memorizedNumbers.push(userNumbers[e]);
                    score++;
                }
            }

        }

        button.innerHTML = "<button onclick=\"reset()\">Reset</button>";
        messageInParagraph.innerHTML = "Numeri di partenza<br><span id=\"message-3\">" + startingNumbers + "</span><br>Numeri che hai memorizzato<br><span id=\"message-3\">" + memorizedNumbers + "</span><br>Il tuo punteggio finale<br><span id=\"message-3\">" + score + "</span>";

        clearInterval(timer);

    }, 38000);

}

function reset() {

    score = 0;
    maxNumber = 5;
    min = 1;
    max = 100;
    userChoice;
    startingNumbers = [];
    userNumbers = [];
    memorizedNumbers = [];
    button.innerHTML = "<button onclick=\"startGame()\">Gioca</button>";
    messageInParagraph.innerHTML = "";
    
}
// /GIOCO