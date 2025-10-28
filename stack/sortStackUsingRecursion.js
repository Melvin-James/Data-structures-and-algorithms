class stack{
    constructor(){
        this.stack = [];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.stack.length===0){
            console.log("stack is empty, can't perform pop operation");
            return;
        }
        return this.stack.pop();
    }
    insertInOrder(value){
        if(this.stack.length===0 || value>this.stack[this.stack.length-1]){
            this.push(value);
            return;
        }
        let top = this.pop();
        this.insertInOrder(value);
        this.push(top);
    }
    sort(){
        if(this.stack.length===0) return;
        let top = this.pop();
        this.sort();
        this.insertInOrder(top);
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
s.push(20);
s.push(40);
s.push(10);
s.push(50);
s.display();
s.sort();
s.display();