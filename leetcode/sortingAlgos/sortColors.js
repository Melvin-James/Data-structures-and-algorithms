// time - O(n^2)
// space - O(1)
var sortColors = function(nums) {
    let swapped ;
    do{
        swapped=false;
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                [nums[i],nums[i+1]]=[nums[i+1],nums[i]];
                swapped = true;
            }
        }
    }while(swapped)
    return nums;
};
let nums = [2,0,2,1,1,0];
console.log(sortColors(nums));