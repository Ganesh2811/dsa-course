// find the second largest number of an array

let arr = [5, 0, 10, 8, 17, 1, 12];

function secondLargestNumber(arr){
    if(arr.length < 2){
        console.log("Array atleast content more than 2 value");
    }

    let firstLargest = -1;
    let secondLargest = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let result = secondLargestNumber(arr);
console.log(result);
