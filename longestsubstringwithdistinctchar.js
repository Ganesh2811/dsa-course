// Longest Substring with At Most K Distinct Characters
// Given a string str and an integer k, find the length of the longest substring that contains at most k distinct characters.

function longestKDistinct(str, k) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        // add char
        map.set(str[right], (map.get(str[right]) || 0) + 1);
        console.log(map);
        while (map.size > k) {
            map.set(str[left], map.get(str[left]) - 1);

            if (map.get(str[left]) === 0) {
                map.delete(str[left]);
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestKDistinct("eceba", 2));