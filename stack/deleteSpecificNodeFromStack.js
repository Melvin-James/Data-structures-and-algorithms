class stack{
    constructor(){
        this.stack = [];
        this.temp = [];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.stack.length === 0){
            console.log("stack is empty, can't perform pop");
            return;
        }
        return this.stack.pop();
    }
    peek(){
        if(this.stack.length === 0){
            console.log("stack is empty, can't perform peek");
            return;
        }
        return this.stack[this.stack.length-1];
    }
    deleteSpecNode(value){
        if(this.stack.length===0){
            console.log("stack is empty, can't perform delete.");
            return;
        }
        while(this.stack.length && this.peek()!==value){
            this.temp.push(this.pop());
        }
        if(this.stack.length){
            this.pop();
        }
        while(this.temp.length){
            this.push(this.temp.pop());
        }
        console.log(`${value} deleted`);
    }
    display(){
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
s.push(40);
s.push(50);
s.display();
s.deleteSpecNode(30);
s.display();