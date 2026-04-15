// The Map object holds key-value pairs
// Any data type (objects, functions, primitives)
// in js we can store duplicate values
// map.set(key, value).

const fruits = new Map();

fruits.set("apples", 500);
fruits.set("banana", 100);
fruits.set("chiku", 400);
fruits.set("orange", 200);

console.log(fruits);
console.log(fruits.get("apples"));