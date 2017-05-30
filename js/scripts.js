var chances = 5;
var numToGuess;
var check = false;
function yourGuess() {

   
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("output");
if (guess==null || guess==""){
     alert('Wprowadź liczbę!');
    }
    else{
    if (check==false){
        checkNumber();
    }else{
    if (chances === 0) {
        alert('Przegrałeś!');
    } else {
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "Odgadłeś liczbę! ("+guess+")";
        win();
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "Twoja liczba jest za wysoka!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "Twoja liczba jest za niska!("+guess+")";
    }
        chances--;
  }
 }
 }
}
function newNumber(){
    numToGuess = Math.floor(Math.random()*100);
    chances = 5;
    clearContent(output);
    check = true;
}
function checkNumber() {
    if (numToGuess==null) {
        alert('Najpierw musisz wygenerować liczbę!');
    }else{check=true;}
}
function clearContent(element) {
    element.value = '';
}
function surrender(){
    if (check==false){
        checkNumber();
    }else{
    alert('Liczbą do odgadnięcia było '+numToGuess);
        }
}
function win(){
    alert('Gratulacje!');
    newNumber();
}
