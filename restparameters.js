function myFunc(...args) {
    console.log(args);
}
myFunc(1, 2, 3, 4, 5);


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
