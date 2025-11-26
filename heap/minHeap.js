class minHeap{
    constructor(){
        this.heap = [];
    }
    parent(i){
         return Math.floor((i-1)/2)
    }
    left(i){
        return 2*i+1
    }
    right(i){
        return 2*i+2
    }
    heapifyUp(){
        let index = this.heap.length-1;
        while(index>0){
            let parentIndex = this.parent(index);
            if(this.heap[index]<this.heap[parentIndex]){
                [this.heap[index],this.heap[parentIndex]]=
                [this.heap[parentIndex],this.heap[index]];
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
    delete(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const minVal = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minVal;
    }
    heapifyDown(){
        let index = 0;
        let length = this.heap.length;
        while(true){
            let left = this.left(index);
            let right = this.right(index);
            let smallest = index;
            if(left<length && this.heap[left] < this.heap[smallest]){
                smallest = left;
            }
            if(right<length && this.heap[right] < this.heap[smallest]){
                smallest = right;
            }
            if(smallest !== index){
                [this.heap[index],this.heap[smallest]]=
                [this.heap[smallest],this.heap[index]];
                index = smallest;
            }else{
                break;
            }
        }
    }
    peek(){
        if(this.heap.length === 0) return null;
        return this.heap[0];
    }
    display(){
        console.log(this.heap);
    }
}
const heap = new minHeap();
heap.insert(10);
heap.insert(5);
heap.insert(14);
heap.insert(9);
heap.insert(2);
heap.display();
heap.delete();
heap.display();
console.log(heap.peek());