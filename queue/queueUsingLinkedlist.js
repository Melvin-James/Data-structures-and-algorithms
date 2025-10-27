class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class queueUsingLinkedList{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        let node = new Node(value);
        if(!this.front && !this.rear){
            this.rear = node;
            this.front = node;
            return;
        }
        node.next = this.rear;
        this.rear = node;
    }
    dequeue(){

    }
    display(){
        let result = '';
        let current = this.front;
        while(current){
            result+=current.value+' -> ';
            current = current.next;
        }
        console.log(result);
    }
}