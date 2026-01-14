function binearySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;


    while(left <= right ){
        let middle = Math.floor((left + right) / 2);
        if(arr[middle] === target){
            return middle;
        }
        if(target > arr[middle]){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }
    return -1;
}

let arr = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(binearySearch(arr, target));