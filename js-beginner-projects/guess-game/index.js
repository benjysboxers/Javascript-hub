//intialize variables
let number; 
let guess;
let message;

document.getElementById("checkGuess").onclick = function() { //onclick function 
  number = Math.floor(Math.random() * 50) + 1;
  guess = document.getElementById("guess").value;
  message = document.getElementById("message");
  if (guess === number) {
    message.innerHTML = "Congrats!"; //changine innerHTML tag
  } else if (guess < number) {
    message.innerHTML = "low guess, try again!";
  } else {
    message.innerHTML = "high guess, try again!";
  }
};
