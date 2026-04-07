// Given a string, find the first non-repeating character and return it.
// First Non-Repeating Character

const string = "aabbcc";

function nonRepeatingChar(str){
    let obj = {}
    for(let char of str){
        obj[char] = obj[char] ? obj[char] + 1 : 1;
    }
    for(let key in obj){
        if (obj[key] === 1){
            return key;
        }
    }
    return -1
}

console.log(nonRepeatingChar(string))