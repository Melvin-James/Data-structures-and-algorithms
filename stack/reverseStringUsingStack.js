class stack{
    constructor(){
        this.stack = [];
    }
    isEmpty(){
        return this.stack.length===0;
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return ("stack is empty");
        }
        this.stack.pop();
    }
    insertAtEnd(element){
        if(this.isEmpty()){
            this.stack.push(element);
            return;
        }
        let top = this.stack.pop();
        this.insertAtEnd(element);
        this.stack.push(top);
    }
    reverse(){
        if(this.isEmpty()) return;
        let top = this.stack.pop();
        this.reverse();
        this.insertAtEnd(top);
    }
    display(){
        let result ='';
        for(let i=0;i<this.stack.length;i++){
            result+=this.stack[i];
        }
        console.log(result);
    }
}
const s = new stack();
let str = 'nivlem';
for(let i=0;i<str.length;i++){
    s.push(str[i]);
}
s.display();
s.reverse();
s.display();