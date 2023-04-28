// A variable is a controller for storing data
// A variable behaves as if it was the value that it contains

// Two Steps:
// 1. Declaration (var,let,const)
// 2. Assignment (assignment operator)


let firstname = "Philip";
let age = 24;
let student = true; //true or false

age = age + 1; //Number data type

console.log("Hello", firstname);
console.log("you are", age, "years old");
console.log("Enrolled",student);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
