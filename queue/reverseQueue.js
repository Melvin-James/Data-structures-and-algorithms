class queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty(){
        return this.front === this.rear;
    }
    enqueue(value){
        this.queue[this.rear++]=value;
        console.log(`Inserted ${value}`);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty, can't perform dequeue operation");
            return;
        }
        return this.queue[this.front++];
    }
    reverse(){
        if(this.isEmpty()) return;
        let front = this.dequeue();
        this.reverse();
        this.enqueue(front);
    }
    display(){
        let result = '| ';
        for(let i = this.front; i<this.rear;i++){
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
q.enqueue(50);
q.display();
q.dequeue();
q.dequeue();
q.display();
q.enqueue(10);
q.enqueue(20);
q.display();
q.reverse();
q.display();