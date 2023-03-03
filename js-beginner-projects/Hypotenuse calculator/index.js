// solution 1
let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value
    console.log(a);

    b = document.getElementById("bTextBox").value
    console.log(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "The Hpotenuse is: " + c
   
}