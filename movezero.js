// Given an array, move all 0s to the end while maintaining the order of non-zero elements.
// using swaping

const array = [0, 1, 3, 0, 4];

function moveZero(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

console.log(moveZero(array))
