// Find the fist non repeating character in a string example input is letcode output is I, input is loveliercode output is v,input is aab,output is null


function nonRepeatingCharater(str){
    const map = {}
    for( let char of str){
        map[char] = map[char] ? map[char] + 1 : 1;  // for first time letter -> (undefined || 0) + 1 for second time letter -> (1 || 0) + 1                                 
    }
    console.log(map);
    
    for(let char of str){
        if(map[char] === 1){
            return char;
        }
    }
    return null;
}


console.log(nonRepeatingCharater("letcode")); // l
console.log(nonRepeatingCharater("lovelier")); // o
console.log(nonRepeatingCharater("aab")); // null

