let array = [5, 8, 12, 34, 90];
function recursiveBinarySearch(array,target,low=0,high=array.length-1){
    if(low>high){
        return -1;
    }

    let mid = Math.floor((low+high)/2);
    if(array[mid]===target){
        return mid;
    }

    if(array[mid]<target){
        return recursiveBinarySearch(array,target,low=mid+1,high);
    }else{
        return recursiveBinarySearch(array,target,low,high=mid-1)
    }
}
console.log(recursiveBinarySearch(array,34));