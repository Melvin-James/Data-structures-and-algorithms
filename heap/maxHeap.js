class maxHeap{
    constructor(){
        this.heap = [];
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    left(i){
        return (2*i)+1;
    }
    right(i){
        return (2*i)+2;
    }
    heapifyUp(){
        let index = this.heap.length-1;
        while(index>0){
            let parentIndex = this.parent(index);
            if(this.heap[index]>this.heap[parentIndex]){
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
    heapifyDown(){
        let index = 0;
        let length = this.heap.length;
        while(true){
            let left = this.left(index);
            let right = this.right(index);
            let largest = index;
            if(left < length && this.heap[left]>this.heap[largest]){
                largest = left;
            }
            if(right < length && this.heap[right] > this.heap[largest]){
                largest = right;
            }
            if(largest!==index){
                [this.heap[index],this.heap[largest]]=
                [this.heap[largest],this.heap[index]];
                index = largest;
            }else{
                break;
            }
        }
    }
    delete(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        let maxval = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return maxval;
    }
    peek(){
        return this.heap.length === 0 ? null :  this.heap[0];
    }
    display(){
        console.log(this.heap);
    }
}
const h = new maxHeap();
h.insert(10);
h.insert(30);
h.insert(20);
h.insert(5);
h.insert(40);
h.display();

console.log("Deleted:", h.delete());
h.display()

console.log("Peek:", h.peek());
