// write an function that returns the smallest number in an array


let arr = [5, 0, 10, 8, 17, 1];

function smallestNumber(arr){
    let smallest = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

let result = smallestNumber(arr);
console.log(result);
