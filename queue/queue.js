class queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value){
        this.queue[this.rear++]=value;
        console.log(`${value} inserted at rear`);
    }
    dequeue(){
        if(this.front === this.rear){
            console.log('Empty queue');
            return;
        }
        let value =this.queue[this.front++];
        console.log(`${value} removed from the front`);

        //reset when empty
        if(this.rear === this.front){
            this.rear = 0;
            this.front = 0;
            this.queue = [];
        }
    }
    display(){
        let result = '| ';
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