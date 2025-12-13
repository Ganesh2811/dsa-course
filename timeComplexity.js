// <----- O(1) --> for loop only 1 time.

// for(let i = 0; i < n; i++) {
     // do something
// }

// O(1)

// Accessing 5th index element
// const value = arr[5];

// The time complexity is O(1) because we directly access the 5th index without any iteration.

// Bineary Search
// O(log n)


function binearySearch(arr, target){
    if(arr.length < 1){
        console.log("Array size should be greater than one");
    }
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] == target){
            return mid;
        } 
        else if(arr[mid] < target){
            low = mid + 1;   // Target is on right side
        }
        else{
            high = mid - 1;  // Target is on left side
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10,21];
const target = 8;
console.log(binearySearch(arr, target));

// O(n^2) – Nested Loop - two time for loop

// for(let i = 0; i < n; i++) {
    // for(let j = 0; j < n; j++) {
        // do something
    // }
// }

// O(n log n)

// for(let i = 0; i < n; i++) {
    // let temp = n;
    // while(temp > 1) {
        // temp = temp / 2;
        // do something
    // }
// }

// O(n^3) – Triple Nested Loops

// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < n; j++) {
//         for(let k = 0; k < n; k++) { 
//              do something
//         }
//     }
// }

// O(2^n)

// Recursive Fibonacci
// function fib(n) {
//     if(n <= 1) return n;
//     return fib(n-1) + fib(n-2);
// }

// fib(n);

// O(n!)

function permute(str, l, r) {
    if (l === r) {
        console.log(str);
    } else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i); 
        }
    }
}

function swap(str, i, j) {
    let arr = str.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('');
}

const str = "ABC";
permute(str, 0, str.length - 1);
