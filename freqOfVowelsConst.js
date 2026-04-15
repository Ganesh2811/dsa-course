
function maxFreq(s){
    const vowels = new Set(["a", "e", "i", "o", "u"])
    const freq = {}

    for(let char of s){
        freq[char] = freq[char] ? freq[char] + 1: 1;
    }
    console.log(freq)
    let maxVowelsFreq = 0;
    let maxConstFreq = 0;

    for(let char in freq){
        if(vowels.has(char)){
            maxVowelsFreq = Math.max(maxVowelsFreq, freq[char])
        }
        else{
            maxConstFreq = Math.max(maxConstFreq, freq[char])
        }
    }
    return maxConstFreq;
}



const string = "successes"
console.log(maxFreq(string));
