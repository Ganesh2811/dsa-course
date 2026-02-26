function secondHighest(s) {
    let firstLargest = -1;
    let secondLargest = -1;
    for( let ch of s){
        if(ch >= "0" && ch <= "9"){
            let digit = ch - "0";
            if( digit > firstLargest ){
                secondLargest = firstLargest;
                firstLargest = digit;
            }
            else if(digit < firstLargest && digit > secondLargest){
                secondLargest = digit;
            }
        }
    } 
    return secondLargest;
};

let arr = [5, 0, 10, 8, 17, 1];
console.log(secondHighest(arr));