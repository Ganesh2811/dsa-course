// acc depends on initial value paramters
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum);

const users = [
    { name: "Ganesh", city: "bhandup" },
    { name: "shilpa", city: "thane" },
    { name: "swati", city: "bhandup" }
]
const grouped = users.reduce((acc, curr) => {
    (acc[curr.city] = acc[curr.city] ? acc[curr.city] : []).push(curr)
    return acc;
}, {});

console.log(grouped);