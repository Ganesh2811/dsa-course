//  names function

function abc(){
    console.log("hello wolrd");
}

// Anonymous Function

const greet = function () {
    return "Hi there!";
};
console.log(greet());

// Function Expression

const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

// arrow function

const square = n => n * n;
console.log(square(4));

// Immediately Invoked Function Expression (IIFE)

(function () {
    console.log("This runs immediately!");
})();

// callback function
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));
// double is my callback function and num is my higher order function

// constructor function

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

const user = new Person("Neha", 22);
console.log(user.name);

// higher order function
// A function that either takes another function as a parameter or returns another function
function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    };
}

const doubleFunction = multiplyBy(2);
console.log(doubleFunction(5));
