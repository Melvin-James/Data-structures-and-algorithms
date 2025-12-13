function heapSort(arr){
    let n = arr.length;
    for(let i = Math.floor((n/2)-1);i>=0;i--){
        heapifyDown(arr,n,i);
    }
    for (let end = n - 1; end > 0; end--) {
        [arr[0], arr[end]] = [arr[end], arr[0]];
        heapifyDown(arr, end, 0);
    }
    return arr;
}
function heapifyDown(arr,size,index){
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if(left < size && arr[left] > arr[largest]){
            largest = left;
        }
        if(right < size && arr[right] > arr[largest]){
            largest = right;
        }
        if(largest !== index){
            [arr[index],arr[largest]]=
            [arr[largest],arr[index]];
            heapifyDown(arr,size,largest);
        }
}
console.log(heapSort([5, 3, 8, 4, 1, 2]));