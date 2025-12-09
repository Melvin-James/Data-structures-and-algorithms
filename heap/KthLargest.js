class minHeap{
    constructor(){
        this.heap = [];
    }
    parent(i){
        return Math.floor(i-1/2);
    }
    left(i){
        return (2*i)+1
    }
    right(i){
        return (2*i)+2;
    }
    heapifyUp(){
        let index = this.heap.length-1;
        while(index > 0){
            let parentIndex = this.parent(index);
            if(this.heap[index] < this.heap[parentIndex]){
                [this.heap[index],this.heap[parentIndex]]=
                [this.heap[parentIndex],this.heap[index]]
                index = parentIndex;
            }else{
                break;
            }
        }
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyDown(){
        let index = 0;
        let length = this.heap.length;
        while(true){
            let left = this.left(index);
            let right = this.right(index);
            let smallest = index;
            if(left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < length && this.heap[right] < this.heap[smallest]) smallest = right;
            if(index !== smallest){
                [this.heap[index],this.heap[smallest]]=
                [this.heap[smallest],this.heap[index]];
                index = smallest;
            }else{
                break;
            }
        }
    }
    delete(){
        if(this.heap.length === 0) return;
        if(this.heap.length === 1) return this.heap.pop();
        let minVal = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minVal;
    }
    size(){
        return this.heap.length;
    }
    peek(){
        return this.heap[0];
    }
}
function kthLargest(nums,k){
    const heap = new minHeap();
    for(let num of nums){
        heap.insert(num);
        if(heap.size()>k){
            heap.delete();
        }
    }
    return heap.peek();
}
console.log(kthLargest([3,2,1,5,6,4], 2));
console.log(kthLargest([7,10,4,3,20,15], 3));
console.log(kthLargest([1], 1));