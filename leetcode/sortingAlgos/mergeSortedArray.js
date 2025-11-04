function mergeSortedArray(nums1,m,nums2,n){
    let p1 = m-1;
    let p2 = n-1;
    let p = (m+n)-1;
    while(p2>=0){
        if(p1>=0 && nums1[p1]>nums2[p2]){
            nums1[p]=nums1[p1];
            p1--;
        }else{
            nums1[p]=nums2[p2];
            p2--
        }
        p--;
    }
    return nums1;
}
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
console.log(mergeSortedArray(nums1,3,nums2,3));