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
        if(this.minStack.length===0 || value <= this.getMin()){
            this.minStack.push(value);
        }
    }
    pop(){
        if(this.stack.length===0) return "Empty stack";
        let removed = this.stack.pop();
        if(removed === this.getMin()){
            this.minStack.pop();
        }
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
}
const s = new stack();
s.push(23);
s.push(56);
s.push(46);
s.push(10);
s.push(70);
console.log(s.getMin());
s.pop();
s.pop();
console.log(s.getMin());
console.log(s.peek());