class circularQueue{
    constructor(size){
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }
    enqueue(value){
        if((this.rear+1)%this.size === this.front){
            console.log('Queue is Full');
            return;
        }
        if(this.front === -1){
            this.front = 0;
            this.rear =0;
        }else{
            this.rear=(this.rear+1)%this.size
        }
        this.queue[this.rear]=value;
        console.log(`Inserted ${value}`);
    }
    dequeue(){
        if(this.front===-1){
            console.log('Queue is empty');
            return;
        }
        const removed = this.queue[this.front];
        if(this.front===this.rear){
            this.front=-1;
            this.rear=-1;
        }else{
            this.front = (this.front+1)%this.size;
        }
        console.log(`removed ${removed}`);
        return;
    }
    display(){
        let result = '| ';
        let i = this.front;
        while(true){
            result+=this.queue[i]+' | ';
            if(i===this.rear) break;
            i=(i+1)%this.size;
        }
        console.log(result);
    }
}
const cq = new circularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.display();
cq.dequeue();
cq.dequeue();
cq.display();
cq.enqueue(60);
cq.enqueue(70);
cq.enqueue(80);
cq.display();