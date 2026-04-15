// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// sytax: array.splice(index, count, item1, ....., itemX)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
