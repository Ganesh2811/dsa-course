// Base case: stop condition (when to stop calling itself)
// Recursive case: part where function calls itself

// Infinite Recursion leads to stack overflow

// n = n - 1
// print(n)
// print( --n)

// Endless Recusion
// function recursion(num){
//     if(num == 0) return;
//     console.log(num);
//     num = num - 1;
//     recursion(num);
// }


// let a = 10;
// recursion(a)

// print 1 to n

let n = 10;
let x = 1;

function recursion(x){
    if(x > n) return;
    console.log(x);
    recursion(++x);
}
recursion(x);