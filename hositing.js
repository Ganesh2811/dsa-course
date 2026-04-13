// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

hello();
function hello(){
    console.log("hello !!")
}

console.log(a);
var a = 10;

// console.log(b);
// let b = 10;

hello();
const hello = function(){
    console.log("hello !!")
}

// Hoisting with Classes

// Classes are hoisted, but they cannot be accessed before they are declared, resulting in a ReferenceError.