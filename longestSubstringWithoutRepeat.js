// without repeating character
function longestSubstring(str){
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    
    for(let right = 0; right < str.length; right++){
        while(set.has(str[right])){
            set.delete(str[left]);
            left++
        }
        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3 abc
console.log(longestSubstring("bbbb")); // 1 b
console.log(longestSubstring("peeked")); // 3 pek
console.log(longestSubstring("ever")); // 3 ver