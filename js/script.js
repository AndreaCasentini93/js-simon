/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// ----------------------VARIABILI-----------------------------
var numbersArray = [];

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
numbersArray = arrayGeneratorWithoutRepetition (numbersArray, 5, 1, 100)

alert("Stores the following numbers :\n" +numbersArray);


// /GIOCO