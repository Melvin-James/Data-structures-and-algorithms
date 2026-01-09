let array = [5, 8, 12, 34, 90];
function binarySearch(array,target){
    let low = 0;
    let high = array.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(array[mid]===target){
            return mid;
        }else if(array[mid]<target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}
console.log(binarySearch(array,50));