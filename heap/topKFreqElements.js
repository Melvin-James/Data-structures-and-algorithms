function buildFreqMap(nums){
    let freq = {};
    for(let num of nums){
        freq[num] = (freq[num] || 0)+1;
    }
    return freq;
}
class minHeap{
    constructor(){
        this.heap = [];
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    left(i){
        return (2*i)+1
    }
    right(i){
        return (2*i)+2;
    }
    heapifyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let parentIndex = this.parent(index);
            if(this.heap[index][0] < this.heap[parentIndex][0]){
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
            if(left < length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
            if(right < length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
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
}
function topKFreqElements(nums,k){
    const freqObj = buildFreqMap(nums);
    const heap = new minHeap();
    for(let num in freqObj){
        heap.insert([freqObj[num],Number(num)]);
        if(heap.heap.length > k){
            heap.delete();
        }
    }
    const result = [];
    while(heap.heap.length > 0){
        result.push(heap.delete()[1]);
    }
    return result;
}
console.log(topKFreqElements([1,1,1,2,2,3], 2)); 
console.log(topKFreqElements([4,4,4,6,6,7,8,8,8,8], 1));  
