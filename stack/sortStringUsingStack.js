class stack{
    constructor(){
        this.stack = [];
    }
    isEmpty(){
        return this.stack.length === 0;
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        return this.stack.pop();
    }
    display(){
        let result = '| ';
        for(let i=0;i<this.stack.length;i++){
            result+=this.stack[i]+' | ';
        }
        console.log(result);
    }
    insertInOrder(value){
        if(this.stack.length===0 || this.stack[this.stack.length-1]<=value){
            this.stack.push(value);
            return;
        }
        let top = this.stack.pop();
        this.insertInOrder(value);
        this.stack.push(top);
    }
    sort(){
        if(this.stack.length===0) return;
        let top = this.stack.pop();
        this.sort();
        this.insertInOrder(top);
    }
}
let str = 'bdeac';
const s = new stack();
for(let char of str){
    s.push(char);
}
s.display();
s.sort();
s.display();
