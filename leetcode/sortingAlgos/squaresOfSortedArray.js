function squaresOfSortedArray(nums){
    let result = new Array(nums.length);
    let left = 0;
    let right = nums.length-1;
    let pos = nums.length-1;
    while(left<=right){
        let leftSq = nums[left] * nums [left];
        let rightSq = nums[right] * nums [right];
        if(leftSq>rightSq){
            result[pos] = leftSq;
            left ++;
        }else{
            result[pos] = rightSq;
            right --;
        }
        pos --;
    }
    return result;
}
let nums = [-4,-1,0,3,10];
console.log(squaresOfSortedArray(nums));