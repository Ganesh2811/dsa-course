// find the duplicates from an array

const arr = [4, 9, 1, 0, 2, 4];
const freq = {};
const duplicates = [];

for (const num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}

for (const key in freq) {
  if (freq[key] > 1) {
    duplicates.push(Number(key));
  }
}

console.log(duplicates); // [4]
