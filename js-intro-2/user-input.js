// easy way with a window prompt
/*
let username = window.prompt("whats your name?");
console.log(username);
*/

// DIFFICULT WAY Html textbox

let username;
document.getElementById("myButton").onclick = function(){
   username = document.getElementById("myText").value;
   console.log(username);
   document.getElementById("myLabel").innerHTML = username

   document.getElementById("display").innerHTML = "Hello " + username; 
}