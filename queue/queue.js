class queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value){
        this.queue[this.rear]=value;
        this.rear++;
        console.log(`${value} inserted at rear`);
    }
    dequeue(){
        if(this.front === this.rear) return "queue is empty";
        let value =this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        console.log(`${value} removed from the front`);
    }
    display(){
        let result = '|';
        for(let i=this.front;i<this.rear;i++){
            result+=this.queue[i]+' | ';
        }
        console.log(result);
    }
}
const q = new queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.display();
q.dequeue();
q.dequeue();
q.display();