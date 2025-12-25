var secondHighest = function(s) {
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