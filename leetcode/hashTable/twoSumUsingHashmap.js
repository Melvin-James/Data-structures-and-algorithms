//two sum - selfMade
// function twoSum(array,target){
//     for(let i=0;i<array.length;i++){
//         let second = target-array[i];
//         if(array.includes(second)){
//             return [array[i],second];
//         }
//     }
// }
// let array = [3,4,5,2,7,10];
// console.log(twoSum(array,9));

//feedback - Outer loop: for (let i = 0; i < array.length; i++) runs n times.
//inside the loop, .includes(), this checks if second exists in the array.
//.includes() in JavaScript performs a linear search, so it takes O(n) time.
//So total time = t(c) =
// O(n) (loop) × O(n) (includes)
// O(n²) overall.
// you are not using any extra data structures — just variables like i and 
// second. Hence, space complexity = O(1) (constant space).

/*----------------------------------------------------------------------------*/

//two sum using two pointers - If the array is sorted, 
//we can use a two-pointer technique.
// function twoSum(array,target){
//     let left = 0, right = array.length-1;
//     while(left<right){
//         let sum = array[left]+array[right];
//         if(sum===target) return [array[left],array[right]];
//         else if(sum<target) left++;
//         else right++;
//     }
// }
// console.log(twoSum([5,6,7,8,9],15));
//Time Complexity: O(n)
//Space Complexity: O(1)

/*----------------------------------------------------------------------------*/

//two sum using hashmap
// function twoSumUsingHashmap(array,target){
//     const seen = new Set();
//     for(let num of array){
//         let compliment = target - num;
//         if(seen.has(compliment)){
//             return [num,compliment];
//         }
//         seen.add(num);
//     }
// }
// let array = [3,4,5,2,7,10];
// console.log(twoSumUsingHashmap(array,9));
//Time: O(n) — each lookup and insert in a Set is O(1)
//Space: O(n) — worst case, we store all elements in seen.

/*----------------------------------------------------------------------------*/

