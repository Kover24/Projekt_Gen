var chances = 5;
var numToGuess;
var check = false;
function yourGuess() {

   
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("output");
if (guess==null || guess==""){
    $('body').append('<div class=\'alert alert-danger\' role=\'alert\' style=\'position: fixed; left:50px; top:0;width:100%;\'><strong>Wprowadź liczbę</strong>-Liczba do odgadnięcia</div>');
    setTimeout(function (){
        $( ".alert" ).remove();
    }, 3500);
    }
    else{
    if (check==false){
        checkNumber();
    }else{
    if (chances === 0) {
        $('body').append('<div class=\'alert alert-danger\' role=\'alert\' style=\'position: fixed; left:50px; top:0;width:100%;\'><strong>Przegrałeś</strong></div>');
        setTimeout(function (){
            $( ".alert" ).remove();
        }, 3500);
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
        $('body').append('<div class=\'alert alert-danger\' role=\'alert\' style=\'position: fixed; left:50px; top:0;width:100%;\'><strong>Błąd</strong>-Wygeneruj liczbę</div>');
        setTimeout(function (){
            $( ".alert" ).remove();
        }, 3500);
    }else{check=true;}
}
function clearContent(element) {
    element.value = '';
}
function surrender(){
    if (check==false){
        checkNumber();
    }else{
        $('body').append('<div class=\'alert alert-info\' role=\'alert\' style=\'position: fixed; left:50px; top:0;width:100%;\'><strong>'+numToGuess+'</strong>-Liczba do odgadnięcia</div>');
        setTimeout(function (){
            $( ".alert" ).remove();
        }, 3500);
        }
}
function win(){
    $('body').append('<div class=\'alert alert-info\' role=\'alert\' style=\'position: fixed; left:50px; top:0;width:100%;\'><strong>Gratulacje!</div>');
    setTimeout(function (){
        $( ".alert" ).remove();
    }, 3500);
    newNumber();
}
