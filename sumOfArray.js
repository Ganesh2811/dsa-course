let arr = [5, 3, 2, 0, 1];

function sumOfArray(num){
    if(num < 0) return 0;
    return arr[num] + sumOfArray(num - 1);
}
console.log(sumOfArray(arr.length - 1));
