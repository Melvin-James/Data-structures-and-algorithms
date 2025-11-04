class stack{
    constructor(){
        this.stack = [];
        this.minStack = [];
    }
    getMin(){
        return this.minStack[this.minStack.length-1];
    }
    push(value){
        this.stack.push(value);
        if(this.minStack.length === 0 || value < this.getMin()){
            this.minStack.push(value);
        }
    }
    pop(){
        if(this.stack.length === 0){
            console.log('Stack is empty');
            return;
        }
        let removed = this.stack.pop();
        if(removed === this.getMin()){
            this.minStack.pop();
        }
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    display(){
        if(this.stack.length === 0){
            console.log('Stack is empty');
            return;
        }
        let result = '| ';
        for(let i=0;i<this.stack.length;i++){
            result+=this.stack[i]+' | ';
        }
        console.log(result);
    }
}
const s = new stack();
s.push(10);
s.push(20);
s.push(30);
s.push(5);
s.display();
console.log(s.getMin());
s.pop();
s.display();
console.log(s.getMin());