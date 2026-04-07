// Maximum Sum Subarray of Size K

function maxSum(arr, k){
    let windowSum = 0;
    let maxSum = 0;
    for(let i = 0; i < k; i++){
        windowSum = windowSum + arr[i];
    }
    maxSum = windowSum;
    for(let i = k; i < arr.length; i++){
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum;

}
const array = [2, 1, 5, 1, 3, 2];
console.log(maxSum(array, 3))