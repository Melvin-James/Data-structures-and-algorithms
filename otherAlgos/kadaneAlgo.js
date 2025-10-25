//Problem: Find the contiguous subarray with the largest sum - 
// kadane's approach
// function subArrayWithLargestSum(array){
//     let currentSum = array[0];
//     let maxSum = array[0];
//     for(let i=1;i<array.length;i++){
//         currentSum = Math.max(array[i],currentSum+=array[i]);
//         maxSum = Math.max(maxSum,currentSum);
//     }
//     return maxSum;
// }
// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log('Max sum:',subArrayWithLargestSum(array));
//Time - O(n) Single pass through the array
//Space - O(1) Uses only two variables

/*----------------------------------------------------------------------------*/

