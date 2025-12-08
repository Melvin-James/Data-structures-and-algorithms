let minHeap = [4, 8, 6, 12, 10];
function BuildMaxHeap(minHeap){
    let n = minHeap.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapifyDown(minHeap,n,i);
    }
    return minHeap;
}
function heapifyDown(array,size,index){
    let left = (2*index)+1;
    let right = (2*index)+2;
    let largest = index;
    if(left < size && array[left] > array[largest]) largest = left;
    if(right < size && array[right] > array[largest]) largest = right;
    if(index !== largest){
        [array[index],array[largest]]=
        [array[largest],array[index]];
        heapifyDown(array,size,largest);
    }
}
console.log(BuildMaxHeap(minHeap));