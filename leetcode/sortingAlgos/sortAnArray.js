function quickSort(nums){
    if(nums.length < 2) return  nums;
    let pivot = nums[nums.length-1];
    let left = [];
    let right = [];
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]<pivot){
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
let nums = [5,1,1,2,0,0];
console.log(quickSort(nums));