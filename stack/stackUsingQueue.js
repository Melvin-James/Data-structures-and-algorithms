class stackUsingQueue{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }
    isEmpty(){
        return this.q1.length === 0;
    }
    push(value){
        this.q2.push(value);
        while(this.q1.length){
            this.q2.push(this.q1.shift());
        }
        [[this.q1],[this.q2]]=[[this.q2],[this.q1]];
        console.log(`${value} pushed to stack`);
    }
    pop(){
        if(this.isEmpty()){
            console.log(`Stack is empty`);
            return;
        }
        this.q1.shift();
    }
    peek(){
        if(this.isEmpty()){
            console.log('Stack is empty');
            return;
        }
        return this.q1[0];
    }
    display(){
        if(this.isEmpty()){
            console.log('stack is empty');
            return;
        }
        console.log('stack(top -> bottom)',this.q1.join(" "));
    }
}
const s = new stackUsingQueue();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.display();
s.pop();
s.pop();
s.display();