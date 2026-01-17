function insertionSort(arr){
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let current = arr[i];
        let prev = i - 1;
        while (arr[prev] > current && prev >= 0){
            arr[prev + 1] = arr[prev];
            prev--;
        }   
        arr[prev + 1] = current;
    }
    return arr;
}
const arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];
console.log(insertionSort(arr));

// Time Complexity is O (n^2)
// Space complexity is 