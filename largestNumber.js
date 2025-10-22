// write an function that returns the largest number in an array

let arr = [5, 0, 10, 8, 17, 1];

function largestNumber(arr){
    let largest = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let result = largestNumber(arr);
console.log(result);
 

