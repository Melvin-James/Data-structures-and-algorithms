function nextGreaterElement(nums1,nums2){
    let map = {};
    let stack = [];
    for(let num of nums2){
        while(stack.length && num > stack[stack.length-1]){
            map[stack.pop()]=num;
        }
        stack.push(num);
    }
    return nums1.map((num)=>map[num] ?? -1);
}
let nums1 = [4,1,2];
let nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1,nums2));