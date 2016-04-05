document.addEventListener('DOMContentLoaded', function(){

  var bank = 100;

  document.querySelector('#balance').innerHTML = bank;

  var bet = document.getElementById('bet');

  var guess = document.getElementById('guess');

  var submit = document.getElementById('submit');

  submit.addEventListener('click', startGame);

  function random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function bet_amount() {
    var bet = parseInt(document.querySelector('#bet').value);
      if (bet >= 5 && bet <= 10) {
        if (bet > bank) {
          document.querySelector('#message').innerHTML = ("Can't bet more than you have!");
          bet_amount();
        } else{
          bank -= bet;
        };
      return bet;// need this here!!!
      } else {
       document.querySelector('#message').innerHTML = ("place a bet between $5 - $10");
       bet_amount();
      };
  };

  function startGame(e){
    var bet = bet_amount();
    if (bank >= 5){
      var answer = random_number(1,10);
      var guess = parseInt(document.querySelector('#guess').value);
        if (guess === answer){
          document.querySelector('#message').innerHTML = ("You got it!");
          bank += (bet * 2);
          document.querySelector('#result').innerHTML = ("You have " + bank + " in your bank");
          console.log("answer " + answer + "###" + "guess " + guess);
          console.log("Your bank is now " + bank);
        }else if ((guess + 1 === answer)||(guess - 1 === answer)){
          document.querySelector('#message').innerHTML = ("Almost... here's your bet back");
          bank += bet;
          document.querySelector('#result').innerHTML = ("You have " + bank + " in your bank");
          console.log("answer " + answer + "###" + "guess " + guess);
          console.log("Your bank is now " + bank);
        }else{
          bank;
          document.querySelector('#message').innerHTML = ("Sorry you lose!");
          document.querySelector('#result').innerHTML = ("You have " + bank + " in your bank");
          console.log("answer " + answer + "###" + "guess " + guess);
          console.log("Your bank is now " + bank);
        };
    } else{
        document.querySelector('#message').innerHTML = ("insufficient funds! Try again!")
        var restart = document.getElementById('restart');
          restart.addEventListener('click', function(e){
            location.reload();
          });
    };
    document.querySelector('#balance').innerHTML = bank;
  };

});
////////////////////////////////////////////////////////////////

// var bank = 100;

// function bet_amount() {
//   var bet = parseInt(prompt('player1, place a bet between $5 and $10'));
//     if (bet >= 5 && bet <= 10) {
//       if (bet > bank) {
//         alert("Can't bet more than you have!");
//         bet_amount();
//       } else{
//         bank -= bet;
//       };
//     return bet;// need this here!!!
//     } else {
//      alert("place a bet between $5 - $10");
//      bet_amount();
//     };
// };


// function number_guess() {

//   var guess = parseInt(prompt('player1, guess a random number between 1 to 10'));
//     return guess;  

// };

// function random_number(min, max) {

//   return Math.floor(Math.random() * (max - min + 1) + min);

// }

// while(bank > 5) {
//   var bet = bet_amount();
//   var guess = number_guess();
//   var answer = random_number(1,10);
//     if (guess === answer){
//       alert("You got it!");
//       bank += (bet * 2);
//       alert("You have " + bank + " in your bank");
//       console.log("answer " + answer + "###" + "guess " + guess);
//       console.log("Your bank is now " + bank);
//     }else if ((guess + 1 === answer)||(guess - 1 === answer)){
//       alert("Almost... here's your bet back");
//       bank += bet;
//       alert("You have " + bank + " in your bank");
//       console.log("answer " + answer + "###" + "guess " + guess);
//       console.log("Your bank is now " + bank);
//     }else{
//       alert("Sorry you lose!");
//       alert("You have " + bank + " in your bank");
//       console.log("answer " + answer + "###" + "guess " + guess);
//       console.log("Your bank is now " + bank);
//     };
// };