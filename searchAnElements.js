// write a function that search for an element in an array and returns the index, if the elements is not present then just return -1

let arr = [10, 34, 25, 56, 45];

function searchAnElements(arr, target){
    for(let i=0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

let result = searchAnElements(arr, 56);
console.log(result);

// searchAnElements(arr, 56);
// searchAnElements(arr, 45);
// searchAnElements(arr, 1);
