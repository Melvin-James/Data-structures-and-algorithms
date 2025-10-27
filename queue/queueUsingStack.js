class queueUsingStack{
    constructor(){
        this.s1=[];
        this.s2=[];
    }
    enqueue(value){
        this.s1.push(value);
    }
    dequeue(){
        if(this.s1.length === 0 && this.s2.length === 0){
            console.log("Queue is empty, can't perform dequeue operation.");
            return;
        }
        if(this.s2.length===0){
            while(this.s1.length>0){
                let top = this.s1.pop();
                this.s2.push(top);
            }
        }
        return this.s2.pop();
    }
    display(){
        let combined =[...this.s2.slice().reverse(),...this.s1];
        console.log(combined);
    }
}
const q = new queueUsingStack();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.display();
q.dequeue();
q.dequeue();
q.display();
q.enqueue(50);
q.enqueue(60);
q.enqueue(70);
q.display();