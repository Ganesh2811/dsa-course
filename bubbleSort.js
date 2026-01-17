// Bubble Sort
function bubbleSort(arr){
    let temp = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const arr = [5, 2, 4, 1];
console.log(bubbleSort(arr));

// Time Complexity is O(n^2)
// Space Complexity is O(1) --> constant