// write a code to check number palindrome or not ?

var isPalindrome = function (n){
    if(n < 0) return false;
    let originalNumber = n;
    let rev = 0;

    while(n > 0){
        let rem = n % 10;
        rev = 10 * rev + rem;
        n = Math.floor(n / 10);
    }
    
    return rev === originalNumber;
}

const number = 121;
let result = isPalindrome(number);
console.log(result);