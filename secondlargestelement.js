// Find Second Largest Element in Array

function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    if(arr.length < 2){
        return "Array should have an more than 1 element"
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? -1 : secondLargest;
}

const inputArray = [10, 5, 8, 20, 15, 18];
console.log(secondLargest(inputArray))