var reverse = function(n) {
    let nCopy = n;
    n = Math.abs(n);
    let rev = 0;

    while(n > 0){
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor( n / 10 ); 
    }
    // let limit = Math.pow(2, 31);
    let limit = 2**31;
    if(rev < -limit || rev > limit) return 0;
    return (nCopy < 0) ? -rev : rev;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

