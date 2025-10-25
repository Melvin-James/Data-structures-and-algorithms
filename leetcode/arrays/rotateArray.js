// Problem: Rotate the array to the right by k steps 
// function rotateArray(array,k){
//     while(k>0){
//         array.unshift(array.pop());
//         k--;
//     }
//     return array;
// }
// let array = [1,2,3,4,5,6];
// console.log(rotateArray(array, 3));
//Time - O(n * k) - inefficient 
//space - O(1) 

//More Efficient (O(n) time, O(1) space)
// function reverse(array,left,right){
//     while(left<right){
//         [array[left],array[right]]=[array[right],array[left]];
//         left++;
//         right--;
//     }
// }
// function rotateArrayToRight(array,k){
//     k%=array.length;
//     array.reverse();
//     reverse(array,0,k-1);
//     reverse(array,k,array.length-1);
//     return array;
// }
// let array = [1,2,3,4,5,6,7,8];
// console.log(rotateArrayToRight(array,3));