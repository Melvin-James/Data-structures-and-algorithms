class stack{
    constructor(){
        this.stack=[];
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.isEmpty()) return "stack is empty"
        this.stack.pop();
    }
    peek(){
        return this.stack[this.size()-1];
    }
    display(){
        let result = '|';
        for(let i=0;i<this.size();i++){
            result+=this.stack[i]+' | ';
        }
        console.log(result);
    }
}
const s=new stack();
s.push(100);
s.push(90);
s.push(80);
s.push(70);
s.display();
console.log(s.peek());
console.log(s.isEmpty());
console.log(s.size());
s.pop();
s.display();