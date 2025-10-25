//SLIDING WINDOW ALGORITHM
//Problem 1: t(c)= Brute force (O(n*k))
// Given an array of integers and a number k, 
// find the maximum sum of any contiguous subarray of size k.
// function maxSumSubArray(array,k){
//     let maxSum=-Infinity;
//     for(let i=0;i<array.length-k;i++){
//         let sum=0;
//         for(let j=i;j<i+k;j++){
//             sum+=array[j];
//         }
//         maxSum=Math.max(maxSum,sum);
//     }
//     return maxSum;
// }
// console.log('maximum sum of subarray:',maxSumSubArray([2,3,4,2,6,2,51],3));

//optimized using sliding window - t(c)=O(n)
// function maxSumSubArray(array,k){
//     let windowSum = 0;
//     let maxSum = 0;
//     for(let i=0;i<k;i++){
//         windowSum+=array[i];
//     }
//     maxSum=windowSum;
//     for(let i=k;i<array.length;i++){
//         windowSum=windowSum+array[i]-array[i-k];
//         maxSum = Math.max(maxSum,windowSum);
//     }
//     return maxSum;
// }
// let array = [2,3,4,2,5,6,2,1];
// console.log('Maximum sum of subarray:',maxSumSubArray(array,3));

//Problem 2:
//Given a string, find the length of the longest substring without 
// repeating characters.
// function subStr(str){
//     let seen = new Set();
//     let left = 0;
//     let maxLength=0;
//     for(let right=0;right<str.length;right++){
//         while(seen.has(str[right])){
//             seen.delete(str[left]);
//             left++;
//         }
//         seen.add(str[right]);
//         maxLength=Math.max(maxLength, right-left+1);
//     }
//     return maxLength;
// }
// console.log('Length of longest substring without repeating characters:',subStr('abcabcbb'));

//Problem 3:
//Given an array of positive numbers and a target sum,
// find the length of the smallest contiguous subarray whose sum ≥ target.
// If there is no such subarray, return 0.
// function targetSumSubArray(array,targetSum){
//     let left = 0;
//     let minLength = Infinity;
//     let sum = 0;
//     for(let right=0;right<array.length;right++){
//         sum+=array[right];
//         while(sum>=targetSum){
//             minLength=Math.min(minLength,right-left+1);
//             sum=sum-array[left];
//             left++;
//         }
//     }
//     return minLength === Infinity ? 0 : minLength;
// }
// let array = [2,3,1,2,4,3];
// console.log('length of the smallest sub array whose sum >= target:',targetSumSubArray(array,7));

//Leetcode 121, best time to buy and sell stocks
// function maxProfit(prices){
//     let left = 0;
//     let right = 1;
//     let maxProfit = 0;
//     while(right<prices.length){
//         if(prices[right]>prices[left]){
//             const profit = prices[right]-prices[left];
//             maxProfit = Math.max(maxProfit,profit);
//         }else{
//             left=right;
//         }
//         right++
//     }
//     return maxProfit;
// }
// let prices = [7,1,5,3,6,4];
// console.log('maximum profit:',maxProfit(prices));