var missingNumber = function(nums) {
    let n = nums.length;
    let totalSums = n * ( n + 1 ) / 2;
    
    let partialSums = 0;
    for(let i = 0; i < n; i++){
        partialSums = partialSums + nums[i]
    }
    return totalSums - partialSums;
};