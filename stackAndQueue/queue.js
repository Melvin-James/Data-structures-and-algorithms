//implement a queue
// class Queue{
//     constructor(){
//         this.queue=[];
//     }
//     size(){
//         return this.queue.length;
//     }
//     isEmpty(){
//         return this.size()===0;
//     }
//     enqueue(value){
//         this.queue.push(value);
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return("queue is empty, can't perform dequeue operation");
//         }
//         this.queue.shift();
//     }
//     peek(){
//         if(this.isEmpty()){
//             return("queue is empty, can't perform peek operation");
//         }
//         return this.queue[0];
//     }
//     printQueue(){
//         let result='';
//         for(let i=0;i<this.size();i++){
//             result+=this.queue[i]+' - ';
//         }
//         console.log(result);
//     }
// }
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.printQueue();
// queue.dequeue();
// queue.printQueue();
// console.log(queue.peek());

//implement queue using linked list
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
// class queueList{
//     constructor(){
//         this.front=null;
//         this.rear=null;
//     }
//     enqueue(value){
//         let node = new Node(value);
//         if(!this.front && !this.rear){
//             this.front=node;
//             this.rear=node;
//             return;
//         }
//         let current = this.front;
//         while(current && current.next){
//             current=current.next;
//         }
//         current.next=node;
//         this.rear=node;
//     }
//     dequeue(){
//         if(!this.front) return;
//         this.front = this.front.next;
//     }
//     peek(){
//         if(!this.front) return;
//         return this.rear.value;
//     }
//     printQueue(){
//         if(!this.front) return;
//         let result = '';
//         let current = this.front;
//         while(current){
//             result+=current.value+' -> ';
//             current = current.next;
//         }
//         console.log(result+'null');
//     }
// }
// const queue = new queueList();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.peek());
// queue.printQueue();
// queue.dequeue();
// queue.printQueue();

//Implement deque without built-in functions
// class queue{
//     constructor(size){
//         this.size=size;
//         this.arr=new Array(size);
//         this.front=-1;
//         this.rear=-1;
//     }
//     isFull(){
//         return (this.front===0 && this.rear===this.size-1) || 
//         (this.front===this.rear+1)
//     }
//     isEmpty(){
//         return this.front===-1
//     }
//     insertAtFront(value){
//         if(this.isFull()){
//             return("Queue is Full, can't insert");
//         }
//         if(this.front===-1){
//             this.front=0;
//             this.rear=0;
//         }else if(this.front===0){
//             this.front = this.size-1;
//         }else{
//             this.front--;
//         }
//         this.arr[this.front]=value;
//         console.log(`${value} inserted at front`);
//     }
//     insertAtRear(value){
//         if(this.isFull()){
//             return("queue is full, can't insert");
//         }
//         if(this.front===-1){
//             this.front=0;
//             this.rear=0;
//         }else if(this.rear===this.size-1){
//             this.rear=0;
//         }
//         else{
//             this.rear++;
//         }
//         this.arr[this.rear]=value;
//         console.log(`${value} inserted at rear`);
//     }
//     deleteAtRear(){
//         if(this.isEmpty()){
//             return("the queue is empty, can't delete")
//         }
//         let removed = this.arr[this.rear];
//         if(this.rear===this.front){
//             this.front=-1;
//             this.rear=-1;
//         }else if(this.rear===0){
//             this.rear=this.size-1;
//         }else{
//             this.rear--;
//         }
//         return removed;
//     }
//     deleteAtFront(){
//         if(this.isEmpty()){
//             return("queue is empty, can't delete");
//         }
//         let removed = this.arr[this.front];
//         if(this.front===this.rear){
//             this.front=-1;
//             this.rear=-1;
//         }else if(this.front===this.size-1){
//             this.front=0;
//         }else{
//             this.front++;
//         }
//         return removed;
//     }
//     display() {
//         if (this.isEmpty()) {
//         console.log("Deque is empty");
//         return;
//         }

//         let i = this.front;
//         let result = [];

//         while (true) {
//         result.push(this.arr[i]);
//         if (i === this.rear) break;
//         i = (i + 1) % this.size;
//         }

//         console.log("Deque:", result.join(" <-> "));
//     }
// }
// const tool = new queue(5);
// tool.insertAtFront(10);
// tool.insertAtFront(20);
// tool.insertAtFront(30);
// tool.insertAtRear(40);
// tool.insertAtRear(50);
// tool.display();
// tool.deleteAtFront();
// tool.display();
// tool.deleteAtRear();
// tool.display();

//implement queue using stack
// class queueUsingStack{
//     constructor(){
//         this.s1=[];
//         this.s2=[];
//     }
//     enqueue(value){
//         this.s1.push(value);
//     }
//     dequeue(){
//         if(this.s1.length===0 && this.s2.length===0){
//             return('Queue is empty');
//         }
//         if(this.s2.length===0){
//             while(this.s1.length>0){
//                 let top = this.s1.pop();
//                 this.s2.push(top);
//             }
//         }
//         return this.s2.pop();
//     }
//     printQueue() {
//         let combined = [...this.s2.slice().reverse(), ...this.s1];
//         console.log("Queue:", combined.join(" -> "));
//     }
// }
// const queue = new queueUsingStack();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.printQueue();
// queue.dequeue();
// queue.printQueue();


// reverse a queue
// class queue{
//     constructor(){
//         this.queue=[];
//     }
//     enqueue(value){
//         this.queue.push(value);
//     }
//     dequeue(){
//         if(this.queue.length===0){
//             return("Empty queue, can't perform dequeue");
//         }
//         return this.queue.shift();
//     }
//      insertAgain(element){
//         this.enqueue(element);
//         return;
//     }
//     reverse(){
//         if(this.queue.length===0){
//             return("Empty queue can't reverse")
//         }
//         let front=this.dequeue();
//         this.reverse();
//         this.insertAgain(front);
//     }
//     printQueue(){
//         console.log('| '+this.queue.join(' | ')+' |');
//     }
// }
// const tool = new queue();
// tool.enqueue(12);
// tool.enqueue(20);
// tool.enqueue(32);
// tool.enqueue(45);
// tool.printQueue();
// tool.reverse();
// tool.printQueue();

//Convert stack to queue
// class queueUsingStack{
//     constructor(){
//         this.stack1=[];
//         this.stack2=[];
//     }
//     enqueue(value){
//         this.stack1.push(value);
//     }
//     dequeue(){
//         if(this.stack1.length===0 && this.stack2.length===0){
//             return("queue is empty, can't perform dequeue");
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 let top = this.stack1.pop();
//                 this.stack2.push(top);
//             }
//         }
//         return this.stack2.pop();
//     }
//     printQueue(){
//         let combined = [...this.stack2.slice().reverse(),...this.stack1];
//         console.log('Queue:',combined.join(' | '));
//     }
// }

//Implement queue using linked list
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class queueUsingLinkedList{
//     constructor(){
//         this.front = null;
//         this.rear = null;
//     }
//     enqueue(value){
//         let node = new Node(value);
//         if(!this.front){
//             this.front=node;
//             this.rear=node;
//         }else{
//             this.rear.next = node;
//             this.rear = node;
//         }
//     }
//     dequeue(){
//         if(!this.front){
//             return('queue is empty, dequeue not possible');
//         }
//         const dequeuedValue = this.front.value;
//         this.front = this.front.next;
//         if(!this.front) this.rear = null;
//         return dequeuedValue;
//     }
//     peek(){
//         return this.front ? this.front.value : null;
//     }
//     display(){
//         let result = '';
//         let current = this.front;
//         while(current){
//             result+=current.value+' => ';
//             current = current.next;
//         }
//         console.log(result+'null');
//     }
// }
// const q = new queueUsingLinkedList();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.enqueue(40);
// q.enqueue(50);
// q.display();
// console.log(q.peek());


// Implement queue using stack
// class queueUsingStack{
//     constructor(){
//         this.s1=[];
//         this.s2=[];
//     }
//     enqueue(value){
//         while(this.s1.length>0){
//             this.s2.push(this.s1.pop());
//         }
//         this.s1.push(value);
//         while(this.s2.length>0){
//             this.s1.push(this.s2.pop());
//         }
//     }
//     dequeue(){
//         if(this.s1.length===0){
//             return "queue is empty"
//         }
//         return this.s1.pop();
//     }
//     front(){
//         if(this.s1.length===0){
//             return null;
//         }
//         return this.s1[this.s1.length-1];
//     }
//     printQueue(){
//         console.log('Queue (front -> rear):',[...this.s1].reverse());
//     }
// }
// const queue = new queueUsingStack();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.printQueue();
// queue.dequeue();
// queue.printQueue();

//implement circular queue
// class queue{
//     constructor(size){
//         this.queue = new Array(size);
//         this.size = size;
//         this.front = -1;
//         this.rear = -1;
//     }
//     enqueue(value){
//         if((this.rear+1)%this.size === this.front){
//             return ('Queue is full');
//         }
//         if(this.front===-1){
//             this.front=0;
//             this.rear=0;
//             this.queue[this.rear]=value;
//         }else{
//             this.rear=(this.rear+1)%this.size;
//             this.queue[this.rear] = value;
//         }
//     }
//     dequeue(){
//         if(this.front===-1){
//             return('Queue is empty');
//         }
//         const removed = this.queue[this.front];
//         if(this.front===this.rear){
//             this.front=-1;
//             this.rear=-1;
//         }else{
//             this.front = (this.front+1)%this.size;
//         }
//     }
//     display(){
//         if(this.front===-1){
//             return "queue is empty";
//         }
//         let i = this.front;
//         let result = '| '; 
//         while(true){
//             result+=this.queue[i]+' | ';
//             if(i===this.rear) break;
//             i=(i+1)%this.size;
//         }
//         console.log(result);
//     }
// }
// const cq = new queue(5);
// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.enqueue(50);
// cq.display();

// cq.dequeue();
// cq.dequeue();
// cq.display();

// cq.enqueue(60);
// cq.enqueue(70);
// cq.display();

//