class Stack{
    constructor(){
        this.stack = [];
        this.maxStack = [];
    }
    getMax(){
        return this.maxStack[this.maxStack.length-1];
    }
    push(value){
        this.stack.push(value);
        if(this.maxStack.length === 0 || value >= this.getMax()){
            this.maxStack.push(value);
        }
    }
    pop(){
        if(this.stack.length === 0) return;
        let removed = this.stack.pop();
        if(this.getMax()===removed){
            this.maxStack.pop();
        }
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(5);
stack.push(9);
stack.push(14);
console.log(stack.getMax());