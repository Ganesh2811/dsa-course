// write a functions that returns the count of digits in a number

function countDigits(n){
    if (n == 0) return 1;
    let count = 0;
    n = Math.abs(n);
    while(n > 0){
        n = Math.floor(n / 10); 
        count ++
    }
    return count;
}

const number = -259;
let result = countDigits(number);
console.log(result);
