// stack memory
// primitive data types and it's fast access compared with heap

let n1 = 10;
let n2 = n1;
n2 = 20;
console.log(n1);

// heap memory
// object, array and functions
// non primitive data types and it's slow access compared with stack but size is larger compare with stack

let obj1 = { name: "Ajay" };
let obj2 = obj1;
obj2.name = "Vijay";
console.log(obj1.name);
