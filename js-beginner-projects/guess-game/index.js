let number;
let numberguess;
let message;

document.getElementById("checkGuess").onclick = function () {
  number = Math.floor(Math.random() * 50) + 1;
  numberguess = document.getElementById("numberguess").value;
  message = document.getElementById("message");
  if (numberguess === number) {
    message.innerHTML = "Correct!";
  } else if (numberguess < number) {
    message.innerHTML = "Number too low! Try again";
  } else {
    message.innerHTML = "Number too high! Try again";
  }
};
