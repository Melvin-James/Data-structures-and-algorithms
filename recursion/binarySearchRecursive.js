//Binary search recursive method
const array = [12, 34, 45, 56, 89, 90];

function binarySearchRecursive(array, target, low=0, high=array.length-1) {
    if(low > high) return -1;

    let mid = Math.floor((low+high) / 2);

    if (array[mid] === target) {
        return mid;
    } else if (target < array[mid]) {
        binarySearchRecursive(array,target,low,mid-1);
    }else{
        binarySearchRecursive(array,target,mid+1,high);
    }
    
}

console.log(binarySearchRecursive(array,45));