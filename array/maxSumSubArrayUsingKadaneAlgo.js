function maxSumSubArray(input){
    let currentSum = input[0];
    let maxSum = input[0];
    for(let i=1;i<input.length;i++){
        currentSum = Math.max(input[i],currentSum+=input[i]);
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum;
}
let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log('max sum:',maxSumSubArray(input));