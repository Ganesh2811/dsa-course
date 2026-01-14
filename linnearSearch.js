
function linnearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
}

let arr = [4, 9, 1, 0, 2];
const target = 0;
console.log(linnearSearch(arr, target));
