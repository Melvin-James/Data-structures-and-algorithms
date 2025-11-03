class stackUsingQueue{
    constructor(){
        this.q=[];
    }
    push(value){
        this.q.push(value);
        for(let i=0;i<this.q.length-1;i++){
            this.q.push(this.q.shift());
        }
        console.log(`${value} inserted`);
    }
    pop(){
        if(this.q.length===0){
            console.log('Stack is empty');
            return;
        }
        return this.q.shift();
    }
    peek(){
        if(this.q.length === 0){
            console.log('Stack is empty');
            return;
        }
        return this.q[0];
    }
    display(){
        if(this.q.length===0){
            console.log('Stack is empty');
            return;
        }
        console.log('Stack(top -> bottom):',this.q.join(" "));
    }
}
const s = new stackUsingQueue();
s.push(90);
s.push(80);
s.push(70);
s.push(60);
s.display();
s.pop();
s.pop();
s.display();
console.log(s.peek());