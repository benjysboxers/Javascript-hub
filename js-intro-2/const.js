// const = a variable that can't be changed

const PI  = 3.14159;
let radius;
let circumfrence;

document.getElementById("myButton").onclick = function(){

    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius
    console.log("The circumfrence is:", circumfrence);
}