const n1 = [1, 2, 3];
const n2 = [4, 5];
const ne = [...n1, ...n2];
console.log(ne);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined)