// write a function that returns the numbers of negative numbers in an array.

let arr = [2, -9, 17, 0, 1, -10, -4, 8];
let finalArray = [];

function negativeNumber(arr){}{
    for(let i=0; i < arr.length; i++){
        if(arr[i] < 1){
          finalArray.push(arr[i]);
        }
    }
    console.log("My sorted Array is", finalArray);
    console.log("Length of an sorted array", finalArray.length);
    
}

